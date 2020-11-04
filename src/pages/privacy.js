import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Typography from '@bit/mui-org.material-ui.typography'
import Grid from '@bit/mui-org.material-ui.grid'

export default function Privacy() {
  return (
    <Layout>
      <section className="inner banner-section">
        <div className="container">
          <div className="caption">
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </section>
      <section className="how-it-works-section solar-installations">
        <div className="container">
          <div className="contact-bg">
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              spacing={2}
            >
              <Typography variant="h6" gutterBottom>
                Your privacy is important to us. It is CloudSolar Inc.'s policy
                to respect your privacy regarding any information we may collect
                from you across our website,{' '}
                <Link to="/">https://www.cloud.solar</Link> ("site"), and other
                sites we own and operate.
              </Typography>
              <Typography variant="h6" gutterBottom>
                This Privacy Policy (together with our Terms of Use and any
                other documents referred to in it) sets out the basis on which
                any personal data we collect from you, or that you provide to
                us, will be processed by us. Please read the following carefully
                to understand our views and practices regarding your personal
                data and how we will treat it.
              </Typography>
              <Typography variant="h6" gutterBottom>
                By accessing our site you are accepting and consenting to the
                practices described in this Privacy Policy.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Our site is not intended for children and we do not knowingly
                collect data relating to children. We only ask for personal
                information when we truly need it to provide a service to you.
                We collect it by fair and lawful means, with your knowledge and
                consent.
              </Typography>
              <Typography variant="h6" gutterBottom>
                We will collect and process the following data about you:
                <ol>
                  <li>
                    Information you give us. This is information about you that
                    you give us by filling in forms on our site or by
                    corresponding with us by phone, e-mail or otherwise. It
                    includes information you provide when you register to use
                    our site, subscribe to our service and when you report a
                    problem with our site. The information you give us may
                    include your name, address, e-mail address and phone number,
                    financial and credit card information, personal description
                    and photograph.
                  </li>
                  <li>
                    Information we collect about you. With regard to each of
                    your visits to our site we may automatically collect
                    technical information, including the Internet protocol (IP)
                    address used to connect your computer to the Internet and
                    your login information. We also let you know why we’re
                    collecting it and how it will be used.
                  </li>
                </ol>
              </Typography>
              <Typography variant="h6" gutterBottom>
                We use information held about you in the following ways:
                <ol>
                  <li>
                    Information you give to us. We will use this information: to
                    carry out our obligations arising from any contracts entered
                    into between you and us and to provide you with the
                    information and services that you request from us; to
                    provide you with information about goods or services we feel
                    may interest you; to notify you about changes to our
                    service; to ensure that content from our site is presented
                    in the most effective manner for you and for your computer.
                  </li>
                  <li>
                    Information we collect about you. We will use this
                    information: to administer our site and for internal
                    operations, including troubleshooting, data analysis,
                    testing, research, statistical and survey purposes; to
                    improve our site to ensure that content is presented in the
                    most effective manner for you and for your computer; to
                    allow you to participate in interactive features of our
                    service, when you choose to do so; as part of our efforts to
                    keep our site safe and secure; to measure or understand the
                    effectiveness of advertising we serve to you and others, and
                    to deliver relevant advertising to you; to make suggestions
                    and recommendations to you and other users of our site about
                    goods or services that may interest you or them.
                  </li>
                </ol>
              </Typography>
              <Typography variant="h6" gutterBottom>
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store, we
                will protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use or modification.
              </Typography>
              <Typography variant="h6" gutterBottom>
                We do not share any personally identifying information publicly
                or with third-parties, except when required to by law.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies. Additionally,
                our site may, from time to time, contain links to and from the
                websites of our advertisers and affiliates. If you follow a link
                to any of these websites, please note that these websites have
                their own privacy policies and that we do not accept any
                responsibility or liability for these policies. Please check
                these policies before you submit any personal data to these
                websites.
              </Typography>
              <Typography variant="h6" gutterBottom>
                You are free to refuse our request for your personal
                information, with the understanding that we may be unable to
                provide you with some of your desired services. Where we have
                given you (or where you have chosen) a password which enables
                you to access certain parts of our site, you are responsible for
                keeping this password confidential. We ask you not to share a
                password with anyone.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Any payment transactions will be encrypted. Unfortunately, the
                transmission of information via the internet is not completely
                secure. Although we will do our best to protect your personal
                data, we cannot guarantee the security of your data transmitted
                to our site; any transmission is at your own risk. Once we have
                received your information, we will use strict procedures and
                security features to try to prevent unauthorised access.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Our site uses cookies to distinguish you from other users of our
                site. This helps us to provide you with a good experience when
                you browse our website and also allows us to improve our site.
                For detailed information on the cookies we use and the purposes
                for which we use them see our Cookie Policy.
              </Typography>
              <Typography gutterBottom>
                If you have any questions about how we handle user data and
                personal information, feel free to contact us at
                info@cloud.solar.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Any changes we make to this Privacy Policy in the future will be
                posted on this page and, where appropriate, notified to you by
                e-mail. Please check back frequently to see any updates or
                changes to this Privacy Policy.
              </Typography>
              <Typography variant="h6" gutterBottom>
                These terms and conditions are governed by and construed in
                accordance with the laws of Barbados and you irrevocably submit
                to the exclusive jurisdiction of the courts of Barbados.
                <br />
              </Typography>
              <Typography variant="h6" gutterBottom>
                This policy is effective as of October 1st, 2020.
              </Typography>
            </Grid>
          </div>
        </div>
      </section>
    </Layout>
  )
}
