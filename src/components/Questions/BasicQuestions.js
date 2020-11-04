import React, { useState } from 'react'
import Accordion from '../Accordion'
import Card from '../Card'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Typography from '@bit/mui-org.material-ui.typography'
import fitRate from '../../docs/2019-09-16_commission_decision_final_FIT.pdf'
import dsi from '../../docs/Digital_Solar_Assets_(Customer Deck).pdf'

const performanceLink = (
  <Link to="/performance/" style={{ color: '#1957a6', fontWeight: 'bold' }}>
    {' '}
    Click here for our solar pool performance
  </Link>
)
const fitRateLink = (
  <a href={fitRate} style={{ color: '#1957a6', fontWeight: 'bold' }}>
    {' '}
    Read more about Fit Rate
  </a>
)
const dsiLink = (
  <a href={dsi} style={{ color: '#1957a6', fontWeight: 'bold' }}>
    {' '}
    Click here for our Digital Solar Asset presentation
  </a>
)
const content = [
  {
    question: 'What is CloudSolar?',
    answer: (
      <Typography variant="body1">
        CloudSolar is an online marketplace for digital solar panels. We enable
        our clients to own solar panels in a community of solar installations,
        while removing the barriers and hassles that entail with owning a physically
        installed solar PV system. Our well-managed, sustainable and efficient
        solar PV operations portfolio, generates solar energy that we pool
        together and sell on behalf of our clients to the utility company. All
        of our PV farms are currently operational and selling energy to the
        national grid. CloudSolar is a special purpose company
        that was setup as a digital community of solar installations that
        enables everyone, living anywhere to own a solar PV installation located
        remotely, without physically installing panels on their own roof.
        Everything is administered online and earnings are pooled together in
        our cloud platform to mitigate risk and non-performance of our solar
        sites. <br />
        <br />
        {dsiLink}
      </Typography>
    ),
  },
  {
    question: 'What is a Solar Pool?',
    answer: (
      <Typography variant="body1">
        A Solar Pool is a grouping of solar PV installations that operate
        remotely of each other. They are individually installed and managed by
        CloudSolar. We pool our solar for the benefit of our customers, so as to
        avoid shocks in the system when a panel or an inverter is faulty or
        breaks down. Our pool is also unique in that we are continuously adding
        new installations which benefits all our customers with new technology
        and better solar yields from multiple solar PV systems.
        <br />
        <br />
        {performanceLink}
      </Typography>
    ),
  },
  {
    question: 'Can CloudSolar save me money on my electric bills?',
    answer: `Your solar energy credits that are derived from your solar system can be sold and used to pay for your energy bills, or any other bills for that matter. They are transferred to your banking institution in the form of cash and therefore have no connection to your electricity bill you receive every month from the utility company.`,
  },
  {
    question: 'What does CloudSolar sell?',
    answer: `CloudSolar sells a digital solar panel with a service agreement called a Digital Solar Agreement (DSA). The contract consists of remotely located solar panels that you buy online which are pre-installed in a solar array located on a licensed roof with other community members owning panels like you in a similar format. CloudSolar provides the service agreement to operate, maintain, insure and transfer the the economic benefits of a digital panel and all the renewable energy credits (RECs) for 25 years from the purchase date, with the option to replace the panel after 25 years or sell the obsolete panel after 25 years of ownership. Each digital solar panel we sell includes: repairs, maintenance, insurance, monitoring, inverter replacements and cleaning. All our solar installations are operating and installed on remotely located and licensed host roofs/land. We pass on the economic benefits of the solar earnings to our customers every month and deduct a 20% solar deductible as part of our contract.`,
  },
  {
    question: 'How does it work?',
    answer: `A simple explanation of the business: we facilitate the purchase of a solar panel in a community of operating solar assets. Our community solar farms are installed on remotely located building roofs or are ground mounted on licensed land assets. The entire solar pool network is managed by CloudSolar, and the renewable energy credits (RECs) that each panel earns is transferred back to our clients through our online proprietary platform. We do this by determining each clients' portion of energy from their proportionate number of panels in the solar pool and pay cash directly to them via their financial institution. CloudSolar combines its world-class platform and software with a unique renewable energy business model to deliver the value from the solar industry to our clients, while removing the barriers to entry for the ordinary citizen.`,
  },
  {
    question: 'What is a community solar project?',
    answer: `A community solar project is a large, centrally located solar photovoltaic (PV) system, which benefits multiple members in a community. The goal of community solar is to allow owners to participate in a solar project without the costs or hassle of installing a solar system at their home or business. CloudSolar is the first company in the Caribbean to introduce this concept on a digital platform.`,
  },
  {
    question: 'What is a Digital Solar Agreement (DSA)?',
    answer: `A Digital Solar Agreement (DSA) is a solar service contract that governs the remittance of Renewable Energy Credits (RECs) from your solar panels that are remotely located from your personal or company's property. The energy or Renewable Energy Credits (RECs) is supplied to the local power grid for immediate use. RECs are tradeable for cash and have significant variable value based on solar power generation by the solar pool.`,
  },
  {
    question: 'Do my solar earnings diminish over time in the pool?',
    answer: `As with all solar panels, they degrade over time and the output you would expect from a solar panel will begin to diminish; however, in a solar pool, that shrinkage artificially slows down because of new and more efficient solar panels being added to the pool constantly on new sites. If the solar pool was only on one site with no new solar panels added to the pool, the system would degrade to 85% by year 25. In a pool, that degradation factor could hypothetically be halved if new solar sites were added to the pool on a yearly basis.`,
  },
  {
    question: 'What is a feed in tariff (FIT)?',
    answer: (
      <Typography variant="body1">
        A feed in tariff (FIT) is a rate set by the Fair Trading Commission (a
        government organization) which pays you for excess electricity generated
        by a solar PV system. It is a policy mechanism designed to accelerate
        investments in renewable energy technologies by offering long-term
        contracts to renewable energy producers such as CloudSolar. <br />
        <br />
        {fitRateLink}
      </Typography>
    ),
  },
  {
    question: 'What is the Fair Trading Commission (FTC)?',
    answer: `The Fair Trading Commission (FTC) is a government organization and the body responsible for regulating the FIT rate, monopolies and encouraging fair competition. The Barbados Water Authority and The Barbados Light & Power are all a part of their mandate.`,
  },
  {
    question:
      'What happens to my digital solar panels if a natural disaster hits?',
    answer: `If a natural disaster were to hit, and the solar installations were to be damaged, causing our customers to lose income, we would initially claim from our insurance for the replacement of the damaged installations. We would then seek to replace all damaged installations or perform a payout to all our customers that are affected. If the licensed property that housed the panels were to also be damaged we would immediately seek to relocate the solar panels that were displaced to a new location in a new installation. A proportion of the solar credits derived from the damaged equipment would cease until the pool re-commissions. If we were unable to relocate or re-commission the solar pool partially or in its entirety, we would perform a wind up of the pool assets and every customer on record would be paid their depreciated value of their owned panels in the solar pool.`,
  },
  {
    question: 'What is a kilowatt peak (kWp)?',
    answer: `Kilowatt Peak (kWp) is the direct current (DC) rating of a solar system installed at a remote location. The nampeplate or kW is the alternating current (AC) conversion of this value which is used by the utility. For example, we might be installing a 1,280 kWp (DC) system with a nameplate of 1,000kW (AC). The FIT rate is based on the nameplate of a system at its AC rating.`,
  },
  {
    question: 'What is a Megawatt (MW)?',
    answer: `A Megawatt (MW) is a unit of power equal to 1,000 Kilowatts or 1,000,000 watts, especially as a measure of the output of a power station.`,
  },
  {
    question: 'What is a Kilowatt/Hour (kWh)?',
    answer: `A Kilowatt/Hour (kWh) is a way to measure how much energy you're using. It's not the number of kilowatts you're using in an hour, even though that seems to make sense. A kWh equals the amount of energy you would use by keeping a 1,000 watt appliance running for one hour. When the solar PV panels are operating, they will over 1 hour, convert the sun’s energy into electrical energy, which is measured in kilowatt hours (kWh). A PV system with a peak power of 400 kWp which is working at its maximum capacity for one hour will produce 320 kWh.`,
  },
  {
    question:
      'What is the benefit of buying digital solar vs traditional solar?',
    answer: `There are countless. One of the main factors that we like to tell individuals is that you are getting the best costing solution on our solar panels because we buy large systems straight from the manufacturer. In addition to this benefit, the roof/land and the installation time and hassle is already taken care of by CloudSolar through its service agreements. You can start to earn money from the sun instantly because we have existing solar PV systems that are already installed and operating across Barbados for you to own. We pass all the energy savings from these installations directly on to our customers. We formulate a win-win situation for both parties, which is ultimately helping the planet.`,
  },
  {
    question: 'What is a Special Purpose Company (SPC)?',
    answer: `A Special Purpose Company (SPC) is a legal entity created for a specific purpose. In the context of building solar installations, a SPC can be used as a funding structure, by which all owners (or owners under a given investment threshold) are pooled together into a single entity.`,
  },
]

export default function BasicQuestions() {
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
