'use client'
import { ParticlesProvider, useParticlesProvider, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

const OPTIONS = {
  background: { color: { value: 'transparent' } },
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    color: { value: '#6366F1' },
    links: {
      color: '#818CF8',
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      random: true,
      outModes: { default: 'out' as const },
    },
    number: { value: 80, density: { enable: true } },
    opacity: { value: { min: 0.2, max: 0.5 } },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
}

const init = async (engine: Engine) => {
  await loadSlim(engine)
}

function Canvas() {
  const { loaded } = useParticlesProvider()
  if (!loaded) return null
  return (
    <Particles
      id="tsparticles"
      options={OPTIONS}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={init}>
      <Canvas />
    </ParticlesProvider>
  )
}
