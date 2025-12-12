'use client'

import { useEffect, useRef, useState } from 'react'

export default function MatrixBackground() {
  const containerRef = useRef(null)
  const [gridSize, setGridSize] = useState(30)

  useEffect(() => {
    // Adjust grid size based on screen width for performance
    const updateGridSize = () => {
      if (window.innerWidth < 640) {
        setGridSize(15) // Smaller grid for mobile
      } else if (window.innerWidth < 1024) {
        setGridSize(20) // Medium grid for tablet
      } else {
        setGridSize(30) // Full grid for desktop
      }
    }

    updateGridSize()
    window.addEventListener('resize', updateGridSize)

    return () => window.removeEventListener('resize', updateGridSize)
  }, [])

  useEffect(() => {
    const matrixContainer = containerRef.current
    if (!matrixContainer) return

    // Clear any existing content
    matrixContainer.innerHTML = ''

    // Calculate total number of boxes
    const totalBoxes = gridSize * gridSize
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < totalBoxes; i++) {
      const box = document.createElement('div')
      box.className = 'matrix-grid-item'
      fragment.appendChild(box)
    }

    matrixContainer.appendChild(fragment)
  }, [gridSize])

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: '#080707' }}
    >
      <div 
        ref={containerRef}
        className="matrix-grid-container grid gap-0 p-0"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}
