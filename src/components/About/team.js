import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      founder1: file(relativePath: { eq: "founder-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 314) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      founder2: file(relativePath: { eq: "founder-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 314) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      founder3: file(relativePath: { eq: "founder-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 314) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      founder4: file(relativePath: { eq: "founder-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 314) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="meet-our our-mission-section section-gapping">
        <div className="container">
          <div className="our-mission-bg">
            <div className="mission-main">
              <div className="mission-left">
                <div className="mission-img">
                  <div className="mis-img img-1">
                    <div className="mis-inner">
                      <Img
                        fluid={data.founder1.childImageSharp.fluid}
                        alt="Cloud Solar team"
                      />
                      <Link to="/" className="founder-img">
                        <div className="founder-detail">
                          <span>Dominic De Freitas</span>
                          <p>Founder/CEO</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mis-img img-2">
                    <div className="mis-inner">
                      <Img
                        fluid={data.founder2.childImageSharp.fluid}
                        alt="Cloud Solar team"
                      />
                      <Link to="/" className="founder-img">
                        <div className="founder-detail">
                          <span>Ayub Kola</span>
                          <p>Financial Analyst</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mis-img img-3">
                    <div className="mis-inner">
                      <Img
                        fluid={data.founder3.childImageSharp.fluid}
                        alt="Cloud Solar team"
                      />
                      <Link to="/" className="founder-img">
                        <div className="founder-detail">
                          <span>Anthony De Freitas</span>
                          <p>Technology Architect</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mis-img img-4">
                    <div className="mis-inner">
                      <Img
                        fluid={data.founder4.childImageSharp.fluid}
                        alt="Cloud Solar team"
                      />
                      <Link to="/" className="founder-img">
                        <div className="founder-detail">
                          <span>Rohan Ford</span>
                          <p>Business Development</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mission-right">
                <div className="caption-main">
                  <h2>
                    MEET OUR <span> TEAM </span>
                  </h2>
                  <p>
                    Our team is well diversified in the business of solar and
                    technology. We employ only the best who have envisioned and
                    created a world class technology platform. Our team makes up
                    the Caribbean's 1st digital green energy company located in
                    Barbados. Our core solar business has been operating since
                    2016, and with technology as the backbone, we have recently
                    launched our innovative digital solar asset platform in
                    2020. We facilitate and broker our customers' investments in
                    the solar industry with the vision and mission of creating a
                    100% renewable energy mix for our country. Our finance team
                    has designed a superior renewable energy opportunity that is
                    uniquely innovative, sustainable and digitally administered
                    by our proprietary solar asset platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
