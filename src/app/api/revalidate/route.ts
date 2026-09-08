import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Called by a Sanity webhook on every document create/update/delete, so
// edits made in Studio show up on the live site within seconds instead of
// waiting for the 1-hour ISR window to expire.
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }
    if (!body?._type) {
      return NextResponse.json({ message: "Bad Request — missing _type" }, { status: 400 });
    }

    const paths = [
      "/",
      "/about",
      "/academics",
      "/admissions",
      "/contact",
      "/facilities",
      "/gallery",
      "/news",
      "/testimonials",
    ];
    for (const path of paths) revalidatePath(path);

    return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message }, { status: 500 });
  }
}
