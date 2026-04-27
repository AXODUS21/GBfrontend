"use client"

import { type ReactNode, useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  type Variant,
} from "framer-motion"

// ─── FadeIn ──────────────────────────────────────────────
// Scroll-triggered fade + slide from any direction
type Direction = "up" | "down" | "left" | "right" | "none"

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.3,
}: FadeInProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerChildren ─────────────────────────────────────
// Container that staggers children's entrance
interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
  amount?: number
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item — use as a direct child of StaggerChildren
interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: Direction
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── ParallaxSection ─────────────────────────────────────
// Applies parallax scroll effect to its children
interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number // negative = moves slower (background), positive = faster
}

export function ParallaxSection({
  children,
  className = "",
  speed = -0.2,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  )
}

// ─── TextReveal ──────────────────────────────────────────
// Word-by-word text entrance animation
interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "h2",
}: TextRevealProps) {
  const words = text.split(" ")

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

// ─── MagneticButton ──────────────────────────────────────
// Button wrapper that follows cursor on hover
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 150, damping: 15 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

// ─── CountUp ─────────────────────────────────────────────
// Animated number counter triggered on scroll-in
interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  })

  // Animate when in view
  if (isInView) {
    motionVal.set(value)
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>
        {isInView ? (
          <SpringNumber spring={springVal} />
        ) : (
          "0"
        )}
      </motion.span>
      {suffix}
    </span>
  )
}

// Helper component to render spring value
function SpringNumber({ spring }: { spring: ReturnType<typeof useSpring> }) {
  const ref = useRef<HTMLSpanElement>(null)

  // Subscribe to spring changes
  spring.on("change", (v) => {
    if (ref.current) {
      ref.current.textContent = Math.round(v).toLocaleString()
    }
  })

  return <span ref={ref}>0</span>
}

// ─── ScaleIn ─────────────────────────────────────────────
// Scale + fade entrance
interface ScaleInProps {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  once = true,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── HoverLift ───────────────────────────────────────────
// Card/element hover effect with lift + shadow
interface HoverLiftProps {
  children: ReactNode
  className?: string
  y?: number
}

export function HoverLift({
  children,
  className = "",
  y = -8,
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{
        y,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── DrawLine ────────────────────────────────────────────
// Animated line/border draw
interface DrawLineProps {
  className?: string
  delay?: number
}

export function DrawLine({ className = "", delay = 0 }: DrawLineProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`origin-left ${className}`}
    />
  )
}
