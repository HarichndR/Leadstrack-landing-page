import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { ArrowRight, ShieldCheck, Zap, Headset } from "lucide-react"

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Premium Dark Abstract Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      {/* Lighting elements */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Border Reflection Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 md:p-24 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">

          {/* Inner subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md pb-2">
            Ready to automate your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-500 drop-shadow-sm">sales pipeline?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses already scaling with Leadstrack.
            Start your free trial today. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button size="lg" className="w-full sm:w-auto hover:bg-slate-100 bg-white text-slate-900 text-lg font-black h-16 px-12 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1),inset_0_-4px_0_rgba(0,0,0,0.1)] border-0 flex items-center justify-center gap-2 group">
              Start Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-slate-950 text-white hover:bg-slate-800 border-slate-700 text-lg font-black h-16 px-12 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] border-b-4 border-b-slate-900 border gap-2">
              Talk to an Expert
            </Button>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-500" /> Secure data</span>
            <span className="hidden sm:inline text-slate-800">•</span>
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /> 99.99% Uptime Guarantee</span>
            <span className="hidden sm:inline text-slate-800">•</span>
            <span className="flex items-center gap-2"><Headset className="w-5 h-5 text-emerald-500" /> 24/7 Priority Support</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
