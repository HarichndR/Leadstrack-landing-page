import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Play } from "lucide-react"

export function Demo() {
  return (
    <section id="demo" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader
          title="See Leadstrack in Action."
          subtitle="Watch a quick 2-minute walkthrough of how Leadstrack can transform your sales process."
        />
        
        <div className="max-w-4xl mx-auto relative group">
          <div className="aspect-video bg-white dark:bg-slate-900 rounded-3xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 dark:border-slate-800 overflow-hidden relative z-10">
            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden group">
               {/* Video Placeholder/Thumbnail */}
               <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                     <Play className="h-10 w-10 fill-current ml-1" />
                  </div>
               </div>
               
               {/* Fake UI elements to make it look like a real app underneath */}
               <div className="absolute bottom-8 left-8 right-8 h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                   <div className="h-full w-1/3 bg-blue-500 rounded-full" />
               </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600/20 blur-xl rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-600/20 blur-xl rounded-full" />
        </div>
      </Container>
    </section>
  )
}
