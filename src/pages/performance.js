import React from 'react'
import MakeStyles from '@bit/mui-org.material-ui.internal.make-styles'
import PlatformChart from '../components/Charts/PlatformChart'
import Layout from '../components/layout'
import Grid from '@bit/mui-org.material-ui.grid'
import Typography from '@bit/mui-org.material-ui.typography'
import Paper from '@bit/mui-org.material-ui.paper'
import List from '@bit/mui-org.material-ui.list'
import ListItem from '@bit/mui-org.material-ui.list-item'
import Divider from '@bit/mui-org.material-ui.divider'
import ListItemText from '@bit/mui-org.material-ui.list-item-text'
import ListItemAvatar from '@bit/mui-org.material-ui.list-item-avatar'
import Avatar from '@bit/mui-org.material-ui.avatar'
import solarPoolPerformance from '../images/solar-pool-performance.webp'

const useStyles = MakeStyles({
  root: {
    fontWeight: 'bold',
    width: '100%',
    maxWidth: '51ch',
  },
  paper: {
    padding: 30,
    textAlign: 'center',
    marginTop: 40,
  },
  titleLeft: {
    display: 'block',
    align: 'center',
    width: 100,
  },
})

export default function Performance() {
  const classes = useStyles()

  return (
    <Layout>
      <div className="container">
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} xl={12} lg={12} md={12}>
            <Paper className={classes.paper} elevation={3}>
              <h2 style={{ color: '#1957a6' }}>SOLAR POOL ENERGY</h2>

              <h3 style={{ textAlign: 'left' }}>Monthly Production Rate</h3>
              <p>
                For the month of August 2020, we generated{' '}
                <strong>123.2 kWh per kWp installed</strong> and our solar pool
                sold 120,011 kWh of energy!
              </p>
              <img src={solarPoolPerformance} alt="Performance" />
              <h4>How to read the chart:</h4>
              <p>
                <strong>Total kWh sales</strong> are all the sales of solar
                being exported to the national grid by our solar pool. As we add
                new installations, the total solar generated will increase
                further.
                <br></br>
                <br></br>
                <strong>Specific kWh Production</strong> is the gross kWh
                directly exported by 1 kWp of installed power. Our software uses
                this average across our systems to distribute the solar energy
                sold by our clients' installations.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="container">
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Paper className={classes.paper} elevation={3}>
            <h2 style={{ color: '#1957a6', marginBottom: 60 }}>
              SOLAR ASSETS PORTFOLIO
            </h2>
            <Grid
              container
              item
              xs={12}
              sm={12}
              xl={12}
              lg={12}
              md={12}
              spacing={3}
            >
              <Grid item xs={12} sm={12} xl={6} lg={6} md={6}>
                <h3 style={{ color: '#1957a6', marginBottom: 60 }}>
                  Our Solar Installations
                </h3>
                <List className={classes.root}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="G" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Guinea 1,280 kWp - 3200 panels (400 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Under construction
                          </Typography>
                          {' — Expected completion December 2020.'}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="M" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Monterey 400.5 kWp - 1335 panels (300 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since March 2020
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Z" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="ZRS Farms 73.4 kWp - 250 panels (300 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since May 2018
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="O" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oldbury 92.24 kWp - 371 panels (260-265 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since February 2017
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="B" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Breeders 85.28 kWp - 328 panels (260 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since February 2017
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="B" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Bright Hall 82.16 kWp - 316 panels (260 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since January 2017
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="R" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Ridge 65.52 kWp - 252 panels (260 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since April 2016
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="B" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Balls Plantation 172.64 kWp - 664 panels (260 Watts)"
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Online since May, 2016
                          </Typography>
                          {/* {' — Expected completion December 2020.'} */}
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={12} xl={6} lg={6} md={6}>
                {/* <Paper className={classes.paper} elevation={3}> */}
                <h3 style={{ color: '#1957a6', marginBottom: 60 }}>
                  Solar Pool Kilowatt Peak (kWp)
                </h3>
                <p>
                  Our online kWp that we are generating from is at 973.74 kWp.
                </p>
                <p>
                  We are expected to complete and have installed a further 1280
                  kWp by 2021 Q1.
                </p>
                {/* </Paper> */}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
      <div className="container">
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={12} sm={12} xl={12} lg={12} md={12}>
            <Paper className={classes.paper} elevation={3}>
              <h2 style={{ color: '#1957a6', marginBottom: 60 }}>
                HISTORICAL ENERGY SALES{' '}
              </h2>
              <PlatformChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
