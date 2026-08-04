import {
  GraduationCap, BookOpen, Building2, Globe, Home, Trophy,
  ClipboardList, Dumbbell, Mic2, Monitor, Award, Star, Shield,
  Lightbulb, Handshake, Sprout, Users, Target, Eye, MapPin, Phone,
  Mail, Clock, FileDown, CheckCircle, Heart, Sparkles, BadgeCheck,
  type LucideIcon,
} from "lucide-react";

// Keep in sync with the `icon` option lists in src/sanity/schemas/*.ts
export const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap, BookOpen, Building2, Globe, Home, Trophy,
  ClipboardList, Dumbbell, Mic2, Monitor, Award, Star, Shield,
  Lightbulb, Handshake, Sprout, Users, Target, Eye, MapPin, Phone,
  Mail, Clock, FileDown, CheckCircle, Heart, Sparkles, BadgeCheck,
};

export const ICON_NAMES = Object.keys(ICON_MAP);

export function getIcon(name?: string): LucideIcon {
  return (name && ICON_MAP[name]) || Sparkles;
}
