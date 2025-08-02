import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from 'react'
import AnimatedModel from './AnimatedModel'

export default function CanvasScene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Lights & Environment */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Environment preset="sunset" />

        <Suspense fallback={null}>
          {/* 2 pages, native scroll speed */}
          <ScrollControls pages={2} damping={0}>
            <AnimatedModel />

            {/* HTML content scrolls normally */}
            <Scroll html>
              {/* Section 1: Hero — full width & height, centered */}
              <section className="h-screen w-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-slate-800 font-bold text-5xl">
                    Hi, I'm PG
                  </h1>
                  <p className="text-stone-700 text-xl mt-2">
                    Full Stack Dev • Freelancer • Designer
                  </p>
                </div>
              </section>

              {/* Section 2: Skills */}
              <section className="h-screen w-screen flex items-center px-20">
                <div className="w-1/2 text-slate-800 space-y-4">
                  <h2 className="text-3xl font-bold mb-4">My Skills</h2>
                  {[
                    { name: 'HTML', value: 90 },
                    { name: 'React', value: 80 },
                    { name: 'Node.js', value: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <p>{skill.name}</p>
                      <div className="bg-gray-300 h-2 w-full rounded-full">
                        <div
                          className="bg-purple-800 h-2 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
