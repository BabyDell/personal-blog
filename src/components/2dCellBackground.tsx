'use client'

import React, { useEffect, useRef } from 'react'

export const DynamicGridBackground2D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const lightPosition = { x: 0, y: 0 }
    const lightVelocity = { x: 2, y: 2 }

    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate grid size based on canvas size
      const cellSize = Math.max(canvas.width, canvas.height) / 16
      const gridSizeX = Math.ceil(canvas.width / cellSize)
      const gridSizeY = Math.ceil(canvas.height / cellSize)

      // Update light position
      lightPosition.x += lightVelocity.x
      lightPosition.y += lightVelocity.y

      // Bounce light off edges
      if (lightPosition.x <= 0 || lightPosition.x >= canvas.width) lightVelocity.x *= -1
      if (lightPosition.y <= 0 || lightPosition.y >= canvas.height) lightVelocity.y *= -1

      // Draw grid cells
      for (let x = 0; x < gridSizeX; x++) {
        for (let y = 0; y < gridSizeY; y++) {
          const cellX = x * cellSize
          const cellY = y * cellSize

          // Calculate distance from light to cell corners
          const distances = [
            Math.hypot(cellX - lightPosition.x, cellY - lightPosition.y),
            Math.hypot(cellX + cellSize - lightPosition.x, cellY - lightPosition.y),
            Math.hypot(cellX - lightPosition.x, cellY + cellSize - lightPosition.y),
            Math.hypot(cellX + cellSize - lightPosition.x, cellY + cellSize - lightPosition.y)
          ]

          // Calculate cell border brightness based on distance from light
          const maxDistance = cellSize * 20
          const brightness = Math.max(0, 0.15 -  Math.min(...distances) / maxDistance)

          // Draw cell borders
          ctx.strokeStyle = `rgba(255, 255, 255, ${brightness * 0.8})`
          ctx.lineWidth = 2
          ctx.strokeRect(cellX, cellY, cellSize, cellSize)
        }
      }

      animationFrameId = requestAnimationFrame(drawGrid)
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    drawGrid()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        background: '#000000', // Darker background
      }}
    />
  )
}

.5

