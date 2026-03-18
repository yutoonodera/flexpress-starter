// app/recruit/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RecruitPage() {
  return (
    <>
    <Header />
    <main className="max-w-4xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Recruit
      </motion.h1>

      {/* comment */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-gray-700 leading-relaxed text-center mb-12"
      >
        To User,
        This page is recruit page made by original React souce.So,you can custimize freely.
      </motion.p>

      <section className="space-y-16">
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15, duration: 0.6 }}
  className="p-8 rounded-2xl bg-yellow-50 border border-yellow-200 shadow-sm"
>
  <h2 className="text-xl font-semibold text-yellow-800 mb-6 text-center">
    Benefits for applicants
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 紹介者向け */}
    <div className="p-6 bg-white rounded-xl border border-yellow-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
        Incentives1
      </h3>
      <p className="text-gray-700 leading-relaxed text-left">
       insentive contents
      </p>
    </div>

    {/* 入社予定者向け */}
    <div className="p-6 bg-white rounded-xl border border-yellow-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
        Incentives2
      </h3>
      <p className="text-gray-700 leading-relaxed text-left">
        insentive contents
      </p>
    </div>

  </div>

</motion.div>




{/* job */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
>
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Job1</h2>
  <p className="text-gray-700 mb-4">
    test
  </p>

  <ul className="list-disc ml-5 text-gray-700 space-y-1">
    <li>Condition1</li>
    <li>Condition2</li>
  </ul>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
>
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Job2</h2>
  <p className="text-gray-700 mb-4">
    test
  </p>

  <ul className="list-disc ml-5 text-gray-700 space-y-1">
    <li>Condition1</li>
    <li>Condition2</li>
  </ul>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
>
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Job3</h2>
  <p className="text-gray-700 mb-4">
    test
  </p>

  <ul className="list-disc ml-5 text-gray-700 space-y-1">
    <li>Condition1</li>
    <li>Condition2</li>
  </ul>
</motion.div>
  </section>

<div className="text-center mt-16">
  <p className="text-gray-600 mb-4">
    Please Contact Us!
  </p>
  <Link
    href="/contact"
    className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
  >
    Contact is here
  </Link>
</div>
</main>
<Footer />
</>
  );
}
