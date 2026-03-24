// components/Footer.tsx
export default function Footer() {
    const footerLinks: { label: string; href: string }[][] = [
      [
        { label: "株式会社movee|モビー", href: "/" },
        { label: "はじまりをつくる", href: "/make-start" },
        { label: "FlexPress-拡張型セキュアWP", href: "/flexpress" },
        { label: "FrexPress機能ガイド", href: "/flexpress/guide" },
        { label: "弊サイト構成", href: "/system-diagram" },
        { label: "Techblog", href: "/techblog" },
      ],
      [
        { label: "立場から選ぶ", href: "/services/software/roles" },
        { label: "目的から選ぶ", href: "/services/software/purpose" },
        { label: "Recruit", href: "/recruit" },
        { label: "D.log", href: "/dlog" },
        { label: "contact", href: "/contact" },
        { label: "特定商取引法に基づく表記", href: "/legal/asct" },
      ],
    ];

    return (
      <footer className="bg-neutral-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {footerLinks.map((column, colIdx) => (
              <ul key={colIdx} className="space-y-2">
                {column.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 movee Inc. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
