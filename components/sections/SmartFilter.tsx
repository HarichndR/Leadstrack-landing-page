"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Filter, Send } from "lucide-react"
import { filterOptions } from "@/constants"
export function SmartFilter() {
  const [activeFilter, setActiveFilter] = React.useState("location")

  return (
    <section id="smart-data" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-y border-slate-100 dark:border-slate-800">
      <div className="orb orb-blue top-1/2 right-0 h-[400px] w-[400px] opacity-10" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeader
              align="left"
              title="Smart Notifications. Precision Filtering."
              subtitle="Stop blasting messages to everyone. Target your leads with surgical precision using our system's deep data filtering."
              className="mb-8"
            />
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-blue-600 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0">
                  <Filter className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Granular Lead Filters</h4>
                  <p className="text-sm text-slate-700 font-medium dark:text-slate-300">Filter by Location, Category, Age, and Custom Entities to find the perfect prospect.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-green-600 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Blast with Relevance</h4>
                  <p className="text-sm text-slate-700 font-medium dark:text-slate-300">Send personalized WhatsApp or SMS notifications to specific segments in one click.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8 relative">
              <div className="flex items-center justify-between mb-8">
                 <h4 className="font-black text-blue-600 dark:text-blue-500">Smart Dashboard</h4>
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
              </div>

              <div className="space-y-6">
                 <div className="grid grid-cols-3 gap-2">
                    {filterOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setActiveFilter(opt.id)}
                        className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all ${
                          activeFilter === opt.id 
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                          : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                        }`}
                      >
                        <opt.icon className="h-4 w-4" /> {opt.name}
                      </button>
                    ))}
                 </div>

                 <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 min-h-[160px] border border-dashed border-slate-200 dark:border-slate-800">
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Active Results</p>
                    <div className="space-y-3">
                       {filterOptions.find(o => o.id === activeFilter)?.values.map((val, i) => (
                         <motion.div 
                           initial={{ x: -10, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           key={val} 
                           className="flex items-center justify-between bg-white dark:bg-gray-950 p-3 rounded-lg shadow-sm"
                         >
                            <span className="text-sm font-bold">{val}</span>
                            <span className="text-xs text-blue-500 font-bold">{120 + i * 42} Leads</span>
                         </motion.div>
                       ))}
                    </div>
                 </div>

                 <button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl shadow-xl shadow-green-900/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                    Send WhatsApp Blast <Send className="h-4 w-4" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
