import React from 'react'
import Typography from '@bit/mui-org.material-ui.typography'

export default function InvestmentProcess(props) {
  return (
    <>
      <section className="invest-process">
        <div className="container">
          <h2>
            THE <span>DIGITAL PROCESS</span>
          </h2>
          <div className="invest-inner">
            <div className="process-list">
              <div className="process-item">
                <div className="pro-img"></div>
                <Typography variant="h4">A Simple Purchase</Typography>
                <Typography variant="body1">
                  Select the number of panels in your digital solar PV system and pay
                  for it online. Use our calculator to start!
                </Typography>
              </div>
            </div>
            <div className="process-list">
              <div className="process-item">
                <div className="pro-img"></div>
                <Typography variant="h4">Some Paperwork</Typography>
                <Typography variant="body1">
                  Agree to our standard terms and conditions set out in our
                  digital agreements.
                </Typography>
              </div>
            </div>
            <div className="process-list">
              <div className="process-item">
                <div className="pro-img"></div>
                <Typography variant="h4">System is Live</Typography>
                <Typography variant="body1">
                  Your system goes live with full support services and insurance
                  already in place, so you have no wait time or worries.
                </Typography>
              </div>
            </div>
            <div className="process-list">
              <div className="process-item">
                <div className="pro-img"></div>
                <Typography variant="h4">Immediate Power</Typography>
                <Typography variant="body1">
                  Power on! Your system generates power every day with no roof
                  or installation required nor waiting on regulatory approvals!
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
