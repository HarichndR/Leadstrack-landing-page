import { MapPin, Tag, Users, UserPlus, PhoneCall, FileText, CheckCircle } from "lucide-react"

export const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export const socialLinks = [
  { 
    name: "Facebook", 
    href: "#", 
    icon: "facebook"
  },
  { 
    name: "Instagram", 
    href: "#", 
    icon: "instagram"
  },
  { 
    name: "Youtube", 
    href: "#", 
    icon: "youtube"
  },
  { 
    name: "LinkedIn", 
    href: "#", 
    icon: "linkedin"
  },
]

export const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pipeline", href: "#solution" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "/changelog" },
  ],
  solutions: [
    { name: "Real Estate", href: "#use-cases" },
    { name: "Education", href: "#use-cases" },
    { name: "Automotive", href: "#use-cases" },
    { name: "Agencies", href: "#use-cases" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ],
}

export const filterOptions = [
  { id: "location", name: "Location", icon: MapPin, values: ["Mumbai", "Delhi", "Bangalore"] },
  { id: "category", name: "Category", icon: Tag, values: ["Real Estate", "Education", "Agencies"] },
  { id: "age", name: "Lead Age", icon: Users, values: ["< 24 hrs", "1-7 days", "Legacy"] },
]

export const pipelineStages = [
  { 
    id: 1, 
    name: "Intelligent Capture", 
    feature: "Multi-Channel Sync",
    application: "Facebook, Web, WhatsApp",
    benefit: "Capture 100% of inquiries instantly.",
    icon: UserPlus, 
    color: "text-blue-600 dark:text-blue-500", 
    bg: "bg-blue-600",
    bgLight: "bg-blue-600/10 dark:bg-blue-500/20",
    borderColor: "border-blue-600/20 dark:border-blue-500/30",
    glow: "shadow-blue-600/20"
  },
  { 
    id: 2, 
    name: "Smart Categorize", 
    feature: "Smart Filter Engine",
    application: "Location, Age, Category",
    benefit: "Focus only on high-intent prospects.",
    icon: PhoneCall, 
    color: "text-purple-600 dark:text-purple-500", 
    bg: "bg-purple-600",
    bgLight: "bg-purple-600/10 dark:bg-purple-500/20",
    borderColor: "border-purple-500/20 dark:border-purple-500/30",
    glow: "shadow-purple-500/20"
  },
  { 
    id: 3, 
    name: "Instant Automate", 
    feature: "Rule-Based Triggers",
    application: "Auto WhatsApp & SMS",
    benefit: "Respond in < 30s for 10x conversion.",
    icon: FileText, 
    color: "text-amber-600 dark:text-amber-500", 
    bg: "bg-amber-600",
    bgLight: "bg-amber-600/10 dark:bg-amber-500/20",
    borderColor: "border-amber-500/20 dark:border-amber-500/30",
    glow: "shadow-amber-500/20"
  },
  { 
    id: 4, 
    name: "Closed & Won", 
    feature: "Full Sales Analytics",
    application: "Deal Attribution",
    benefit: "Scale your revenue with predictability.",
    icon: CheckCircle, 
    color: "text-green-600 dark:text-green-500", 
    bg: "bg-green-600",
    bgLight: "bg-green-600/10 dark:bg-green-500/20",
    borderColor: "border-green-500/20 dark:border-green-500/30",
    glow: "shadow-green-500/20"
  },
]
