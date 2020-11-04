import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/About/intro'
import Mission from '../components/About/mission'
import OurHistory from '../components/About/our-history'
import History from '../components/About/history'
import Values from '../components/About/values'
import Capacity from '../components/About/capacity'
import Team from '../components/About/team'

export default function AboutUs() {
  return (
    <Layout>
      <Intro />
      <Mission />
      <History />
      <Values />
      <Capacity />
      <OurHistory />
      <Team />
    </Layout>
  )
}
