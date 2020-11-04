import React from 'react'
import PanelCalculator from '../calculator/index'

export default function Banner() {
  return (
    <div>
      <section className="banner-section home-banner">
        <div className="container">
          <div className="caption">
            <div className="home-banner-caption">
              <h2>
                <strong>Start earning </strong>
                <br />
                from the <span className="sunBold">sun</span>
                <br />
                <span className="bannerSub">with digital solar</span>
              </h2>
            </div>
            <div className="banner-calculator">
              <div className="calculator-main">
                <PanelCalculator />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
