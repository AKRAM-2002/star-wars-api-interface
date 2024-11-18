'use client'

import dynamic from 'next/dynamic'
import { LoadingProvider } from '../app/providers/LoadingProvider'

// Dynamically import the StarWarsInterface with no SSR
const StarWarsInterface = dynamic(
  () => import('../components/StarWarsInterface'),
  { ssr: false }
)

export default function Home() {
  return (
    <LoadingProvider>
      <main className="min-h-screen bg-gray-50 py-8">
        <StarWarsInterface />
      </main>
    </LoadingProvider>
  )
}