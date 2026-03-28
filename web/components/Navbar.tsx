'use client'

import Link from 'next/link'
import { ArrowRight, Hexagon } from 'lucide-react'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Tutorial', href: '/tutorial' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05050f]/90 backdrop-blur-md border-b border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Hexagon
              size={28}
              className="text-violet-500 fill-violet-950 group-hover:text-violet-400 transition-colors"
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            </div>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Onto<span className="text-violet-400">loom</span>
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-400 group-hover:w-full transition-all duration-200" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Start button */}
        <Link
          href="/workspace"
          className="start-btn group inline-flex items-center gap-2 px-5 py-2 rounded-lg
            bg-gradient-to-r from-violet-600 to-violet-700
            hover:from-violet-500 hover:to-violet-600
            text-white text-sm font-semibold
            border border-violet-500/40
            transition-all duration-200"
        >
          Start
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </nav>
    </header>
  )
}
