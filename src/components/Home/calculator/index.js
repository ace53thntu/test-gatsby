import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function PanelCalculator() {
  const [state, setState] = useState({
    sliderValue: null,
    price: 1248,
    dollarReturn: 124.49,
    kWp: 0.26,
    percentReturn: 9.98,
    panels: 1,
  })

  const mRates = new Map()
  mRates.set(1, { ppk: 4800, dc: 0.26 })
  mRates.set(2, { ppk: 4750, dc: 0.52 })
  mRates.set(3, { ppk: 4700, dc: 0.78 })
  mRates.set(4, { ppk: 4650, dc: 1.04 })
  mRates.set(5, { ppk: 4600, dc: 1.3 })
  mRates.set(6, { ppk: 4500, dc: 1.56 })
  mRates.set(7, { ppk: 4495, dc: 1.82 })
  mRates.set(8, { ppk: 4490, dc: 2.08 })
  mRates.set(9, { ppk: 4485, dc: 2.34 })
  mRates.set(10, { ppk: 4480, dc: 2.6 })
  mRates.set(11, { ppk: 4475, dc: 2.86 })
  mRates.set(12, { ppk: 4470, dc: 3.12 })
  mRates.set(13, { ppk: 4465, dc: 3.38 })
  mRates.set(14, { ppk: 4460, dc: 3.64 })
  mRates.set(15, { ppk: 4455, dc: 3.9 })
  mRates.set(16, { ppk: 4450, dc: 4.16 })
  mRates.set(17, { ppk: 4445, dc: 4.42 })
  mRates.set(18, { ppk: 4440, dc: 4.68 })
  mRates.set(19, { ppk: 4435, dc: 4.94 })
  mRates.set(20, { ppk: 4430, dc: 5.2 })

  const calculateReturn = panels => {
    let dc = mRates.get(panels).dc
    let ppk = mRates.get(panels).ppk
    let price = (ppk * dc).toFixed(2)
    let dollarReturn = dc * 1400 * 0.4275 * (1 - 0.2)
    let percentReturn = (dollarReturn / price) * 100
    let kWp = (price / ppk).toFixed(2)
    console.log(dc, ppk, price, dollarReturn, percentReturn, kWp)
    setState(state => ({
      ...state,
      price,
      dollarReturn,
      percentReturn,
      kWp,
    }))
  }

  function separator(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2')
    return x
  }

  const onSliderChange = value => {
    setState(state => ({
      ...state,
      panels: value,
    }))
    calculateReturn(value)
  }

  return (
    <>
      <div className="paper">
        <div className="card">
          <div className="cardHeader">
            <FontAwesomeIcon icon={faDollarSign} className="faIcon" />
            <h5 className="title">Buy Digital Solar!</h5>
          </div>
          <div className="content">
            <p className="amount">Selected number of panels: {state.panels}</p>
            <p className="amount">kWp: {state.kWp}</p>
            <p className="amount">Price: ${separator(state.price)}</p>
            <Slider
              value={state.panels}
              onChange={onSliderChange}
              min={1}
              max={20}
              step={1}
              handleStyle={{
                borderColor: '#1957A6',
                width: 24,
                border: [2, 'solid', 'currentColor'],
                height: 24,
                display: 'flex',
                outline: 0,
                position: 'absolute',
                boxSizing: 'border-box',
                marginTop: -10,
                alignItems: 'center',
                borderRadius: '50%',
                justifyContent: 'center',
                backgroundcolor: '#fff',
              }}
              trackStyle={{
                height: 8,
                background: '#1957A6',
                color: '#1957A6',
                width: '100%',
                cursor: 'pointer',
                position: 'absolute',
                boxSizing: 'border-box',
                touchAction: 'none',
              }}
            />
          </div>

          <div className="content">
            <p className="amount">
              Estimated Monthly Solar Credits: $
              {(state.dollarReturn / 12).toFixed(2)}
            </p>
            <p className="amount">
              Estimated Year 1 Solar Credits: $
              {separator(state.dollarReturn.toFixed(2))}
            </p>
            <p className="amount">
              Estimated Return: {state.percentReturn.toFixed(2)}%
            </p>
            <p className="disclaimer">
              *Solar credits and returns can vary every month and our
              projections are meant to be illustrative and based on the purchase
              of digital solar panels for 25 years, with your funds being used
              to purchase panels for the solar pool.
            </p>
          </div>
          <div className="btn-wrap">
            <a href="https://app.cloud.solar/get-started/">
              <button className="button">GET STARTED</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
