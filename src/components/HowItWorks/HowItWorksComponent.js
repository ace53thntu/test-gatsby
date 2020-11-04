import React from 'react'
import Typography from '@bit/mui-org.material-ui.typography'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function HIWC(props) {
  const data = useStaticQuery(graphql`
    query {
      step1: file(relativePath: { eq: "how-it-step-in1.png" }) {
        childImageSharp {
          fluid(maxWidth: 543) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      step2: file(relativePath: { eq: "how-it-step-in2.png" }) {
        childImageSharp {
          fluid(maxWidth: 543) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      step3: file(relativePath: { eq: "how-it-step-in3.png" }) {
        childImageSharp {
          fluid(maxWidth: 543) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <section className="how-it-works-section">
        <div className="container">
          <div className="how-it-works-bg">
            <h2>
              HOW <span>IT WORKS</span>
            </h2>
            <div className="how-it-step-block">
              <div className="how-it-step">
                <div className="images-step mobile-img-hide">
                  <Img
                    fluid={data.step1.childImageSharp.fluid}
                    alt="Cloud Solar step 1"
                  />
                </div>
                <div className="step-content">
                  <div className="images-step mobile-img">
                    <Img
                      fluid={data.step1.childImageSharp.fluid}
                      alt="Cloud Solar step 1"
                    />
                  </div>
                  <Typography variant="h5">
                    Cloud Solar installs and hosts your remote panels on our
                    licensed roofs and land; the solar power generated from our
                    distributed network is pooled on the cloud platform and sold
                    to the utility company, also known as The Barbados Light &
                    Power Co.
                  </Typography>
                </div>
              </div>
              <div className="how-it-step">
                <div className="step-content">
                  <div className="images-step mobile-img">
                    <Img
                      fluid={data.step2.childImageSharp.fluid}
                      alt="Cloud Solar step 2"
                    />
                  </div>
                  <Typography variant="h5">
                    {' '}
                    We calculate each clients’ solar power generation every
                    month based on the number of panels they own and we issue
                    the net renewable energy credits directly to our clients’
                    Solar Credits Account.
                  </Typography>
                </div>
                <div className="images-step mobile-img-hide">
                  <Img
                    fluid={data.step2.childImageSharp.fluid}
                    alt="Cloud Solar step 2"
                  />
                </div>
              </div>
              <div className="how-it-step">
                <div className="images-step mobile-img-hide">
                  <Img
                    fluid={data.step3.childImageSharp.fluid}
                    alt="Cloud Solar step 3"
                  />
                </div>
                <div className="step-content">
                  <div className="images-step mobile-img">
                    <Img
                      fluid={data.step3.childImageSharp.fluid}
                      alt="Cloud Solar step 3"
                    />
                  </div>
                  <Typography variant="h5">
                    Clients automatically receive their renewable energy credits
                    directly from their Solar Credits Account to their financial
                    institution on a monthly basis as a cash payment.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="btn-wrap">
              <a className="button" href="https://app.cloud.solar/get-started/">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
