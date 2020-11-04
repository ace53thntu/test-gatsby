import React from 'react'

export default function SolarInvestmentTable(props) {
  return (
    <>
      <section className="invest-product">
        <div className="container">
          <h2>
            DIGITAL SOLAR <span>ASSETS</span>
          </h2>
          <div className="invest-pro-inner">
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>
                    Digital Solar <br /> Panels
                  </td>
                  <td>
                    Digital Solar
                    <br /> Investment (Coming Soon)
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Purchase Size</td>
                  <td>Up to 20 panels</td>
                  <td>Up to $100,000 of Solar</td>
                </tr>
                <tr>
                  <td>Panel Wattage</td>
                  <td>260 watts per panel</td>
                  <td>260 - 450 watts per panel</td>
                </tr>
                <tr>
                  <td>No Roof or Land Required</td>
                  <td className="right-mark"></td>
                  <td className="right-mark"></td>
                </tr>
                <tr>
                  <td>Estimated Monthly Earnings</td>
                  <td>Up to $200 per Month</td>
                  <td>Up to $375 per Month</td>
                </tr>
                <tr>
                  <td>Estimated Yearly Rate of Return %</td>
                  <td>9-10%</td>
                  <td>4.5%</td>
                </tr>
                <tr>
                  <td>Payment Type</td>
                  <td>Energy Produced Payments</td>
                  <td>Fixed Payments</td>
                </tr>
                <tr>
                  <td>Payment Frequency</td>
                  <td>Monthly Payments</td>
                  <td>Quarterly Payments</td>
                </tr>
                <tr>
                  <td>Product Type</td>
                  <td>Solar Energy Credits(S-RECs)</td>
                  <td>Fixed Lease Agreement with Buyout Clause</td>
                </tr>
                <tr>
                  <td>Service Contract Period</td>
                  <td>25 year Agreement</td>
                  <td>2-10 year Agreement</td>
                </tr>
                <tr>
                  <td>Insurance, Maintenance & Operations</td>
                  <td className="right-mark"></td>
                  <td className="right-mark"></td>
                </tr>
                <tr>
                  <td>Liquidity Options</td>
                  <td className="right-mark"></td>
                  <td className="right-mark"></td>
                </tr>
                <tr>
                  <td>Lock-Out Period</td>
                  <td>1 year</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>Bank Financing Available</td>
                  <td className="right-mark"></td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
