import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Invest() {
  const data = useStaticQuery(graphql`
    query {
      inwith1: file(relativePath: { eq: "in-with-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 356) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inwith2: file(relativePath: { eq: "in-with-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 356) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inwith3: file(relativePath: { eq: "in-with-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 356) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="invest-with">
        <div className="container">
          <div className="invest-us-inner">
            <h2>
              WHY INVEST IN<span> DIGITAL SOLAR</span>
            </h2>

            <div className="investwith-detail">
              <div className="in-with-list">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.inwith2.childImageSharp.fluid}
                      alt="Cloud Solar Step 1"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      A LARGE SOLAR EARNINGS
                      <br /> POOL
                    </h3>
                    <p>
                      Our pooled earning system allows all our customers to
                      benefit equally from our large installations across the
                      island; and it offers a safer option against energy output
                      swings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="in-with-list">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.inwith1.childImageSharp.fluid}
                      alt="Cloud Solar Step 1"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      A LONG TERM GROWTH
                      <br /> ASSET
                    </h3>
                    <p>
                      A purchase of digital solar has a very predictable flow of
                      earnings that can save customers the entire cost of their
                      electricity bills. All of our solar products are digital
                      with physical assets located across Barbados.
                    </p>
                  </div>
                </div>
              </div>
              <div className="in-with-list">
                <div className="invest-item-main">
                  <div className="with-img">
                    <Img
                      fluid={data.inwith3.childImageSharp.fluid}
                      alt="Cloud Solar Step 1"
                    />
                  </div>
                  <div className="invest-contentbox">
                    <h3>
                      A COMMUNITY SOLAR <br />
                      INITIATIVE
                    </h3>
                    <p>
                      Community solar allows renters, homeowners, small
                      businesses, and other participants to benefit from the
                      energy produced by their portion of a remotely located
                      solar farm; our digital solar systems do not require your
                      roof or land space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
