"use client";

import { motion } from "framer-motion";
import HealthBar from "@/components/HealthBar";
import ConsumptionChart from "@/components/ConsumptionChart";
import { Zap, TrendingUp, DollarSign } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Current Bill Estimate",
      value: "Rs. 4,820",
      change: "+12% vs last month",
      isWarning: true,
      icon: DollarSign,
    },
    {
      label: "Units This Cycle",
      value: "182 Units",
      change: "18 units under limit",
      isWarning: false,
      icon: Zap,
    },
    {
      label: "6-Mo Average",
      value: "186 Units",
      change: "On track for Protected",
      isWarning: false,
      icon: TrendingUp,
    },
  ];

  // Animation Variant Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 pt-24 px-6 pb-16 w-full relative overflow-hidden">
      
      {/* Background Ambient Glow Animations */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-96 h-96 bg-[#F2A93B]/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-6 relative z-10"
      >
        
        {/* Header - Aligned with Logo Brand Colors */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
        >
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-extrabold text-[#0F172A] tracking-tight"
            >
              Dashboard
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-sm font-semibold text-slate-600 mt-1"
            >
              Monitor your electricity consumption, tariff status, and bill estimates.
            </motion.p>
          </div>
        </motion.div>

        {/* Top KPI Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  boxShadow: "0px 12px 24px -6px rgba(15, 23, 42, 0.12)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-5 flex items-start justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Micro Hover Flare Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{s.label}</p>
                  <motion.p 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-black text-[#0F172A] mt-1"
                  >
                    {s.value}
                  </motion.p>
                  <p className={`text-xs font-semibold mt-1.5 ${s.isWarning ? "text-amber-600" : "text-emerald-600"}`}>
                    {s.change}
                  </p>
                </div>

                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="p-2.5 bg-slate-100 rounded-xl text-[#0F172A] border border-slate-200/60 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300"
                >
                  <Icon size={20} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Protected Status Health Bar */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <HealthBar monthsUnder200={4} />
        </motion.div>

        {/* Consumption Chart */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <ConsumptionChart />
        </motion.div>

      </motion.div>
    </main>
  );
}