import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Typography from '@bit/mui-org.material-ui.typography'
import Grid from '@bit/mui-org.material-ui.grid'
import Tabs from '@bit/mui-org.material-ui.tabs'
import Tab from '@bit/mui-org.material-ui.tab'
import Box from '@bit/mui-org.material-ui.box'
import pooling from '../../images/pooling-icon.webp'
import installations from '../../images/installations-icon.webp'
import maintenance from '../../images/included-icon.webp'
import required from '../../images/required-icon.webp'
import operations from '../../images/operations-icon.webp'
import credits from '../../images/credits-card-icon.webp'
import liquid from '../../images/liquid-investment-icon.webp'
import noRisk from '../../images/no-risk-icon.webp'
import noLimits from '../../images/no-limits-icon.webp'
import liquidImg from '../../images/liquid-img.webp'
import noRiskImg from '../../images/no-risk.webp'
import noLimitsImg from '../../images/no-limits.webp'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={10}>{children}</Box>}
    </Typography>
  )
}

//For Tabs

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}

export default function Included(props) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const data = useStaticQuery(graphql`
    query {
      pooling: file(relativePath: { eq: "pooling-img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      solararray: file(relativePath: { eq: "solar-array.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      maintenance: file(relativePath: { eq: "maintenance-img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      insurance: file(relativePath: { eq: "insurance.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      roof: file(relativePath: { eq: "roof.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      operations: file(relativePath: { eq: "operations.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      credits: file(relativePath: { eq: "instant-credits.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <section className="synced-cloud-wrap">
        <div className="container">
          <div className="synced-cloud-bg">
            <h2>
              WHAT'S <span>INCLUDED</span>
            </h2>
            <div className="synced-slider">
              <Tabs
                className="mateTab"
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                aria-label="simple tabs example"
              >
                <Tab
                  label="Revenue Pooling"
                  icon={<img alt="solar-revenue-pooling" src={pooling} />}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Low cost Installations"
                  icon={
                    <img
                      alt="low-cost-solarinstallations"
                      src={installations}
                    />
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  label="Maintenance Included"
                  icon={<img alt="maintenance" src={maintenance} />}
                  {...a11yProps(2)}
                />
                <Tab
                  label="Insurance Included"
                  icon={<img alt="insurance" src={insurance} />}
                  {...a11yProps(3)}
                />
                <Tab
                  label="No Roof/Land Required"
                  icon={
                    <img alt="solar-no-roof-or-land-required" src={required} />
                  }
                  {...a11yProps(4)}
                />
                <Tab
                  label="Managed Operations"
                  icon={<img alt="managed-solar-operations" src={operations} />}
                  {...a11yProps(5)}
                />
                <Tab
                  label="Instant Credits"
                  icon={<img alt="solar-credits" src={credits} />}
                  {...a11yProps(6)}
                />
                <Tab
                  label="Liquid Investment"
                  icon={<img alt="liquid-solar-investment" src={liquid} />}
                  {...a11yProps(7)}
                />
                <Tab
                  label="No Risk"
                  icon={<img alt="no-risk-solar" src={noRisk} />}
                  {...a11yProps(8)}
                />
                <Tab
                  label="No Limits"
                  icon={<img alt="cloud-solar-barbados" src={noLimits} />}
                  {...a11yProps(9)}
                />
              </Tabs>

              {/* //Tab Pannels */}

              <TabPanel value={value} index={0}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.pooling.childImageSharp.fluid}
                          alt="Cloud Solar pooling"
                        />
                        <Typography variant="h4" gutterBottom>
                          Revenue Pooling
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          Owning solar power in a pool greatly increases
                          earnings potential of our customers, while decreasing
                          the risks.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.pooling.childImageSharp.fluid}
                          alt="Cloud Solar pooling"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.solararray.childImageSharp.fluid}
                          alt="Cloud Solar array"
                        />
                        <Typography variant="h4">
                          Low Cost Installations
                        </Typography>

                        <Typography variant="body1">
                          We buy solar panels & components in large quantities
                          to create economies of scale to save money for our
                          customers.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.solararray.childImageSharp.fluid}
                          alt="Cloud Solar array"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.maintenance.childImageSharp.fluid}
                          alt="Cloud Solar maintenance"
                        />

                        <Typography variant="h4">
                          Maintenance Included
                        </Typography>

                        <Typography variant="body1">
                          Maintenance and related downtime costs are absorbed
                          into the solar pool so there is no added charge to our
                          customers.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.maintenance.childImageSharp.fluid}
                          alt="Cloud Solar maintenance"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={3}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.insurance.childImageSharp.fluid}
                          alt="Cloud Solar insurance"
                        />
                        <Typography variant="h4">Insurance Included</Typography>

                        <Typography variant="body1">
                          All insurance costs are covered by the solar pool
                          which benefits from a large policy that protects our
                          customer's interests.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.insurance.childImageSharp.fluid}
                          alt="Cloud Solar insurance"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={4}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.roof.childImageSharp.fluid}
                          alt="Cloud Solar no roof or land required"
                        />
                        <Typography variant="h4">
                          No Roof/Land Required
                        </Typography>

                        <Typography variant="body1">
                          Our products are perfectly suitable for individuals &
                          businesses who rent, your digital solar system moves
                          when you move.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.roof.childImageSharp.fluid}
                          alt="Cloud Solar no roof or land required"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={5}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.operations.childImageSharp.fluid}
                          alt="Cloud Solar operations"
                        />
                        <Typography variant="h4">Managed Operations</Typography>

                        <Typography variant="body1">
                          All operations and monitoring of the solar pool are
                          managed by CloudSolar to realise cost savings.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.operations.childImageSharp.fluid}
                          alt="Cloud Solar operations"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={6}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <Img
                          fluid={data.credits.childImageSharp.fluid}
                          alt="Cloud Solar credits"
                        />
                        <Typography variant="h4">Instant Credits</Typography>

                        <Typography variant="body1">
                          Instant credits with no waiting on offsets on your
                          electric bill. Use the money for whatever you wish.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <Img
                          fluid={data.credits.childImageSharp.fluid}
                          alt="Cloud Solar credits"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={7}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <img src={liquid} alt="" />

                        <Typography variant="h4">Liquid Investment</Typography>

                        <Typography variant="body1">
                          Our products are easily converted into cash for short
                          term or long term needs, or emergencies.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <img src={liquidImg} alt="Images" />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={8}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <img src={noRisk} alt="" />

                        <Typography variant="h4">No Risk</Typography>

                        <Typography variant="body1">
                          No risk of owning the assets, therefore all liability
                          falls with CloudSolar.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <img src={noRiskImg} alt="Images" />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>

              <TabPanel value={value} index={9}>
                <div className="item">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={12} md={6}>
                      <div className="left product-content">
                        <img src={noLimits} alt="" />

                        <Typography variant="h4">No Limits</Typography>

                        <Typography variant="body1">
                          Not exactly, when the pool grows in size, we allow
                          persons to invest more, currently you are limited in
                          the amount of solar you can purchase to $25,000.
                        </Typography>
                        <div className="item-btn btn-wrap">
                          <button color="inherit" variant="contained">
                            READ MORE ABOUT WHY WE ARE BETTER
                          </button>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <div className="right product-image">
                        <img src={noLimitsImg} alt="Images" />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
