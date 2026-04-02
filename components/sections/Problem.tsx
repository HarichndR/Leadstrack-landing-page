import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { AlertCircle, Zap, ShieldAlert } from "lucide-react"

const problems = [
  {
    title: "Losing Valuable Leads",
    description:
      "Important inquiries get buried in spreadsheets or chat apps, leading to missed opportunities and lost revenue.",
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-500/10",
  },
  {
    title: "Manual Follow-up Burnout",
    description:
      "Teams spend hours manually messaging prospects, causing delays and inconsistent communication.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    title: "Zero Pipeline Visibility",
    description:
      "Lack of a clear overview makes it impossible to track progress, assign tasks, or predict sales growth.",
    icon: ShieldAlert,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-500/10",
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <Container>
        <SectionHeader
          title="Tired of losing leads to manual work?"
          subtitle="Don't let your sales process be the bottleneck. Most businesses fail because of poor follow-up systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700`}
              >
                <problem.icon className={`h-7 w-7 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-slate-700 font-medium dark:text-slate-300">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
