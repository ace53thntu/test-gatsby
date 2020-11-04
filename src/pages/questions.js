import React, { useState } from 'react'
import Layout from '../components/layout'
import Tabs from '@bit/mui-org.material-ui.tabs'
import Tab from '@bit/mui-org.material-ui.tab'
import Box from '@bit/mui-org.material-ui.box'
import AllQuestions from '../components/Questions/AllQuestions'
import BasicQuestions from '../components/Questions/BasicQuestions'
import InvestingQuestions from '../components/Questions/InvestingQuestions'
import PaymentQuestions from '../components/Questions/PaymentQuestions'
import OtherQuestions from '../components/Questions/OtherQuestions'
import Typography from '@bit/mui-org.material-ui.typography'

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
      {value === index && <Box p={5}>{children}</Box>}
    </Typography>
  )
}

export default function Questions() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    }
  }

  return (
    <Layout>
      <section className="inner banner-section">
        {/* <React.Fragment> */}
        <div className="container">
          <div className="caption">
            <h1>FREQUENTLY ASKED QUESTIONS?</h1>

            <p>
              Compiled below are popular questions that we have answered. Please
              email us with any other questions which you may have.
            </p>
          </div>
        </div>
        {/* </React.Fragment> */}
      </section>
      <section className="inner banner-section">
        <div className="container">
          <div className="how-it-works-bg faqs">
            <h2>
              <span>QUESTIONS?</span>
            </h2>

            <Tabs
              variant="scrollable"
              scrollButtons="on"
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                label="ALL"
                {...a11yProps(0)}
                className="box-shadow-none btn-tab-item"
              />
              <Tab
                label="BASIC QUESTIONS"
                {...a11yProps(1)}
                className="box-shadow-none btn-tab-item"
              />
              <Tab
                label="PURCHASE QUESTIONS"
                {...a11yProps(2)}
                className="box-shadow-none btn-tab-item"
              />
              <Tab
                label="PAYMENT QUESTIONS"
                {...a11yProps(3)}
                className="box-shadow-none btn-tab-item"
              />
              <Tab
                label="OTHER QUESTIONS"
                {...a11yProps(4)}
                className="box-shadow-none btn-tab-item"
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <AllQuestions />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <BasicQuestions />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <InvestingQuestions />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <PaymentQuestions />
            </TabPanel>

            <TabPanel value={value} index={4}>
              <OtherQuestions />
            </TabPanel>
          </div>
        </div>
      </section>
    </Layout>
  )
}
