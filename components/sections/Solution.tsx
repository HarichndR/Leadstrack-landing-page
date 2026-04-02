import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CheckCircle2, MessageSquare, Workflow } from "lucide-react"

const solutions = [
  {
    title: "Automated Lead Capture",
    description:
      "Instantly sync leads from Facebook Lead Ads, website forms, and WhatsApp chats into one central hub.",
    icon: MessageSquare,
  },
  {
    title: "Smart Workflow Automation",
    description:
      "Let our engine handle the heavy lifting. Automate assignments, tags, and notifications based on custom rules.",
    icon: Workflow,
  },
  {
    title: "Instant Verification",
    description:
      "Verify and categorize leads automatically to ensure your sales team only focuses on high-quality prospects.",
    icon: CheckCircle2,
  },
]

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden border-y border-slate-100 dark:border-slate-800">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeader
              align="left"
              title="The all-in-one solution for modern sales teams."
              subtitle="Stop juggling multiple tools. Leadstrack brings lead management, CRM, and automation together to grow your business effortlessly."
              className="mb-8"
            />
            
            <div className="space-y-8">
              {solutions.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="aspect-[4/3] w-full rounded-2xl p-2 bg-slate-200 dark:bg-slate-800 shadow-2xl relative z-10 border border-slate-300 dark:border-slate-700">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden">
                   
                   {/* Mockup Toolbar */}
                   <div className="h-12 w-full bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-2">
                     <div className="h-3 w-3 rounded-full bg-red-400"></div>
                     <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                     <div className="h-3 w-3 rounded-full bg-green-400"></div>
                   </div>

                   {/* Mockup Content Grid */}
                   <div className="flex-1 p-6 grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950">
                      
                      {/* 1. Automated Lead Capture (Top Full Width) */}
                      <div className="col-span-2 bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col gap-4 shadow-sm">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lead Sources</span>
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Syncing Active</span>
                         </div>
                         <div className="flex items-center justify-between px-4">
                            <div className="flex flex-col gap-3">
                               <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                                 <div className="w-6 h-6 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"><MessageSquare className="w-3 h-3 text-blue-600" /></div>
                                 <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Facebook Ads</span>
                               </div>
                               <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                                 <div className="w-6 h-6 rounded bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center"><MessageSquare className="w-3 h-3 text-emerald-600" /></div>
                                 <span className="text-xs font-bold text-slate-700 dark:text-slate-300">WhatsApp Chat</span>
                               </div>
                            </div>

                            {/* Arrow mapping to center */}
                            <div className="flex-1 flex justify-center items-center opacity-40">
                               <div className="w-full h-[2px] bg-slate-300 dark:bg-slate-700 mx-4 relative">
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-400 dark:border-slate-500 rotate-45" />
                               </div>
                            </div>

                            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-900/50 flex flex-col items-center justify-center shadow-lg">
                               <span className="text-lg font-black text-blue-600 dark:text-blue-400">142</span>
                               <span className="text-[8px] font-bold text-slate-500 uppercase">Leads</span>
                            </div>
                         </div>
                      </div>
                      
                      {/* 2. Smart Workflow Automation (Bottom Left) */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Active Rule</span>
                         <div className="flex-1 flex flex-col gap-2">
                           <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-2 rounded-lg flex items-center gap-2">
                              <Workflow className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                              <span className="text-xs font-bold text-amber-900 dark:text-amber-200">IF: New Inquiry</span>
                           </div>
                           <div className="w-[2px] h-4 bg-slate-200 dark:bg-slate-700 mx-auto" />
                           <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 p-2 rounded-lg flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                              <span className="text-xs font-bold text-blue-900 dark:text-blue-200">THEN: Send WhatsApp</span>
                           </div>
                         </div>
                      </div>

                      {/* 3. Instant Verification (Bottom Right) */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm">
                         <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Verified Pipeline</span>
                         <div className="space-y-3 flex-1 flex flex-col justify-center">
                            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                               <div className="flex items-center gap-2 flex-1">
                                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0"><span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">JD</span></div>
                                  <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-900 dark:text-white leading-none">John Doe</span>
                                    <span className="text-[8px] text-slate-500">Interested in Pro</span>
                                  </div>
                               </div>
                               <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            </div>
                            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                               <div className="flex items-center gap-2 flex-1">
                                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0"><span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">AS</span></div>
                                  <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-900 dark:text-white leading-none">Alice Smith</span>
                                    <span className="text-[8px] text-slate-500">Demo Requested</span>
                                  </div>
                               </div>
                               <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            </div>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl opacity-30" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl opacity-30" />
          </div>
        </div>
      </Container>
    </section>
  )
}
