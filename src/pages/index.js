import React from 'react'
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Banner from '../components/Home/banner'
import HowToStart from '../components/Home/how-to-start'
import Features from '../components/Home/features'
import WhoWeAre from '../components/Home/who-we-are'
import Projects from '../components/Home/projects'
import Monitor from '../components/Home/monitor'
import OurSolar from '../components/Home/our-solar'
import Layout from '../components/layout'
import Amplify from 'aws-amplify'
import config from '../config/amplifyConfig'

fontAwesomeConfig.autoAddCss = false

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'leads',
        endpoint: config.apiGateway.leadsURL,
        region: config.apiGateway.REGION,
      },
      {
        name: 'email',
        endpoint: config.apiGateway.emailURL,
        region: config.apiGateway.REGION,
      },
      {
        name: 'rates',
        endpoint: config.apiGateway.ratesURL,
        region: config.apiGateway.REGION,
      },
    ],
  },
})

export default function Home() {
  return (
    <Layout>
      <Banner />
      <HowToStart />
      <Monitor />
      <Features />
      <WhoWeAre />
      <Projects />
      <OurSolar />
    </Layout>
  )
}
