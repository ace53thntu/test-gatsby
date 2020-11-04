import React, { useState } from 'react'
import Accordion from '../Accordion'
import Card from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import fitRate from '../../docs/2019-09-16_commission_decision_final_FIT.pdf'
import partner from '../../docs/Solar_Partner_PitchDeck.pdf'
import Typography from '@bit/mui-org.material-ui.typography'

// const fitRateLink = (
//   <a href={fitRate} style={{ color: '#1957a6', fontWeight: 'bold' }}>
//     {' '}
//     Read more about Fit Rate
//   </a>
// )
const mailLink = (
  <a
    href="mailto:info@cloud.solar"
    style={{ color: '#1957a6', fontWeight: 'bold' }}
  >
    info@cloud.solar
  </a>
)

const partnerLink = (
  <a href={partner} style={{ color: '#1957a6', fontWeight: 'bold' }}>
    {' '}
    Download our roof partner pitch deck here to learn more about partner
    benefits.
  </a>
)

const content = [
  {
    question:
      'What if my solar panel calculation to offset my entire bill is greater than I can afford right now?',
    answer: `Don’t worry, you are not alone. Unlike traditional solar, with CloudSolar you can always add more panels digitally at any time and grow your investment over time without the wait. We also provide financing packages for all your purchases.`,
  },
  {
    question: 'How many digital solar panels can I purchase?',
    answer: (
      <Typography variant="body1">
        Users can purchase up to 20 digital solar panels. For larger purchases
        greater than 20 panels, clients can enquire directly to us at {mailLink}
        .
      </Typography>
    ),
  },
  {
    question: 'Does the system work if there is a power outage?',
    answer: `No. The inverters need a power supply to convert generated electricity from DC to AC for sale to the utility. Without a power supply the inverters will not work and the network will go offline. Since we are a pool of solar, when one system goes down, it will have a minimal impact on the entire network, affording our customers “no downtime” typically.`,
  },
  {
    question:
      'What happens at the end of my digital contract (DSA) with CloudSolar?',
    answer: `CloudSolar has a maximum service contract length of 25 years (life-cycle of the solar panels) as after this period, the panels will need to be replaced with new panels. After the 25 years, income from the these solar panels will come to an end, and customers will have the option to renew their purchase for newer panels in CloudSolar in order to continue to enjoy the same energy production savings. The owner of the system will need to determine if they wish to buy more digital solar panels in order to keep earning revenues from their system. If the owner decides they want to exit, they have to option to sell the obselete panel on the open market.

    For greater flexibility, customers can also sell their solar panel after 1 year from their "Active Date", if they are looking for an exit strategy.`,
  },
  {
    question: 'I am a renter, what if I move to another location?',
    answer: `If you are a renter and you move, your digital solar panel moves with you, so you can continue to enjoy your solar energy credits wherever you move to, since we never install a physical system on your property.`,
  },
  {
    question: 'Why should I trust CloudSolar?',
    answer: `CloudSolar has invested in obtaining the right licenses and regulatory approvals so consumers and businesses are protected. We are setup as a Special Purpose Company, with the sole purpose of promoting and democratizing investments in the solar industry.

    CloudSolar is a Barbadian owned company approved by the Government Electrical Engineering Department at each of our locations to sell solar energy as electricity back to the grid. We do not sell our customers electricity.`,
  },
  {
    question: 'I have a large roof, how can CloudSolar help me?',
    answer: (
      <Typography variant="body1">
        We have made special arrangements for roof owners such as yourself.
        Indeed you can make good returns from solar with the right size roof,
        the correct roof orientation and pitch. Unfortunately, you will also be
        responsible for roof repairs, cleaning of the system, management of the
        system, inverter replacement, downtime costs, insurance and all
        maintenance associated. Also, if your production is greater than your
        usage, you will only get your credits quarterly from the utility. With
        CloudSolar our customers enjoy all of these benefits and monthly credits
        at no additional cost.
        <br />
        <br />
        {partnerLink}
      </Typography>
    ),
  },
  {
    question:
      'What happens if the rate of electricity drops, who controls that? How guaranteed is my return?',
    answer: `With the FIT rate, our systems are guaranteed their payments for 20 years once you sign up before December 2021. The FIT rate is mutually exclusive from the electricity rates and is a price floor the government has put in place so that installers of solar make a return on their investment. In the past, the rate was tied to the fuel clause adjustment and if electricity prices go down, so would your income from solar. Now if electricity prices go down, and you were using the money from solar to pay your electric bills, the electric bills would be less for you to pay to the utlity, while the solar credits you receive remain unchanged, equaling more money in your pocket.`,
  },
  {
    question:
      'Does my CloudSolar purchase give me a tax break as adding solar to my house does...?',
    answer: `We are working on the tax credits, so that if you also buy a digital solar panel in an off-site, remotely installed PV system, you can receive a benefit as opposed to installing it physically on your own roof.`,
  },
]

export default function OtherQuestions() {
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
