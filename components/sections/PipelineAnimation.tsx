"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { pipelineStages as stages } from "@/constants"

export function PipelineAnimation() {
  return (
    <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-900 transition-colors">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
        <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pipeline" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-pipeline)" />
        </svg>
      </div>
      
      <Container>
        <SectionHeader
          title="The Most Powerful Sales Pipeline Ever Built."
          subtitle="Watch how a simple lead turns into closed revenue. The system automatically routes, evaluates, and converts."
        />

        <motion.div 
          className="relative mt-24 max-w-6xl mx-auto hidden md:block" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Pipeline Track Wrapper */}
          <div className="absolute top-[64px] left-[12.5%] w-[75%] h-[40px] z-0 pointer-events-none">
             {/* Horizontal Metallic Pipe */}
             <div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 rounded-full border-y border-slate-400 dark:border-slate-600 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4)] flex items-center px-4 overflow-hidden">
                {/* Flowing liquid/light inside pipe */}
                <motion.div 
                   className="h-2 w-full bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-500 to-transparent blur-[2px]"
                   animate={{ x: ["-100%", "100%"] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
             </div>
             
             {/* Dropping Pipe (at the end) */}
             <div className="absolute right-0 top-0 w-[40px] h-[220px] bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 border-x border-slate-400 dark:border-slate-600 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4)] z-[-1] rounded-b-3xl">
             </div>

             {/* The Rolling Lead Coin */}
             <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-20"
                animate={{
                   left: ["0%", "33.33%", "66.66%", "100%", "100%", "100%", "0%"],
                   top: ["50%", "50%", "50%", "50%", "200px", "200px", "50%"],
                   rotate: [0, 180, 360, 540, 540, 540, 0],
                   opacity: [0, 1, 1, 1, 1, 0, 0],
                   scale: [0, 1, 1, 1, 1, 0, 0]
                }}
                transition={{
                   duration: 5,
                   repeat: Infinity,
                   ease: "easeInOut",
                   times: [0, 0.1, 0.4, 0.7, 0.85, 0.95, 1]
                }}
             >
                {/* Physical Coin Metaphor */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 border-[3px] border-yellow-100 dark:border-yellow-200 shadow-[0_0_20px_rgba(252,211,77,0.8)] flex items-center justify-center relative overflow-hidden ring-2 ring-amber-600 dark:ring-amber-500">
                   <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent rounded-full" />
                   <span className="text-amber-900 text-2xl font-black relative z-10 drop-shadow-md">$</span>
                   
                   {/* Light reflection spinning on coin */}
                   <motion.div 
                     className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-45deg]"
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                   />
                </div>
             </motion.div>
          </div>
          
          {/* Machines and Vault */}
          <div className="grid grid-cols-4 gap-0 relative z-10">
            {stages.map((stage, index) => {
              const isVault = index === 3;
              
              return (
                 <div key={stage.id} className="flex flex-col items-center">
                    
                    {!isVault ? (
                       // Machine Checkpoint UI
                       <div className="mt-[36px] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center relative z-10 transform hover:scale-105 transition-transform duration-300">
                          <stage.icon className={`w-10 h-10 ${stage.color}`} />
                          
                          {/* Indicator Light */}
                          <motion.div 
                             className={`absolute -top-3 w-6 h-6 rounded-full border-2 border-slate-800 ${stage.bg} flex items-center justify-center`}
                             animate={{ opacity: [0.5, 1, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          >
                             <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                          </motion.div>

                          {/* Machine base shadows */}
                          <div className="absolute -bottom-[2px] w-full h-[4px] bg-black/10 dark:bg-black/40 rounded-full blur-[2px]" />
                       </div>
                    ) : (
                       // Revenue Vault UI
                       <div className="mt-[200px] bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-950 border-4 border-slate-300 dark:border-slate-700 w-44 p-4 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20 relative flex flex-col items-center justify-center pt-8">
                          {/* The Drop Slot */}
                          <div className="absolute -top-4 w-16 h-8 bg-slate-900 rounded-lg shadow-inner overflow-hidden border border-slate-700">
                             {/* Flashing confirmation light inside slot */}
                             <motion.div 
                               className="absolute inset-0 bg-green-500"
                               animate={{ opacity: [0, 0, 0, 0, 0.8, 0] }}
                               transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.4, 0.7, 0.85, 1], ease: "linear" }} 
                             />
                          </div>

                          <stage.icon className="w-12 h-12 text-emerald-500 mb-2 drop-shadow-md" />
                          <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-widest font-mono drop-shadow-sm uppercase">REVENUE</h3>
                          
                          <div className="w-full mt-4 h-2 bg-slate-300 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner">
                             <motion.div 
                                className="h-full bg-emerald-500 rounded-full"
                                animate={{ width: ["0%", "0%", "0%", "0%", "100%", "0%"] }}
                                transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.4, 0.7, 0.85, 1] }}
                             />
                          </div>
                          
                          {/* Vault ambient glow */}
                          <motion.div
                            className="absolute inset-0 bg-emerald-500/20 blur-[40px] pointer-events-none -z-10 rounded-full"
                            animate={{ opacity: [0, 0, 0, 0, 1, 0] }}
                            transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.4, 0.7, 0.85, 1] }} 
                          />
                       </div>
                    )}
                    
                    {/* The Explanatory Text Below */}
                    <div className={`text-center space-y-4 px-2 w-full ${isVault ? 'mt-8' : 'mt-16'} min-h-[160px]`}>
                      <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight mb-1">
                          {stage.name}
                        </h3>
                        <p className={`text-xs font-bold ${stage.color}`}>
                          {stage.feature}
                        </p>
                      </div>

                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_15px_rgb(0,0,0,0.02)] dark:shadow-[0_4px_15px_rgb(0,0,0,0.2)]">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                          Role
                        </p>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-300">
                           {stage.benefit}
                        </p>
                      </div>
                    </div>

                 </div>
              )
            })}
          </div>
        </motion.div>

        {/* Mobile View */}
        <div className="mt-16 md:hidden space-y-8 relative">
           <div className="absolute top-0 bottom-0 left-[38px] w-2 bg-gradient-to-b from-slate-200 to-slate-200 dark:from-slate-800 dark:to-slate-800 rounded-full border-l border-r border-slate-300 dark:border-slate-700 z-0" />
           
           {stages.map((stage, index) => {
              const isVault = index === 3;
              
              return (
                 <div key={stage.id} className="relative z-10 flex gap-6 items-start">
                    {!isVault ? (
                       <div className="w-20 h-20 shrink-0 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl flex items-center justify-center relative">
                          <stage.icon className={`w-8 h-8 ${stage.color}`} />
                       </div>
                    ) : (
                       <div className="w-20 h-24 shrink-0 bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl flex flex-col items-center justify-center relative">
                          <stage.icon className="w-6 h-6 text-emerald-500 mb-1" />
                          <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 font-mono">VAULT</div>
                       </div>
                    )}
                    
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm w-full">
                       <h3 className="font-black text-slate-900 dark:text-white mb-1 leading-tight">{stage.name}</h3>
                       <p className={`text-xs font-bold ${stage.color} mb-2`}>{stage.feature}</p>
                       <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 italic leading-snug">"{stage.benefit}"</p>
                    </div>
                 </div>
              )
           })}

           {/* Mobile Dropping Coin */}
           <motion.div
             className="absolute left-[26px] z-20"
             animate={{ top: ["0%", "85%", "85%", "0%"], opacity: [0, 1, 0, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 border-2 border-yellow-200 shadow-[0_0_10px_rgba(252,211,77,0.5)] flex items-center justify-center">
                 <span className="text-amber-900 text-sm font-black">$</span>
              </div>
           </motion.div>
        </div>

      </Container>
    </section>
  )
}
