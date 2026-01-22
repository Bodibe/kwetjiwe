"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const leftNavItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
]

const rightNavItems = [
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Make header relatively positioned instead of fixed/sticky
    <header className="relative bg-white border-b border-border shadow-sm font-sans">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="hidden lg:grid grid-cols-[0.8fr_auto_0.8fr] items-center w-full">
          <div className="flex items-center justify-end gap-6">
            {leftNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-7 py-3 text-lg font-sans font-bold uppercase tracking-wide rounded-lg transition-all",
                  pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link href="/" className="flex items-center justify-center group mx-8">
            <Image
              src="/logo-kwetjiwe.png"
              alt="Kwetjiwe Consulting"
              width={400}
              height={166}
              className="h-36 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          <div className="flex items-center justify-start gap-6">
            {rightNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-7 py-3 text-lg font-sans font-bold uppercase tracking-wide rounded-lg transition-all",
                  pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between w-full gap-4">
          <Link href="/" className="flex items-center flex-1">
            <Image
              src="/logo-kwetjiwe.png"
              alt="Kwetjiwe Consulting"
              width={280}
              height={116}
              className="h-24 w-auto"
            />
          </Link>

          <button
            className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <div className="container mx-auto p-6 flex flex-col gap-2">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-sans font-semibold uppercase tracking-wide rounded-lg transition-all",
                  pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
