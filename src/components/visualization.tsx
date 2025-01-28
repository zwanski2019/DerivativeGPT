"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function Visualization({ data }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !data) return

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Create function visualization
    const geometry = new THREE.BufferGeometry()
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 })

    // Generate points
    const points = []
    for (let x = -10; x <= 10; x += 0.1) {
      const y = eval(data.original.replace(/x/g, x))
      points.push(new THREE.Vector3(x, y, 0))
    }

    geometry.setFromPoints(points)
    const line = new THREE.Line(geometry, material)
    scene.add(line)

    // Position camera
    camera.position.z = 15

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [data])

  return <div ref={containerRef} className="h-[400px] w-full" />
}

