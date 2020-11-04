import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function HowToBuy() {
  const data = useStaticQuery(graphql`
    query {
      signup: file(relativePath: { eq: "step-admin-icon.png" }) {
        childImageSharp {
          fixed(width: 67) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      installations: file(relativePath: { eq: "install-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      digitalsolar: file(relativePath: { eq: "digitalsolar-icon.png" }) {
        childImageSharp {
          fixed(width: 78) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      credits: file(relativePath: { eq: "credits-card-icon.png" }) {
        childImageSharp {
          fixed(width: 72) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="how-it-works-last section-gapping">
        <div className="container">
          <h2>
            HOW TO <span>BUY CLOUDSOLAR</span>
          </h2>
          <div className="how-it-step-bottom">
            <ul>
              <li>
                <strong>01</strong>
                <div className="step-bottom">
                  <Img
                    fixed={data.signup.childImageSharp.fixed}
                    alt="Cloud Solar"
                    className="mb-20"
                  />
                  <b>
                    Sign Up For An <br /> Account
                  </b>
                  <p>Enter some quick details about you or your business.</p>
                  <a href="https://app.cloud.solar/get-started/">
                    Sign Up Here
                  </a>
                </div>
              </li>
              <li>
                <strong>02</strong>
                <div className="step-bottom">
                  <Img
                    fixed={data.installations.childImageSharp.fixed}
                    alt="Cloud Solar"
                    className="mb-20"
                  />
                  <b>
                    Determine Your <br /> Needs
                  </b>
                  <p>
                    Determine the number of digital solar panels you would like
                    to buy to offset your energy needs
                  </p>
                  <a href="/">Use our homepage calculator</a>
                </div>
              </li>
              <li>
                <strong>03</strong>
                <div className="step-bottom">
                  <Img
                    fixed={data.digitalsolar.childImageSharp.fixed}
                    alt="Cloud Solar"
                    className="mb-20"
                  />
                  <b>Pay For Your Digital Solar Online</b>
                  <p>
                    Buy your remote solar panels instantly online, already
                    installed, and watch as you start to earn solar credits
                  </p>
                </div>
              </li>
              <li>
                <strong>04</strong>
                <div className="step-bottom">
                  <Img
                    fixed={data.credits.childImageSharp.fixed}
                    alt="Cloud Solar"
                    className="mb-20"
                  />
                  <b>
                    Receive Your <br />
                    Credits
                  </b>
                  <p
                    className="text-truncate-4"
                    title="Your credits will be deposited into your Solar Credits
                    Account which are redeemed for cash and can be re-invested
                    into more solar PV up to 20 panels. This limit will be
                    reviewed yearly."
                  >
                    Your credits will be deposited into your Solar Credits
                    Account which are redeemed for cash and can be re-invested
                    into more solar PV up to 20 panels. This limit will be
                    reviewed yearly.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn-wrap">
            <a className="button" href="https://app.cloud.solar/get-started/">
              START NOW
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
