
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play, ShieldCheck, CheckCircle2, MessageCircle, UserPlus, Building2, GraduationCap, Car } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">

      {/* Background Dust - Multi-colors mixed and optimized with lower blur for peak performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-[opacity]">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[80px] opacity-70" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[80px] opacity-70" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-300/10 dark:bg-emerald-600/5 blur-[80px] opacity-70" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-amber-300/10 dark:bg-amber-600/5 blur-[80px] opacity-60" />

        {/* Optimized noise overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center relative z-10 max-w-5xl mx-auto">
          {/* Top Pill Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 relative z-20 will-change-[transform,opacity]"
          >
            <span className="inline-flex items-center rounded-full px-5 py-2 text-xs font-bold bg-white text-slate-800 border border-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
              Leadstrack 2.0 is now live
            </span>
          </motion.div>

          {/* Epic Main Headline Container with Optimized Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 relative w-full flex flex-col items-center will-change-[transform,opacity]"
          >
             <h1 
               className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-slate-900 dark:text-white leading-[1.05] z-20 relative drop-shadow-lg"
             >
               Stop Losing Leads.<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 drop-shadow-sm">
                 Start Closing Deals.
               </span>
             </h1>
             
             {/* Optimized Blurred Floor Reflection */}
             <h1 
               className="absolute top-[100%] left-0 w-full text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-slate-900 dark:text-white leading-[1.05] origin-top opacity-20 dark:opacity-30 select-none pointer-events-none blur-[6px] z-10"
               style={{ 
                 transform: "scaleY(-1) translateY(4px)",
                 WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 40%)" 
               }}
               aria-hidden="true"
             >
               Stop Losing Leads.<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500">
                 Start Closing Deals.
               </span>
             </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed z-10 tracking-tight"
          >
            The cleanest CRM ever built for Indian businesses. Capture, categorize, and auto-engage your leads instantly on WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-5 mt-6 z-10"
          >
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full h-14 px-8 text-base font-black bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border-0 flex items-center justify-center gap-2">
                Start Your Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/demo" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="group w-full h-14 px-8 text-base font-black rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 border-b-4 dark:border-slate-800 dark:border-b-slate-950 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[0_4px_15px_-3px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Play className="h-4 w-4 fill-current group-hover:text-blue-600 transition-colors" /> See Demo Video
              </Button>
            </Link>
          </motion.div>

          {/* Hyper-Clean Notification Mockup Sequence */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl mt-20 relative hidden md:flex items-center justify-center will-change-[transform,opacity]"
          >
            {/* Staggered Cards Container */}
            <div className="relative w-full h-[320px] flex justify-center">

              {/* 1. Lead Capture */}
              <div className="absolute top-8 left-4 bg-white dark:bg-slate-900 border border-slate-200 border-b-4 dark:border-slate-800 p-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center gap-4 z-10 w-80 animate-[bounce_4s_ease-in-out_infinite_reverse] will-change-transform">
                <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-blue-100 border-b-2 dark:border-slate-700 shrink-0 shadow-inner">
                  <UserPlus className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-black text-slate-900 dark:text-white">New Lead Synced</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">From Facebook Ads</span>
                </div>
              </div>

              {/* 2. Auto WhatsApp */}
              <div className="absolute top-24 right-4 bg-white dark:bg-slate-900 border border-slate-200 border-b-4 dark:border-slate-800 p-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center gap-4 z-20 w-[340px] animate-[bounce_5s_ease-in-out_infinite] will-change-transform">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-emerald-100 border-b-2 dark:border-slate-700 shrink-0 shadow-inner">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-black text-slate-900 dark:text-white">Brochure Sent</span>
                  <span className="text-xs font-black text-emerald-600 flex items-center gap-1 uppercase tracking-wider">Automated WhatsApp <CheckCircle2 className="w-3 h-3" /></span>
                </div>
              </div>

              {/* 3. Deal Closed */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-800 border-[3px] border-slate-800 border-b-[6px] dark:border-slate-700 p-6 rounded-3xl shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center gap-5 z-30 w-[380px] hover:-translate-y-2 transition-transform duration-300 will-change-transform">
                <div className="w-16 h-16 bg-gradient-to-b from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center border-2 border-amber-300 border-b-4 shrink-0 shadow-[0_5px_15px_rgba(245,158,11,0.5)]">
                  <ShieldCheck className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xl font-black text-white">Deal Closed: ₹12,500</span>
                  <span className="text-sm font-bold text-amber-500 uppercase tracking-widest mt-1">Closed in 4 hours</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>

      {/* Structured Social Proof Strip */}
      <div className="w-full mt-auto pt-24 pb-8 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950/50 shadow-[inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
        <Container>
          <p className="text-center text-xs font-black text-slate-400 dark:text-slate-600 mb-6 uppercase tracking-[0.2em]">
            Built specifically for high-volume industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-opacity duration-300">
            <div className="flex items-center gap-3 text-2xl font-black text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-default"><Building2 className="w-8 h-8" /> Real Estate</div>
            <div className="flex items-center gap-3 text-2xl font-black text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-default"><GraduationCap className="w-8 h-8" /> Education</div>
            <div className="flex items-center gap-3 text-2xl font-black text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-default"><Car className="w-8 h-8" /> Automotive</div>
          </div>
        </Container>
      </div>

    </section>
  )
}
