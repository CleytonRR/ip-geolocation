import Hero from 'components/Hero'
import InfoLocation from 'components/Info-Location'
import InputForm from 'components/Input'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <InputForm />
      <InfoLocation />
      <Map />
    </>
  )
}
