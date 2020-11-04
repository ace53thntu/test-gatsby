import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function OurHistory() {
  const data = useStaticQuery(graphql`
    query {
      twenty16: file(relativePath: { eq: "tm-history-2016.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twenty17: file(relativePath: { eq: "tm-history-2017.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twenty18: file(relativePath: { eq: "tm-history-2018.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twenty19: file(relativePath: { eq: "tm-history-2019.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twenty20: file(relativePath: { eq: "tm-history-2020.jpg" }) {
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
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-main">
            <h2>
              OUR <span>HISTORY</span>
            </h2>
            <div className="timeline-year">
              <div className="timeline-block">
                <div className="left-side">
                  <div className="time-caption">
                    <h5>2016</h5>
                    <p>
                      Our first solar projects were commissioned and operational
                      at the island's largest poultry processing facilities -
                      Chickmont Foods Ltd. The total size of these projects
                      ranged from 65kWp to 172kWp. For a total installed
                      capacity of 237kWp.
                    </p>
                  </div>
                </div>
                <div className="right-side">
                  <div className="timeline-img">
                    <Img
                      fluid={data.twenty16.childImageSharp.fluid}
                      alt="Cloud Solar 2016"
                    />
                  </div>
                </div>
                <div className="step-label">2016</div>
              </div>
              <div className="timeline-block">
                <div className="left-side">
                  <div className="time-caption">
                    <h5>2017</h5>
                    <p>
                      A further 261 kWp was installed across several of
                      Chickmont's poultry houses across Barbados. Each of these
                      houses ranged in size from 10,000 sq. ft. to 20,000 sq.
                      ft.
                    </p>
                  </div>
                </div>
                <div className="right-side">
                  <div className="timeline-img">
                    <Img
                      fluid={data.twenty17.childImageSharp.fluid}
                      alt="Cloud Solar 2017"
                    />
                  </div>
                </div>
                <div className="step-label">2017</div>
              </div>
              <div className="timeline-block">
                <div className="left-side">
                  <div className="time-caption">
                    <h5>2018</h5>
                    <p>
                      Small installations of under 100 kWp were installed on
                      additional farm roofs.
                    </p>
                  </div>
                </div>
                <div className="right-side">
                  <div className="timeline-img">
                    <Img
                      fluid={data.twenty18.childImageSharp.fluid}
                      alt="Cloud Solar 2018"
                    />
                  </div>
                </div>
                <div className="step-label">2018</div>
              </div>
              <div className="timeline-block">
                <div className="left-side">
                  <div className="time-caption">
                    <h5>2019</h5>
                    <p>
                      The purchase of a 400 kWp plant was executed and became
                      operational in the same year. This was the largest
                      installation to date on any farm in Barbados. This was
                      also the year that the government mandated a Feed in
                      Tariff rate for the solar sector.
                    </p>
                  </div>
                </div>
                <div className="right-side">
                  <div className="timeline-img">
                    <Img
                      fluid={data.twenty19.childImageSharp.fluid}
                      alt="Cloud Solar 2019"
                    />
                  </div>
                </div>
                <div className="step-label">2019</div>
              </div>
              <div className="timeline-block">
                <div className="left-side">
                  <div className="time-caption">
                    <h5>2020</h5>
                    <p>
                      CloudSolar was envisioned and created to serve the need of
                      facilitating investments in the solar industry with its
                      online digital platform. We also purchased a 1.28MW solar
                      plant facility, our largest rooftop installation covering
                      90,000 sq. ft., which will be completed by the end of the
                      year.
                    </p>
                  </div>
                </div>
                <div className="right-side">
                  <div className="timeline-img">
                    <Img
                      fluid={data.twenty20.childImageSharp.fluid}
                      alt="Cloud Solar 2020"
                    />
                  </div>
                </div>
                <div className="step-label">2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
