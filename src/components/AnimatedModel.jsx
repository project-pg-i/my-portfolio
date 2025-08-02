import { useGLTF, useScroll } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'

export default function AnimatedModel() {
  const ref = useRef()
  const { scene } = useGLTF('/models/generic-male.glb')
  const scroll = useScroll()

  const spring = useSpring({
    scale: scroll.scroll.current < 0.5 ? 3 : 1,
    position: scroll.scroll.current < 0.5 ? [0, -1.5, 0] : [1.5, -1, 0],
    rotationY: scroll.scroll.current < 0.5 ? 0 : Math.PI / 4,
    config: { mass: 2, tension: 100 },
  })

  useFrame(() => {
    const s = scroll.scroll.current

    // update spring values smoothly
    spring.scale.start(s < 0.5 ? 3 : 1)
    spring.position.start(s < 0.5 ? [0, -5.2, 0] : [1.5, -1, 0])
    spring.rotationY.start(s < 0.5 ? 0 : Math.PI / 4)

    if (ref.current && s >= 0.5) {
      // slow rotation only in section 2
      ref.current.rotation.y += 0.005
    }
  })

  return (
    <a.primitive
      object={scene}
      ref={ref}
      scale={spring.scale}
      position={spring.position}
      rotation-y={spring.rotationY}
    />
  )
}
