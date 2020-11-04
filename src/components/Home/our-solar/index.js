import React from 'react'
import Questions from '../questions'
import { Link } from 'gatsby'
import '../../../styles/layout.css'
import '../../../styles/responsive.css'

export default function OurSolar() {
  return (
    <>
      <section className="get-started-section section-gapping">
        <div className="container">
          <div className="questions-block">
            <div className="content-left">
              <h2 className="title-center">
                TOP <span>QUESTIONS</span>
              </h2>
              <div id="content">
                <Questions />
              </div>
              <div className="btn-wrap">
                <Link to="/questions/">
                  <button className="button">VIEW ALL QUESTIONS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
