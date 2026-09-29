import FinalCTA from '@/components/landing/cta'
import FAQ from '@/components/landing/faq'
import Features from '@/components/landing/features'
import Footer from '@/components/landing/footer'
import Hero from '@/components/landing/hero'
import Integration from '@/components/landing/intergration'
import Navbar from '@/components/landing/nav'
import Pricing from '@/components/landing/pricing'
import Team from '@/components/landing/team'

const Page =() =>{
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar/>
      <Hero />
      <Features/>
      <Integration/>
      <Pricing/>
      <Team/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>
    </main>
  )
}

export default Page
