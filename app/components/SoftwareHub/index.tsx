"use client";

import { motion } from "framer-motion";
import RoleSection from "./RoleSection";
import PurposeSection from "./PurposeSection";

export default function SoftwareHub() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          ソフトウェア開発
        </motion.h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          立場や目的に応じて、最適な開発支援をご提案します。
        </p>
      </div>

      <RoleSection />

      <div className="relative my-20 text-center">
        <span className="relative bg-white px-4 text-gray-400 text-sm">
          認知拡大や業務効率化をご検討の方へ
        </span>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></div>
      </div>

      <PurposeSection />
    </section>
  );
}
