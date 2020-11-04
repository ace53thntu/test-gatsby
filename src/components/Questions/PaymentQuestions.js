import React, { useState } from 'react'
import Accordion from '../Accordion'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Typography from '@bit/mui-org.material-ui.typography'


const depreciatedValue = (
  <>
    <div className="faq-table">
      <table>
        <thead>
          <tr>
            <td>Year</td> <td>Depreciation</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td> <td>96%</td>
          </tr>
          <tr>
            <td>2</td> <td>92%</td>
          </tr>
          <tr>
            <td>3</td> <td>88%</td>
          </tr>
          <tr>
            <td>4</td> <td>84%</td>
          </tr>
	        <tr>
            <td>5</td> <td>80%</td>
          </tr>
          <tr>
            <td>6</td> <td>76%</td>
          </tr>
          <tr>
            <td>7</td> <td>72%</td>
          </tr>
          <tr>
            <td>8</td> <td>68%</td>
          </tr>
          <tr>
            <td>9</td> <td>64%</td>
          </tr>
	  <tr>
            <td>10</td> <td>60%</td>
          </tr>
          <tr>
            <td>11</td> <td>56%</td>
          </tr>
          <tr>
            <td>12</td> <td>52%</td>
          </tr>
          <tr>
            <td>13</td> <td>48%</td>
          </tr>
          <tr>
            <td>14</td> <td>44%</td>
          </tr>
	  <tr>
            <td>15</td> <td>40%</td>
          </tr>
          <tr>
            <td>16</td> <td>36%</td>
          </tr>
          <tr>
            <td>17</td> <td>32%</td>
          </tr>
          <tr>
            <td>18</td> <td>28%</td>
          </tr>
          <tr>
            <td>19</td> <td>24%</td>
          </tr>
	  <tr>
            <td>20</td> <td>20%</td>
          </tr>
          <tr>
            <td>21</td> <td>16%</td>
          </tr>
          <tr>
            <td>22</td> <td>12%</td>
          </tr>
          <tr>
            <td>23</td> <td>8%</td>
          </tr>
          <tr>
            <td>24</td> <td>4%</td>
          </tr>
	  <tr>
            <td>25</td> <td>0%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)

const content = [
  {
    question: 'How are solar credits paid out of CloudSolar?',
    answer: `CloudSolar accumulates our customers’ solar energy credits on behalf of them from the utility company. We deduct any finance costs associated with the buyers purchase (not applicable for cash sales). The dollar amount is calculated and credited to the customers' Solar Credits Account. Funds are automatically paid out through direct deposit on a monthly basis after the Solar Credits account is credited and verified.`,
  },
  {
    question: 'Are there any fees?',
    answer: `There are no fees for receiving your solar credits. CloudSolar takes a solar credit deductible from the solar pool of 20% per kWh generated to pay for its services to maintain and manage your digital solar panels.`,
  },
  {
    question:
      'I purchased a digital solar panel and I need to exit the agreement, can I do this?',
    answer: `Purchasing a physical solar panel is no different to purchasing a digital solar panel. Funds are utilized to remotely install and locate a physical asset which cannot be refunded. However, with a digital solar panel, liquidity can be provided after a client passes their 1 year lock-out period. All digital solar agreements in CloudSolar can be bought out through cash re-sales or leveraged buyouts. How this would work - CloudSolar would re-sell the digital solar panels from one client to another client or re-purchase the solar panel from the customer at its depreciated value.`,
  },
  {
    question:
      'How is the depreciated value of a digital solar panel calculated?',
    answer: (
      <Typography variant="body1">
        A digital solar panel will last 25 years, 
	      we would depreciate a panel by 4% every year 
	      to arrive at a net asset value that a customer 
	      contract has, so that by year 25, the customer 
	      has $0 left in the solar panel because it would 
	      have been operating and paying the client his returns 
	      on a monthly basis for 25 years. See a sample depreciation
	      schedule below:
        <br />
        <br />
        {depreciatedValue}
      </Typography>
    ),
},
]

export default function PaymentQuestions() {
  const [activeEventKey, setActiveEventKey] = useState(0)

  return (
    <>
      <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
        {content.map(({ question, answer }, index) => (
          <Card key={index}>
            <Accordion.Toggle element={Card.Header} eventKey={index}>
              <h1 className="questions">{question}</h1>
              {activeEventKey !== index && (
                <span style={{ marginTop: 12 }}>
                  <FontAwesomeIcon icon={faChevronDown} className="qIcon" />
                </span>
              )}

              {activeEventKey === index && (
                <span style={{ marginTop: 12 }}>
                  <FontAwesomeIcon icon={faChevronUp} className="qIcon" />
                </span>
              )}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index} element={Card.Body}>
              {answer}
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  )
}
