import React from 'react'
import HIWC from '../components/HowItWorks/HowItWorksComponent'
import SolarInvestmentTable from '../components/HowItWorks/SolarInvestmentTable'
import InvestmentProcess from '../components/HowItWorks/InvestmentProcess'
import Invest from '../components/HowItWorks/why-invest'
import HowToBuy from '../components/HowItWorks/HowToBuy'
import Layout from '../components/layout'
// import Typography from '@bit/mui-org.material-ui.typography'

export default function HowItWorks() {
  return (
    <Layout>
      <section className="inner banner-section">
        <div className="container">
          <div className="caption">
            <h1>DEMOCRATIZING SOLAR</h1>
            <p style={{ wordBreak: 'break-word' }}>
              Solar PV assets can now be purchased by everyone through our
              innovative digital solar asset platform. Our mission is to
              democratize the installation of solar panels across Barbados, to
              create a country powered 100% by renewable energy. We want to give
              the opportunity for every citizen to own their own solar PV system
              and to benefit from this green movement.
            </p>
          </div>
        </div>
      </section>

      <HIWC />
      <InvestmentProcess />
      <Invest />
      <SolarInvestmentTable />
      <HowToBuy />
    </Layout>
  )
}
