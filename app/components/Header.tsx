"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // アイコン

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "はじまりをつくる", href: "/make-start" },
    { label: "拡張型セキュアWP", href: "/flexpress" },
    { label: "立場から選ぶ", href: "/services/software/roles" },
    { label: "目的から選ぶ", href: "/services/software/purpose" },
    { label: "弊サイト構成", href: "/system-diagram" },
    { label: "テックブログ", href: "/techblog" },
    { label: "Recruit", href: "/recruit" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="text-xl font-bold">
          <Link href="/">株式会社movee|モビー</Link>
        </div>

        {/* PCナビ */}
        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイルメニュー開閉ボタン */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t">
          <ul className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)} // クリックで閉じる
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
