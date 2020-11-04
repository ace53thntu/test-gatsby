import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function WhoWeAre() {
  const data = useStaticQuery(graphql`
    query {
      montrose: file(relativePath: { eq: "montrose-logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      emera: file(relativePath: { eq: "emera-logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      cibc: file(relativePath: { eq: "cibc-logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "small-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <section className="who-we-are-section section-gapping">
        <div className="container">
          <h2>
            OUR <span>PARTNERS</span>
          </h2>
          <div className="who-we-are-block">
            <div className="who-we-are left">
              <ul>
                <li>
                  <Img
                    fixed={data.montrose.childImageSharp.fixed}
                    alt="Montrose logo"
                  />
                </li>
                <li>
                  <Img
                    fixed={data.emera.childImageSharp.fixed}
                    alt="Emera logo"
                  />
                </li>
                <li>
                  <Img
                    fixed={data.cibc.childImageSharp.fixed}
                    alt="CIBC logo"
                  />
                </li>
              </ul>
              <div className="small-logo">
                <Link to="/">
                  <Img
                    fluid={data.logo.childImageSharp.fluid}
                    alt="Cloud Solar logo"
                  />
                </Link>
              </div>
            </div>
            <div className="who-we-are right">
              <h2>About CloudSolar </h2>
              <p>
                CloudSolar is the first green technology company in the
                Caribbean which seeks to revolutionize, democratize and innovate
                the way solar photovoltaic panels will be sold in the region.
                Our digital platform is the brain behind our operation with its
                superior functionality and ability to manage our entire business
                in the cloud for our customers.
              </p>
              <p>
                We are owned by the Montrose Holdings Group of companies which
                owns and operates several business entities in Barbados. We are
                also one of Barbados' largest private sector employers.{' '}
              </p>
              {!isExpanded ? null : (
                <p>
                  Our current installed capacity sits at 2.2 megawatt of
                  capacity which is being rapidly funded by our bankers CIBC
                  First Caribbean and expanded with the help of our partners
                  Emera Caribbean Inc. We have chosen one of their subsidiaries
                  Emera Caribbean Renewables Ltd. to manage, and install all our
                  installations at the lowest cost, through their large network
                  of installations that stretches into the USA and Canada.{' '}
                </p>
              )}
              <button
                className="button read-more-btn"
                data-content="toggle-text"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? `SHOW LESS` : `READ MORE`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
