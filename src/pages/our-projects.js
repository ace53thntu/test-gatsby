import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function OurProjects() {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "project-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project2: file(relativePath: { eq: "project-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project3: file(relativePath: { eq: "project-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project4: file(relativePath: { eq: "project-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project5: file(relativePath: { eq: "project-5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project6: file(relativePath: { eq: "project-6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project7: file(relativePath: { eq: "project-7.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project8: file(relativePath: { eq: "project-8.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <section className="inner banner-section">
        <div className="container">
          <div className="caption">
            <h1>OUR PROJECTS</h1>
            <p style={{ wordBreak: 'break-word' }}>
              CloudSolar is structured as a community of solar farm owners who
              have invested in the development of renewable energy projects
              across roofs and land in Barbados. Our capacity and pipeline is
              unmatched in Barbados & the Eastern Caribbean.
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works-section solar-installations">
        <div className="container">
          <div className="how-it-works-bg">
            <h2>
              OUR DIGITAL <span>SOLAR POOL</span>
            </h2>

            <div className="installations-main">
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project1.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      BALLS <br /> PLANTATION
                    </h3>
                    <p>
                      172.64 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=63460255-66fb-4f56-b55f-291e350913d9"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project2.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      BREEDERS 2 <br /> HOUSES
                    </h3>
                    <p>
                      85.28 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=456c7618-edc9-4db8-8147-3bac44b68ea6"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project3.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      BRIGHTHALL 4 <br /> HOUSES
                    </h3>
                    <p>
                      82.16 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=0065c767-2d69-4c3b-b615-f1dc697feb11"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project4.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      MONTEREY <br /> FARMS
                    </h3>
                    <p>
                      400.5 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=fc04e50e-7932-4cad-b043-a572b4fe176e"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project5.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      OLDBURY <br /> FARMS
                    </h3>
                    <p>
                      94.24 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=a21e1878-c086-4c5d-85a3-406915efe1f7"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project6.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>RIDGE</h3>
                    <p>
                      65.52 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=cf4c9887-3856-4e44-8e0a-3d93efe89d80"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project7.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>ZRS 1</h3>
                    <p>
                      45 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.solarweb.com/Home/GuestLogOn?pvSystemid=8c39ca24-29ea-4071-b340-c850beefd33e"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="installations-blocks">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.project8.childImageSharp.fluid}
                      alt="Cloud Solar"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>ZRS 2</h3>
                    <p>
                      28.6 kWp Solar <br /> Installation
                    </p>
                    <Link
                      className="button"
                      to="https://www.sunnyportal.com/Templates/PublicPage.aspx?page=dfc3831b-6986-4a37-af78-379c3c77ceac"
                      target="_blank"
                    >
                      {' '}
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ********solar site********* --> */}

      <section className="solar-site">
        <div className="container">
          <h2>
            MAP OF OUR <span>SOLAR SITES</span>
          </h2>

          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1eV8NRqDXBQXp0fPzLm5C3DvHgeSXybG6&hl=en"
              width="600"
              height="490"
              style={{ border: 0 }}
              allowfullscreen=""
              title="Cloud Solar Map"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}
