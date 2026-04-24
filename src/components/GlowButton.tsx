import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const base: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    overflow: 'hidden',
    letterSpacing: '0.5px',
  }

  const styles: React.CSSProperties =
    variant === 'primary'
      ? {
          ...base,
          background: '#fff',
          color: '#000',
        }
      : {
          ...base,
          background: 'transparent',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.4)',
        }

  const content = (
    <>
      <motion.span
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0%, transparent 70%)',
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={styles}
        className={className}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      style={styles}
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  )
}
