import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { 
  MessageSquare, 
  BarChart3, 
  Users, 
  Zap, 
  Layers, 
  ShieldCheck 
} from "lucide-react"

const features = [
  {
    title: "WhatsApp Automation",
    description: "Automate follow-ups and service reminders directly on WhatsApp with verified templates.",
    icon: MessageSquare,
  },
  {
    title: "Visual Pipeline Builder",
    description: "Drag-and-drop lead management to track progress from New Inquiry to Won Deal.",
    icon: Layers,
  },
  {
    title: "Smart Lead Tracking",
    description: "Never lose a lead again. Centralized tracking for FB Ads, Web forms, and manual entries.",
    icon: Zap,
  },
  {
    title: "Team Management",
    description: "Assign leads to agents, set tasks, and monitor performance in real-time.",
    icon: Users,
  },
  {
    title: "Advanced Analytics",
    description: "Get deep insights into lead conversion rates, agent performance, and ROI.",
    icon: BarChart3,
  },
  {
    title: "Secure & Scalable",
    description: "Enterprise-grade security and a global API to grow with your business needs.",
    icon: ShieldCheck,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <Container>
        <SectionHeader
          title="Everything you need to scale your sales."
          subtitle="Powerful features designed to automate your workflow and maximize your lead conversion rates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-medium dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
