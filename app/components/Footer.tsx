// components/Footer.tsx
export default function Footer() {
    const footerLinks: { label: string; href: string }[][] = [
      [
        { label: "Acme Corp", href: "/" },
        { label: "News", href: "/news" },
        { label: "Service", href: "/service" },
        { label: "Store", href: "/store" },
        { label: "Sales", href: "/sale" },
      ],
      [
        { label: "blogs", href: "/blogs" },
        { label: "Techblog", href: "/techblog" },
        { label: "D.log", href: "/dlog" },
        { label: "Recruit", href: "/recruit" },
        { label: "History", href: "/history" },
        { label: "Contact", href: "/contact" },
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
