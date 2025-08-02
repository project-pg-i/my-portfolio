import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from 'react'
import AnimatedModel from './AnimatedModel'

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Environment preset="sunset" />

      <Suspense fallback={null}>
        <ScrollControls pages={2} damping={4}>
          <AnimatedModel />

          {/* HTML over Canvas */}
          <Scroll html>
            <div className="h-[100vh] flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Hi, I'm PG</h1>
                <p className="text-xl mt-2 text-accent">
                  Full Stack Dev • Freelancer • Designer
                </p>
              </div>
            </div>
            <div className="h-[100vh] flex items-center justify-start px-20">
              <div className="w-1/2 text-white space-y-4">
                <h2 className="text-3xl font-bold mb-4">My Skills</h2>
                {[
                  { name: 'HTML', value: 90 },
                  { name: 'React', value: 80 },
                  { name: 'Node.js', value: 75 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <p>{skill.name}</p>
                    <div className="bg-gray-700 h-2 w-full rounded-full">
                      <div
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
