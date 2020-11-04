import React from 'react'
import styled, { withTheme } from 'styled-components'
import MakeStyles from '@bit/mui-org.material-ui.internal.make-styles'
import Grid from '@bit/mui-org.material-ui.grid'
// import Paper from '@bit/mui-org.material-ui.paper'
import CardContent from '@bit/mui-org.material-ui.card-content'
import Card from '@bit/mui-org.material-ui.card'
import CardHeader from '@bit/mui-org.material-ui.card-header'

//import { spacing } from '@material-ui/system'
import numeral from 'numeral'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/pro-light-svg-icons'
import { Bar } from 'react-chartjs-2'

//const Card = styled(MuiCard)(spacing)

// const Spacer = styled.div(spacing)

const ChartWrapper = styled.div`
  height: 100%;
  width: 100%;
`

function PlatformChart() {
  const useStyles = MakeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      fontSize: 28,
      color: '#1957a6',
    },
  }))

  const classes = useStyles()

  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    fill: 'start',
    datasets: [
      {
        label: '2016-2020',
        data: [225800, 983579, 1721947, 2483246, 3253789],
        backgroundColor: 'rgba(0,123,255,0.1)',
        borderColor: 'rgba(0,123,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgb(0,123,255)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3,
      },
    ],
  }

  const options = {
    maintainAspectRatio: true,
    legend: {
      display: true,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return numeral(tooltipItem.yLabel).format('0,0') + ' kWh'
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (label, index, labels) {
              return numeral(label).format('0,0') + ' kWh'
            },
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: 'transparent',
          },
        },
      ],
    },
  }

  return (
    <Grid
      container
      spacing={3}
      style={{ marginBottom: 20 }}
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} lg={12}>
        {/* <Paper elevation={3}> */}
        <Card>
          <CardHeader
            avatar={
              <FontAwesomeIcon
                icon={faChartBar}
                style={{ fontSize: 36, color: 'Dodgerblue' }}
              />
            }
            title="Cumulative Energy Sold to the Grid"
            classes={{
              title: classes.title,
            }}
          />
          <CardContent>
            {/* <Typography
                variant="h6"
                gutterBottom
                style={{ color: '#1957a6' }}
              >
                Cummulative Energy Sold to the Grid
              </Typography> */}
            {/* <Spacer mb={6} /> */}
            <ChartWrapper>
              <Bar data={data} options={options} />
            </ChartWrapper>
          </CardContent>
        </Card>
        {/* </Paper> */}
      </Grid>
    </Grid>
  )
}

export default withTheme(PlatformChart)
