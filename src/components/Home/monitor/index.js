import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Montior() {
  const data = useStaticQuery(graphql`
    query {
      ourDashboard: file(relativePath: { eq: "our-dashboard-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 655) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="monitor-investment">
        <div className="container">
          <div className="our-dashboard-block">
            <div className="step-content">
              <h2 className="title-left">
                DIGITAL SOLAR <span>ASSETS</span>
              </h2>
              <div className="images-step mobile-img">
                <Img
                  fluid={data.ourDashboard.childImageSharp.fluid}
                  alt="Cloud Solar Dashboard"
                />
              </div>
              <p>
                With CloudSolar, you can invest online in low-cost, diversified
                solar farms all across Barbados by purchasing digital solar panels. 
                Our business is a new and seamless method to earn money from the sun, 
                without physically having to install a solar panel on a roof. Through our proprietary online
                platform, our customers manage their remotely installed, digital
                solar panels and their generated solar credits. Every CloudSolar managed Solar PV system
                has its performance measured and recorded online in a solar
                pool; our customers are paid their proportional share of the
                solar credits from our distributed solar earnings pool based on the number of panels they own. As part
                of our customers’ package, they receive the functionality to
                manage, monitor, and add more funds to their account in order to
                buy digital solar panels and customers can see their solar credits
                every month with historical data. Through our partnership with
                local banking, we are able to deposit our clients' earnings from
                their solar credits to their bank accounts every month with the
                click of a button.
              </p>
              <a className="button" href="https://app.cloud.solar/get-started/">
                GET STARTED
              </a>
            </div>
            <div className="images-step mobile-img-hide">
              <Img
                fluid={data.ourDashboard.childImageSharp.fluid}
                alt="Cloud Solar Dashboard"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
