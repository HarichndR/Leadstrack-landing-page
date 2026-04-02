"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-[height,background-color,padding]",
        scrolled
          ? "h-16 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 shadow-sm"
          : "h-24 bg-transparent"
      )}
    >
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-500">
                Leadstrack
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-item text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-500 transition-colors font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/demo">
                <Button variant="ghost" className="text-base font-semibold">
                  See Demo Video
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-extrabold shadow-sm">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 pb-6 space-y-4 bg-white dark:bg-gray-950">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 px-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <Link href="/demo" className="w-full">
                <Button variant="ghost" className="w-full justify-center">
                  Book Demo
                </Button>
              </Link>
              <Link href="/signup" className="w-full">
                <Button variant="primary" className="w-full justify-center">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
