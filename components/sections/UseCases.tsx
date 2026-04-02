import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Building2, GraduationCap, Car, Rocket, UserCircle } from "lucide-react"

const useCases = [
  {
    title: "Real Estate",
    description: "Capture leads from MagicBricks, 99Acres & FB. Track property site visits and bookings.",
    icon: Building2,
    color: "text-blue-600",
  },
  {
    title: "Education",
    description: "Manage student admissions from inquiries to enrollment with automated follow-ups.",
    icon: GraduationCap,
    color: "text-blue-600",
  },
  {
    title: "Automotive",
    description: "Track showroom walk-ins and service inquiries. Auto-reminders for service bookings.",
    icon: Car,
    color: "text-blue-600",
  },
  {
    title: "Startups",
    description: "Scale your sales team with a flexible CRM that grows with your customer base.",
    icon: Rocket,
    color: "text-blue-600",
  },
  {
    title: "Agencies",
    description: "Manage multiple client lead pipelines in one centralized dashboard effortlessly.",
    icon: UserCircle,
    color: "text-blue-600",
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <Container>
        <SectionHeader
          title="Built for every industry."
          subtitle="Leadstrack is flexible enough to handle the unique workflows of any business model."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <useCase.icon className={`h-6 w-6 ${useCase.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-slate-700 font-medium dark:text-slate-300 text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
          {/* Final "Your Industry" card */}
          <div className="bg-blue-600 p-6 rounded-2xl shadow-[0_8px_30px_rgb(37,99,235,0.3)] flex flex-col justify-center items-center text-center text-white border border-blue-500">
             <h3 className="text-xl font-bold mb-2 text-white">Your Business?</h3>
             <p className="text-blue-50 font-medium text-sm mb-4">
                We build custom entities for your unique workflow.
             </p>
             <button className="text-sm font-bold text-white underline decoration-2 underline-offset-4 hover:text-blue-100">Contact Us</button>
          </div>
        </div>
      </Container>
    </section>
  )
}
