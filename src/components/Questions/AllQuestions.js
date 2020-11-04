import React from 'react'
import BasicQuestions from './BasicQuestions'
import InvestingQuestions from './InvestingQuestions'
import PaymentQuestions from './PaymentQuestions'
import OtherQuestions from './OtherQuestions'

export default function AllQuestions() {
  return (
    <>
      <BasicQuestions />
      <InvestingQuestions />
      <PaymentQuestions />
      <OtherQuestions />
    </>
  )
}
