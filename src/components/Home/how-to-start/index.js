import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function HowToStart() {
  const data = useStaticQuery(graphql`
    query {
      step1: file(relativePath: { eq: "home-step-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      step2: file(relativePath: { eq: "home-step-2.png" }) {
        childImageSharp {
          fixed(height: 260) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      step3: file(relativePath: { eq: "home-step-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <section className="how-it-works-section home-page-work">
        <div className="container">
          <h5 className="how-it-header">
            <span>JOIN THE FUTURE OF SOLAR INVESTMENTS</span>
          </h5>
          <div className="how-it-works-bg">
            <h2>
              HOW <span>TO START</span>
            </h2>
            <div className="how-it-step-block">
              <div className="how-it-step">
                <div className="images-step mobile-img-hide">
                  <Img
                    fluid={data.step1.childImageSharp.fluid}
                    alt="Cloud Solar Step 1"
                  />
                </div>
                <div className="step-content">
                  <h3>
                    <strong>1</strong> Select your digitally installed solar
                    panels
                  </h3>
                  <div className="images-step mobile-img">
                    <Img
                      fluid={data.step1.childImageSharp.fluid}
                      alt="Cloud Solar Step 1"
                    />
                  </div>
                  <p>
                    Select the amount of solar panels you would like to buy from
                    our distributed solar asset pool which will earn you solar
                    credits. Your digital solar service contract with CloudSolar
                    lasts for 25 years; and we include all maintenance,
                    insurance and costs of the remotely installed solar panels.
                  </p>
                </div>
              </div>
              <div className="how-it-step">
                <div className="step-content">
                  <h3>
                    {' '}
                    <strong>2</strong> Pay for your purchase
                  </h3>
                  <div className="images-step mobile-img">
                    <Img
                      fixed={data.step2.childImageSharp.fixed}
                      alt="Cloud Solar Step 2"
                    />
                  </div>
                  <p>
                    You can pay online for your purchase with your registered
                    bank account. There are no installation times or regulatory
                    approvals. Your digital solar panels will start to earn
                    credits instantly as your panels join our solar pool; which
                    is already installed and selling energy to the grid on your
                    behalf.
                  </p>
                </div>
                <div className="images-step mobile-img-hide">
                  <Img
                    fixed={data.step2.childImageSharp.fixed}
                    alt="Cloud Solar Step 2"
                  />
                </div>
              </div>
              <div className="how-it-step">
                <div className="images-step mobile-img-hide">
                  <Img
                    fluid={data.step3.childImageSharp.fluid}
                    alt="Cloud Solar Step 3"
                  />
                </div>
                <div className="step-content">
                  <h3>
                    {' '}
                    <strong>3</strong> Start earning money from the Sun
                  </h3>
                  <div className="images-step mobile-img">
                    <Img
                      fluid={data.step3.childImageSharp.fluid}
                      alt="Cloud Solar Step 3"
                    />
                  </div>
                  <p>
                    Earnings from your digital solar panels are paid to you
                    automatically via your Solar Credits Account on the 21st day
                    of every month to your banking institution on file. Solar
                    power is being sold to the grid every day and our solar pool
                    operates at the highest efficiencies with a full management
                    team working in the back-end for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-wrap">
              <a className="button" href="https://app.cloud.solar/get-started/">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
