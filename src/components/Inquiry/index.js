import React from 'react'
import { useForm } from 'react-hook-form'
import { API } from 'aws-amplify'
import swal from '@sweetalert/with-react'

export default function Inquiry() {
  const { handleSubmit, register, reset } = useForm()
  const onSubmit = async data => {
    try {
      await API.post('leads', '/leads', {
        body: data,
      })
      swal(
        'Success!',
        `We received your message ${data.name.substring(
          0,
          data.name.indexOf(' ')
        )} and we'll be in touch ASAP.`,
        'success',
        {
          buttons: false,
          timer: 7000,
        }
      )
      reset()
    } catch (e) {
      swal(
        'Oh no!',
        'Something went wrong. Please email us directly at info@cloud.solar.',
        'error',
        {
          buttons: false,
          timer: 7000,
        }
      )
      reset()
    }
  }

  return (
    <>
      <section className="inouiry-section section-gapping">
        <div className="container">
          <div className="inouiry-wrap">
            <h2>
              QUICK <span>INQUIRY</span>
            </h2>
            <span>Fill in the fields below and we’ll get back to you.</span>
            <form
              id="contact-inquiry"
              method="post"
              name="contactenquiryform"
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="field">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" "
                  ref={register({
                    required: 'Required',
                  })}
                  style={{ padding: 20, fontSize: 20 }}
                />
                <label className="floating-label" htmlFor="name">
                  Name<sup>*</sup>
                </label>
                <span className="name-msg"></span>
              </div>
              <div className="field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder=" "
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  style={{ padding: 20, fontSize: 20 }}
                />
                <label className="floating-label" htmlFor="email">
                  Email<sup>*</sup>
                </label>
                {/* <span for="email"></span> */}
              </div>
              <div className="field full-raw">
                <textarea
                  name="message"
                  id="message"
                  className="contactDetails"
                  placeholder=" "
                  ref={register({
                    required: 'Required',
                  })}
                  style={{ padding: 20, fontSize: 20 }}
                ></textarea>
                <label className="floating-label" htmlFor="message">
                  Details<sup>*</sup>
                </label>
                <span className="message-msg"></span>
              </div>
              <div className="submit-btn-wrap read_btn all-btn">
                <div className="button wrap-input">
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="con_btn2"
                    name="btnsubmit"
                  />
                </div>
              </div>
              <div id="response"></div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
