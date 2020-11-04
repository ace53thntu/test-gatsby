import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      guinea: file(relativePath: { eq: "guinea.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      balls: file(relativePath: { eq: "balls.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      monterey: file(relativePath: { eq: "monterey.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <section className="our-solar-section section-gapping">
        <div className="container">
          <h2>
            OUR DIGITAL<span> SOLAR POOL</span>
          </h2>
          <div className="our-solar-step-block">
            <div className="our-solar-step">
              <div className="images-step mobile-img-hide">
                <Img
                  fluid={data.monterey.childImageSharp.fluid}
                  alt="Cloud Solar Monterey"
                />
              </div>
              <div className="step-content2">
                <h3>
                  <Link to="/our-projects/">MONTEREY FARMS </Link>
                </h3>
                <div className="images-step mobile-img">
                  <Img
                    fluid={data.monterey.childImageSharp.fluid}
                    alt="Cloud Solar Monterey"
                  />
                </div>
                <div className="our-project-table">
                  <div className="project-details">
                    <span className="project-text">System Size</span>
                    <span className="project-digit">400.5 kWp</span>
                  </div>
                  <div className="project-details">
                    <span className="project-text">Yearly Production</span>
                    <span className="project-digit">640,800 kWh</span>
                  </div>
                </div>
                <Link to="/our-projects/" className="button">
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
            <div className="our-solar-step">
              <div className="step-content">
                <h3>
                  <Link to="/our-projects/">BALLS PLANTATION </Link>
                </h3>
                <div className="images-step mobile-img ">
                  <Img
                    fluid={data.balls.childImageSharp.fluid}
                    alt="Cloud Solar Balls"
                  />
                </div>
                <div className="our-project-table">
                  <div className="project-details">
                    <span className="project-text">System Size</span>
                    <span className="project-digit">172.64 kWp</span>
                  </div>
                  <div className="project-details">
                    <span className="project-text">Yearly Production</span>
                    <span className="project-digit">230,960 kWh</span>
                  </div>
                </div>
                <Link to="/our-projects/" className="button">
                  VIEW PROJECTS
                </Link>
              </div>
              <div className="images-step mobile-img-hide">
                <Img
                  fluid={data.balls.childImageSharp.fluid}
                  alt="Cloud Solar Balls"
                />
              </div>
            </div>
            <div className="our-solar-step">
              <div className="images-step mobile-img-hide">
                <Img
                  fluid={data.guinea.childImageSharp.fluid}
                  alt="Cloud Solar Guinea"
                />
              </div>
              <div className="step-content">
                <h3>
                  <Link to="/our-projects/">
                    GUINEA FARMS (Completion Date: Q1 2021)
                  </Link>
                </h3>
                <div className="images-step mobile-img">
                  <Img
                    fluid={data.guinea.childImageSharp.fluid}
                    alt="Cloud Solar Guinea"
                  />
                </div>
                <div className="our-project-table">
                  <div className="project-details">
                    <span className="project-text">System Size</span>
                    <span className="project-digit">1.28 MWp</span>
                  </div>
                  <div className="project-details">
                    <span className="project-text">Yearly Production</span>
                    <span className="project-digit">1,931,034 kWh</span>
                  </div>
                </div>
                <Link to="/our-projects/" className="button">
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <Link className="button" to="/performance/">
              VIEW OUR PERFORMANCE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
