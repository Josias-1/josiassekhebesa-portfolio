"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export default function MetricCard({
  value,
  suffix,
  label,
  description,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-950/70
      p-8
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-sky-500/60
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative">

        <h2 className="text-5xl font-black text-white">

          <CountUp
            end={value}
            duration={2}
          />

          {suffix}

        </h2>

        <p className="mt-4 text-xl font-semibold text-white">
          {label}
        </p>

        <p className="mt-2 leading-7 text-slate-400">
          {description}
        </p>

      </div>
    </motion.div>
  );
}