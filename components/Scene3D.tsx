"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function GlowingSphere({ position, scale, speed }: { position: [number, number, number], scale: number, speed: number }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
      ref.current.rotation.x = state.clock.elapsedTime * 0.2
      ref.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Sphere ref={ref} args={[scale, 32, 32]} position={position}>
      <MeshDistortMaterial
        color="#0891b2"
        transparent
        opacity={0.3}
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  )
}

function AnimatedTorus({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.5, 0.05, 16, 100]} />
      <meshStandardMaterial color="#22d3ee" transparent opacity={0.4} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0891b2" />
        
        <ParticleField />
        
        <GlowingSphere position={[-4, 2, -3]} scale={1.2} speed={0.8} />
        <GlowingSphere position={[4, -1, -2]} scale={0.8} speed={1.2} />
        <GlowingSphere position={[0, 3, -4]} scale={0.6} speed={1} />
        
        <AnimatedTorus position={[3, 2, -5]} />
        <AnimatedTorus position={[-3, -2, -4]} />
      </Canvas>
    </div>
  )
}
