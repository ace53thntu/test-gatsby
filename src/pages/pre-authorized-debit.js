import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Grid from '@bit/mui-org.material-ui.grid'
// import Typography from '@bit/mui-org.material-ui.typography'

export default function PreAuthorizedDebit() {
  return (
    <Layout>
      <section className="inner banner-section">
        <div className="container">
          <div className="caption">
            <h1>Pre-Authorized Debits/Credits Form (PADs)</h1>
          </div>
        </div>
      </section>
      <section className="how-it-works-section solar-installations">
        <div className="container">
          <section className="contact-bg">
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              spacing={2}
            >
              <h3>
                BARBADOS PRE-AUTHORUZED DEBIT AUTHORISATION AND DIRECTION
                (Direct Debit/Credit Mandate)
              </h3>
              <p>
                This Payor Authorization (the "Authorisation") is executed this
                [INSERT DATE] by the undersigned in its capacity as [Customer]
                pursuant to one or more Solar Services Agreements (the "Payor")
                and is granted in favour of CloudSolar Inc. (the "Payee") and
                the Processing Institution (defined below) pursuant to the
                Website Terms of Use (the "Terms of Use") for the{' '}
                <Link to="/">https://cloud.solar</Link> website (the "Site").
              </p>
              <br></br>
              <p>
                In this Authorisation, capitalised terms used and not otherwise
                defined herein shall bear the meanings given in the Terms of
                Use.
              </p>
              <br></br>
              <p>1. Payor's Name and Address</p>
              <br></br>
              <p>
                I/We warrant and represent that the following information input
                by me/us (Including Name of Payor's Financial Institution (the
                "Processing Institution") the Processing Institution's Number,
                Transit Number and Account Number information) is all accurate.
              </p>
              <ul>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Address</li>
                <li>Telephone Number</li>
                <li>Bank Account Name</li>
                <li>Bank Name</li>
                <li>Bank Branch</li>
                <li>Bank Transit</li>
                <li>Bank Account Number</li>
              </ul>
              <br></br>
              <p>
                I/We agree to inform the Payee, in writing, of any change in the
                information provided in this section of the Authorization at
                least 10 days prior to the next use of the Pre-Authorized Debit,
                the operation of which is more particularly described in section
                8 below ("PAD").
              </p>
              <br></br>
              <p>
                2. The Payee's contact and banking information is as follows:-
              </p>
              <ul>
                <li>CloudSolar Inc.</li>
                <li>Ocean Hotels Corporate Centre</li>
                <li>Maxwell Main Road</li>
                <li>Christ Church</li>
                <li>Barbados</li>
                <li>BB17075</li>
                <li>1 246 418 8088</li>
                <li>Bank Account Name: Chequing</li>
                <li>Bank Name: CIBC First Caribbean International Bank </li>
                <li>Bank Branch: Warrens</li>
                <li>Bank Transit: 09326</li>
                <li>Bank Account Number: 1001199826</li>
              </ul>
              <br></br>
              <p>
                3. I/We acknowledge that the Authorization is provided for the
                benefit of the Payee and the Processing Institution to permit
                the Processing Institution agreeing to process debits or
                electronic representation of debits against my/our account, as
                listed above, (the "Account") in accordance with any Clearing
                Regulations.
              </p>
              <br></br>
              <p>
                4. I/We warrant and guarantee that I/we are the only persons
                whose signatures are required to authorize withdrawals from the
                Account and that my/our signature hereto represents our
                acceptance of the terms of this Authorization.
              </p>
              <br></br>
              <p>
                5. I/We hereby authorize the Payee to make withdrawals from the
                Account from time to time in accordance with the PAD for the
                payment by the Payor of a solar panel(s) purchased under a Solar
                Services Agreement on the Site from the Payee. I/We hereby
                authorize and direct the Processing Institution to transfer the
                amount stated in the PAD to the Payee. Withdrawals under this
                Authorization may be made in any manner required or permitted by
                the laws of Barbados.
              </p>
              <br></br>
              <p>
                6. I/We may cancel the authorization at any time upon providing
                10 days' written notice to the Payee and the Processing
                Institution.
              </p>
              <br></br>
              <p>
                7. I/We acknowledge that provision and delivery of this
                Authorization to the Payee constitutes delivery by me/us to the
                Processing Institution. Any delivery of the Authorization to the
                Payee, regardless of the method of delivery, constitutes
                delivery by me/us.
              </p>
              <br></br>
              <p>
                8. The Payee will provide to me/us, at the address provided in
                Section 1 and by way of a notice in my account on the Site with
                respect to fixed amount PADs, written notice of the amount to be
                debited (the "Payment Amount") and the date(s) on which the
                Payment Amount debited will be posted to my/our Account (the
                "Payment Date"), at least 10 calendar days before the Payment
                Date of the PAD, and such notice shall be provided every time
                there is a change in the Payment Amount or the Payment Date(s).
              </p>
              <br></br>
              <p>
                9. The Payee may issue a PAD as frequently as agreed in
                accordance with the terms agreed under any payment plan for any
                Solar Services Agreement for the payment of solar panels from
                the Payor arranged via the Site.
              </p>
              <br></br>
              <p>
                10. I/We warrant that the Processing Institution is not required
                to verify that a PAD has been issued in accordance with the
                particulars of this Authorization including, but not limited to,
                the amount, or that any purpose of payments for which the PAD
                was issued has been fulfilled by the Payee as a condition to
                honoring a PAD issued or caused to be issued by the Payee on the
                Account.
              </p>
              <br></br>
              <p>
                11. Revocation of this Authorization does not terminate the
                Terms of Use that exist between me/us and the Payee [or the
                Solar Services Agreement(s) I/We am/are party to]. The
                Authorization applies only to the method of payment and does not
                otherwise have any bearing on the Terms of Use or the Solar
                Services Agreement(s) I/We am/are party to.
              </p>
              <br></br>
              <p>
                12. I/We may dispute a PAD only under the following conditions:
              </p>
              <ul>
                <li>
                  <p>
                    A. the PAD was not drawn in accordance with this
                    Authorization;
                  </p>
                </li>
                <li>
                  <p>B. this Authorization was revoked;</p>
                </li>
                <li>
                  <p>
                    C. pre-notification, as required under section 8 was not
                    received.
                  </p>
                </li>
              </ul>
              <p>
                I/We acknowledge that in order to be reimbursed a declaration to
                the effect that either (A), (B) or (C) took place, must be
                completed and presented to the branch of the Processing
                Institution holding the Account up to and including 90 calendar
                days after the date on which the PAD in dispute was posted to
                the Account. I/We acknowledge that when disputing any PAD beyond
                the time allowed in this section it is a matter to be resolved
                solely between me/us and the Payee, outside the payments system.
              </p>
              <br></br>
              <p>
                13. I/We agree that the information contained in this
                Authorization may be disclosed to CIBC First Caribbean
                International Bank (Barbados) Limited as required to complete
                any PAD transaction.
              </p>
              <br></br>
              <p>
                14. I/We understand and accept the terms of participating in the
                PAD(s) facilitated under this Authorization.
              </p>
            </Grid>
          </section>
        </div>
      </section>
    </Layout>
  )
}
