import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Capacity() {
  const data = useStaticQuery(graphql`
    query {
      capacity1: file(relativePath: { eq: "capacity-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      capacity2: file(relativePath: { eq: "capacity-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      capacity3: file(relativePath: { eq: "capacity-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      capacity4: file(relativePath: { eq: "capacity-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="solar-capacity">
        <div className="container">
          <h2>
            OUR SOLAR <span>CAPACITY</span>
          </h2>
          <div className="solar-capacity-blocks">
            <div className="solar-capacity-item">
              <div className="solar-capacity-inner">
                <div className="solar-capacity-img">
                  <Img
                    fluid={data.capacity1.childImageSharp.fluid}
                    alt="Cloud Solar capacity"
                  />
                </div>
                <div className="soalar-capacity-cont">
                  <h3>INSTALLATIONS</h3>
                  <p>
                    With over 1 megawatt of solar power installed and a large
                    pipeline of projects, cloudSolar is ripe for future
                    expansion. We have committed to a goal to install another 7
                    Megawatts of power by 2022.
                  </p>
                  <Link to="/our-projects/" className="button">VIEW MORE</Link>
                </div>
              </div>
            </div>
            <div className="solar-capacity-item">
              <div className="solar-capacity-inner">
                <div className="solar-capacity-img">
                  <Img
                    fluid={data.capacity2.childImageSharp.fluid}
                    alt="Cloud Solar capacity"
                  />
                </div>
                <div className="soalar-capacity-cont">
                  <h3>ROOFTOPS</h3>
                  <p>
                    We have over 1 million square feet of rooftop space through
                    owned property and licensing contracts with our partners.
                    This number will grow as we take on new partners and
                    clients.
                  </p>
                  <Link to="/our-projects/" className="button">VIEW MORE</Link>
                </div>
              </div>
            </div>
            <div className="solar-capacity-item">
              <div className="solar-capacity-inner">
                <div className="solar-capacity-img">
                  <Img
                    fluid={data.capacity3.childImageSharp.fluid}
                    alt="Cloud Solar capacity"
                  />
                </div>
                <div className="soalar-capacity-cont">
                  <h3>LAND</h3>
                  <p>
                    With a total of 120 acres purposed for 40 megawatts of solar
                    power, CloudSolar is ripe for future expansion and becoming
                    its own microgrid.{' '}
                  </p>
                  <Link to="/our-projects/" className="button">VIEW MORE</Link>
                </div>
              </div>
            </div>
            <div className="solar-capacity-item">
              <div className="solar-capacity-inner">
                <div className="solar-capacity-img">
                  <Img
                    fluid={data.capacity4.childImageSharp.fluid}
                    alt="Cloud Solar capacity"
                  />
                </div>
                <div className="soalar-capacity-cont">
                  <h3>PARTNERS</h3>
                  <p>
                    Our partners include energy companies, banks, financial
                    &amp; real estate firms &amp; insurance companies. Each of
                    these companies serve a purpose in our cycle of solar: from
                    sales, to operations &amp; maintenance, to liquidity
                    &amp; trust management.{' '}
                  </p>
                  <Link to="/our-projects/" className="button">VIEW MORE</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="solar-btn">
            <a className="button" href="https://app.cloud.solar/get-started/">
                GET STARTED
              </a>
          </div>
        </div>
      </section>
    </>
  )
}
