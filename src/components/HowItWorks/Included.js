import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import './slick.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const settingsFor = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
}

const settingsNav = {
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  infinite: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function Included(props) {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef()
  const slider2 = useRef()

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      poolingIcon: file(relativePath: { eq: "pooling-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      pooling: file(relativePath: { eq: "pooling-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      installationsIcon: file(relativePath: { eq: "install-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      installations: file(relativePath: { eq: "install.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      maintenanceIcon: file(relativePath: { eq: "maintenance-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      maintenance: file(relativePath: { eq: "maintenance-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      insuranceIcon: file(relativePath: { eq: "insurance-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      insurance: file(relativePath: { eq: "insurance.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      requiredIcon: file(relativePath: { eq: "required-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      required: file(relativePath: { eq: "no-land-required.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      operationsIcon: file(relativePath: { eq: "operations-icon.png" }) {
        childImageSharp {
          fixed(width: 61) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      operations: file(relativePath: { eq: "operations-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      creditsIcon: file(relativePath: { eq: "credits-card-icon.png" }) {
        childImageSharp {
          fixed(width: 72) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      credits: file(relativePath: { eq: "instant-credits.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      liquidIcon: file(relativePath: { eq: "liquid-investment-icon.png" }) {
        childImageSharp {
          fixed(width: 55) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      liquid: file(relativePath: { eq: "liquid-img.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      noRiskIcon: file(relativePath: { eq: "no-risk-icon.png" }) {
        childImageSharp {
          fixed(width: 55) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      noRisk: file(relativePath: { eq: "no-risk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      noLimitsIcon: file(relativePath: { eq: "no-limits-icon.png" }) {
        childImageSharp {
          fixed(width: 55) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      noLimits: file(relativePath: { eq: "no-limits.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <section className="synced-cloud-wrap">
        <div className="container">
          <div className="synced-cloud-bg">
            <h2>
              CLOUDSOLAR <span>FEATURES</span>
            </h2>
            <div className="synced-slider">
              <div className="span12">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={5}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  infinite={false}
                  focusOnSelect={true}
                  centerMode={false}
                  dots={false}
                  // {...settingsNav}
                  className="slider-nav"
                  responsive={[
                    {
                      breakpoint: 1030,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                        centerMode: false,
                        focusOnSelect: true,
                      },
                    },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                      },
                    },
                    {
                      breakpoint: 680,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                      },
                    },
                  ]}
                >
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.poolingIcon.childImageSharp.fixed}
                        alt="Cloud Solar pooling"
                      />
                      <strong>Revenue Pooling</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.installationsIcon.childImageSharp.fixed}
                        alt="Cloud Solar array"
                      />
                      <strong>Low Cost Installations</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.maintenanceIcon.childImageSharp.fixed}
                        alt="Cloud Solar array"
                      />
                      <strong>Maintenance Included</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.insuranceIcon.childImageSharp.fixed}
                        alt="Cloud Solar array"
                      />
                      <strong>Insurance Included</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.requiredIcon.childImageSharp.fixed}
                        alt="Cloud Solar array"
                      />
                      <strong>No Roof/Land Required</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.operationsIcon.childImageSharp.fixed}
                        alt="Cloud Solar array"
                      />
                      <strong>Managed Operations</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.creditsIcon.childImageSharp.fixed}
                        alt="Cloud Solar credits"
                      />
                      <strong>
                        Instant <br /> Credits
                      </strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.liquidIcon.childImageSharp.fixed}
                        alt="Cloud Solar liquid"
                      />
                      <strong>Liquid Investment</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.noRiskIcon.childImageSharp.fixed}
                        alt="Cloud Solar no risk"
                      />
                      <strong>No Risk</strong>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-img">
                      <Img
                        fixed={data.noLimitsIcon.childImageSharp.fixed}
                        alt="Cloud Solar no limits"
                      />
                      <strong>No Limits</strong>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

            <Slider
              asNavFor={nav2}
              ref={slider1}
              dots={false}
              slidesToShow={1}
              slidesToScroll={1}
              infinite={false}
              arrows={false}
              fade={true}
              // {...settingsFor}
              className="slider-for"
            >
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.poolingIcon.childImageSharp.fixed}
                    alt="Cloud Solar pool"
                  />
                  <h4>Revenue Pooling</h4>
                  <p>
                    Owning solar power in a pool greatly increases earnings
                    potential of our investors, while decreasing the risks
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.pooling.childImageSharp.fluid}
                    alt="Cloud Solar pool"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.installationsIcon.childImageSharp.fixed}
                    alt="Cloud Solar installations"
                  />
                  <h4>Low Cost Installations</h4>
                  <p>
                    We buy solar panels & components in large quantities to
                    create economies of scale to save money for our customers
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.installations.childImageSharp.fluid}
                    alt="Cloud Solar installations"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.maintenanceIcon.childImageSharp.fixed}
                    alt="Cloud Solar maintenance"
                  />
                  <h4>Maintenance Included</h4>
                  <p>
                    Maintenance and related downtime costs are absorbed by the
                    solar pool so there is no added charge to our customers.
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.maintenance.childImageSharp.fluid}
                    alt="Cloud Solar maintenance"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.insuranceIcon.childImageSharp.fixed}
                    alt="Cloud Solar insurance"
                  />
                  <h4>Insurance Included</h4>
                  <p>
                    All insurance costs are covered by the pool which benefits
                    from a larger policy that protects our customers
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.insurance.childImageSharp.fluid}
                    alt="Cloud Solar insurance"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.requiredIcon.childImageSharp.fixed}
                    alt="Cloud Solar insurance"
                  />
                  <h4>No Roof/Land Required</h4>
                  <p>
                    Our products are perfectly suited for persons and businesses
                    who rent their locations, our remote solar panels move when
                    you move
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.required.childImageSharp.fluid}
                    alt="Cloud Solar no land required"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.operationsIcon.childImageSharp.fixed}
                    alt="Cloud Solar operations"
                  />
                  <h4>Managed Operations</h4>
                  <p>
                    All operations and monitoring of the pool is done by us to
                    achieve efficiencies
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.operations.childImageSharp.fluid}
                    alt="Cloud Solar operations"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.creditsIcon.childImageSharp.fixed}
                    alt="Cloud Solar credits"
                  />
                  <h4>Instant Credits</h4>
                  <p>
                    Instant credits with no waiting on offsets on your electric
                    bill. Use the money for whatever you wish.
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.credits.childImageSharp.fluid}
                    alt="Cloud Solar credits"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.liquidIcon.childImageSharp.fixed}
                    alt="Cloud Solar liquid investment"
                  />
                  <h4>Liquid Investment</h4>
                  <p>
                    Our products are easily converted into cash for short term
                    or long term needs, or emergencies.
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.liquid.childImageSharp.fluid}
                    alt="Cloud Solar liquid investment"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.noRiskIcon.childImageSharp.fixed}
                    alt="Cloud Solar no risk"
                  />
                  <h4>No Risk</h4>
                  <p>
                    No risk of owning the assets, therefore all liability falls
                    with CloudSolar
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.noRisk.childImageSharp.fluid}
                    alt="Cloud Solar no risk"
                  />
                </div>
              </div>
              <div className="featuredItem">
                <div className="left product-content">
                  <Img
                    fixed={data.noLimitsIcon.childImageSharp.fixed}
                    alt="Cloud Solar no limits"
                  />
                  <h4>No Limits</h4>
                  <p>
                    Not exactly, currently you are limited to owning 20 digital
                    solar panels. When the solar pool grows in size, we will
                    allow persons to purchase more panels
                  </p>
                  <div className="item-btn btn-wrap">
                    <a className="button" href="/">
                      READ MORE ABOUT WHY WE ARE BETTER
                    </a>
                  </div>
                </div>
                <div className="right product-image">
                  <Img
                    fluid={data.noLimits.childImageSharp.fluid}
                    alt="Cloud Solar no limits"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
