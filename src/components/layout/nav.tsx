"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "./logo";
import Button from "../ui/button";
import { pillarsNav, primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

/**
 * Sticky nav that adopts the theme of whichever section sits beneath it.
 * Sections declare data-theme; we watch them through a thin band at the top
 * of the viewport and mirror the winner onto the header.
 */
function useSectionTheme(): Theme {
  const [theme, setTheme] = useState<Theme>("dark");
  const path = usePathname();
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]:not(header):not(header *)"));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const t = e.target.getAttribute("data-theme");
            setTheme(t === "light" ? "light" : "dark");
          }
        }
      },
      // A 1px band just under the header bar.
      { rootMargin: "-72px 0px -100% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [path]);
  return theme;
}

export default function Nav() {
  const theme = useSectionTheme();
  const path = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (state adjusted during render, not in an effect).
  const [prevPath, setPrevPath] = useState(path);
  if (prevPath !== path) {
    setPrevPath(path);
    setOpen(false);
    setMega(false);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open && !mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMega(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mega]);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = window.setTimeout(() => setMega(false), 120);
  };

  const isPillar = pillarsNav.some((p) => path.startsWith(p.href));
  const dark = theme === "dark" || open;

  return (
    <header
      data-theme={dark ? "dark" : "light"}
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-fg transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || mega
          ? dark
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-ink/10 bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
      onMouseLeave={closeMega}
    >
      <div className="mx-auto flex h-[72px] max-w-wide items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo variant={dark ? "white" : "navy"} priority className="relative z-[60]" />

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <div className="relative" onMouseEnter={openMega}>
            <button
              type="button"
              aria-expanded={mega}
              aria-controls="mega-pillars"
              onClick={() => setMega((v) => !v)}
              onFocus={openMega}
              className={cn(
                "inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-[0.9rem] font-medium transition-colors",
                isPillar ? "text-fg" : "text-fg-muted hover:text-fg",
              )}
            >
              What we do
              <svg aria-hidden viewBox="0 0 12 12" className={cn("size-3 transition-transform duration-300", mega && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
              </svg>
            </button>
          </div>
          {primaryNav.map((item) => {
            const active = path === item.href || path.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center rounded-full px-4 text-[0.9rem] font-medium transition-colors",
                  active ? "text-fg" : "text-fg-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" size="sm" variant="primary">
            Get in touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-[60] -mr-2 inline-flex size-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-[14px] w-[22px]">
            <span className={cn("absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ease-out-expo", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity duration-200", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-[12px] h-[1.5px] w-full bg-current transition-transform duration-300 ease-out-expo", open && "-translate-y-[6px] -rotate-45")} />
          </span>
        </button>
      </div>

      {/* Mega menu — four pillars */}
      <AnimatePresence>
        {mega && (
          <motion.div
            id="mega-pillars"
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={cn("hidden border-t lg:block", dark ? "border-white/10" : "border-ink/10")}
            onMouseEnter={openMega}
          >
            <div className="mx-auto grid max-w-wide grid-cols-12 gap-8 px-5 py-10 sm:px-8 lg:px-12">
              <div className="col-span-3 pr-8">
                <p className="eyebrow">Four AI domains</p>
                <p className="mt-4 text-display-xs font-display font-semibold text-fg">One stack, governed end to end.</p>
                <p className="mt-3 text-sm text-fg-muted">
                  Physical and digital worlds, joined by one convergence layer and one governance layer.
                </p>
                <Link href="/services" className="link-wipe mt-6 inline-block text-sm font-medium text-fg">
                  Five service lines
                </Link>
              </div>
              <ul className="col-span-9 grid grid-cols-4 gap-2">
                {pillarsNav.map((p, i) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={cn(
                        "group flex h-full flex-col rounded-md border p-5 transition-colors",
                        dark ? "border-white/10 hover:border-white/40 hover:bg-white/[0.04]" : "border-ink/10 hover:border-ink/40 hover:bg-ink/[0.03]",
                      )}
                    >
                      <span className="font-display text-sm font-medium text-fg-soft">0{i + 1}</span>
                      <span className="mt-6 text-display-xs font-display font-semibold text-fg">{p.label}</span>
                      <span className="mt-2 text-[0.8125rem] leading-relaxed text-fg-muted">{p.description}</span>
                      <span className="mt-auto pt-6 text-xs font-medium text-fg opacity-0 transition-opacity group-hover:opacity-100">
                        Explore →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col bg-ink text-white lg:hidden"
          >
            <div className="h-[72px] shrink-0" />
            <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 pb-10 sm:px-8">
              <p className="eyebrow mb-4 text-white/60">What we do</p>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {pillarsNav.map((p, i) => (
                  <li key={p.href}>
                    <Link href={p.href} className="flex items-baseline gap-4 py-4">
                      <span className="font-display text-xs text-white/40">0{i + 1}</span>
                      <span className="font-display text-display-sm font-semibold">{p.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 space-y-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block py-2.5 text-lg font-medium text-white/85">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="block py-2.5 text-lg font-medium text-white/85">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="mt-auto pt-10">
                <Button href="/contact" size="lg" className="w-full bg-white text-ink hover:bg-violet">
                  Get in touch
                </Button>
                <p className="mt-6 text-xs text-white/50">contact@deepweaver.ai · Australia · India</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
