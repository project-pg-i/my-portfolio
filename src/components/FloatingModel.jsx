import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'

export default function FloatingModel({ modelPath }) {
  const ref = useRef()
  const { scene } = useGLTF(modelPath)

  useEffect(() => {
    console.log('Loaded model:', scene)
  }, [scene])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return <primitive object={scene} ref={ref} scale={1.5} />
}
