"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // アイコン

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="text-xl font-bold">
          <Link href="/flexpress">拡張型セキュアWP「FlePress」</Link>
        </div>

        {/* モバイルメニュー開閉ボタン */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
