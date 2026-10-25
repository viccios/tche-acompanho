import { useState } from 'react'

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false)
  const [finishingBounce, setFinishingBounce] = useState(false)
  const shouldBounce = isHovered || finishingBounce

  return (
    <svg
      viewBox="-11 4.9 258 96.75"
      role="img"
      aria-label="Tchê Acompanho"
      className="h-auto w-full max-w-80"
      color="#3D14B8"
      fill="currentColor"
    >
      <g
        className={`origin-center transform-fill ${shouldBounce ? 'motion-safe:animate-heart-bounce' : ''}`}
        onPointerEnter={() => {
          setIsHovered(true)
          setFinishingBounce(false)
        }}
        onPointerLeave={() => {
          setIsHovered(false)
          setFinishingBounce(true)
        }}
        onAnimationIteration={() => {
          if (!isHovered) {
            setFinishingBounce(false)
          }
        }}
      >
        <circle cx="28" cy="22" r="7.5" />
        <circle cx="56" cy="22" r="7.5" />
        <path
          d="M 12 40 C 12 70, 42 88, 42 88 C 42 88, 72 70, 72 40 C 72 28, 60 28, 51 38 C 47 43, 42 48, 42 48 C 42 48, 37 43, 33 38 C 24 28, 12 28, 12 40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pointerEvents="all"
        />
      </g>
      <text
        x="96"
        y="58"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="-1"
      >
        tchê
      </text>
      <text
        x="97"
        y="86"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="25"
        fontWeight="500"
        letterSpacing="-0.5"
      >
        acompanho
      </text>
    </svg>
  )
}
