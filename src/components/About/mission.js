import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Mission() {
  const data = useStaticQuery(graphql`
    query {
      mission1: file(relativePath: { eq: "mission-img-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 278) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mission2: file(relativePath: { eq: "mission-img-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 278) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mission3: file(relativePath: { eq: "mission-img-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 278) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mission4: file(relativePath: { eq: "mission-img-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 278) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="our-mission-section">
        <div className="container">
          <div className="our-mission-bg">
            <div className="mission-main">
              <div className="mission-left">
                <div className="mission-img">
                  <div className="mis-img img-1">
                    <Img
                      fluid={data.mission1.childImageSharp.fluid}
                      alt="Cloud Solar mission"
                    />
                  </div>
                  <div className="mis-img img-2">
                    <Img
                      fluid={data.mission2.childImageSharp.fluid}
                      alt="Cloud Solar mission"
                    />
                  </div>
                  <div className="mis-img img-3">
                    <Img
                      fluid={data.mission3.childImageSharp.fluid}
                      alt="Cloud Solar mission"
                    />
                  </div>
                  <div className="mis-img img-4">
                    <Img
                      fluid={data.mission4.childImageSharp.fluid}
                      alt="Cloud Solar mission"
                    />
                  </div>
                </div>
              </div>
              <div className="mission-right">
                <div className="caption-main">
                  <h2>
                    OUR <span> MISSION </span>
                  </h2>
                  <p>
                    Our mission is to democratize the installation of solar
                    photovoltaic systems across Barbados. Solar photovoltaic
                    installations can now be purchased by everyone through our
                    innovative digital solar asset platform. By doing this we
                    create an inclusive business opportunity that moves our
                    country towards being powered 100% by renewable energy. We
                    want to provide that opportunity for every citizen to own
                    their own solar PV system and to benefit equally from this
                    green initiative.
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
