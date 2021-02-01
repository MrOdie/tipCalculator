import React, { useState } from 'react';
import '../assets/scss/main.scss';

const Main = () => {

  const [state, setState] = useState({
    total: "",
    partySize: "",
    service: "",
    totalTip: "",
    tipPP: ""
  });

  const checkInputType = (input) => {
    let isNum, veritas;
    
    isNum = Math.abs(input);
    veritas = true;

    if (isNaN(isNum)) {
      veritas = false;
    }

    return veritas;
  }

  const handleTotal = (event) => {

    let validation = checkInputType(event.target.value)
    if (validation) {
      return
    }
    setState(prevState => ({
      ...prevState,
      total: event.target.value
    }))
  }

  const handleService = (event) => {
    let validation = checkInputType(event.target.value)
    if (validation) {
      return
    }

    setState(prevState => ({
      ...prevState,
      service: event.target.value
    }));
  }

  const handleParty = (event) => {
    let validation = checkInputType(event.target.value)
    if (validation) {
      return
    }

    setState(prevState => ({
      ...prevState,
      partySize: event.target.value
    }))
    console.log(state)

  }

  const genTip = (event) => {
    event.preventDefault();

    let tip, serviceToDecimal, totalTipPP;

    serviceToDecimal = state.service / 100;

    tip = parseFloat(state.total * serviceToDecimal).toFixed(2);
    totalTipPP = parseFloat(tip / state.partySize).toFixed(2);

    setState(prevState => ({
      ...prevState,
      totalTip: tip,
      tipPP: totalTipPP
    }));
  }

  return (
    <>
      <div className="tipCalculatorContainer">
        <section className="tipCalculator">
          <article className="calculator">
            <form className="calculatorForm">
              <legend>Enter the following details in order to accurately calculate your tip.</legend>
              <div id="billDiv" className="contentDiv">
                <label className="label" htmlFor="bill">Total:</label>
                <input className="input" id="bill" type="text" value={state.total} onChange={handleTotal} />
              </div>
              <div id="serviceDiv" className="contentDiv">
                <label className="label" htmlFor="service">Quality of Service:</label>
                <input className="input" type="text" id="bill" value={state.service} onChange={handleService} />
              </div>
              <div id="sizeOfPartyDiv" className="contentDiv">
                <label className="label" htmlFor="partySize">Size of Party:</label>
                <input className="input" type="text" id="partySize" value={state.partySize} onChange={handleParty} />
              </div>
              <input className="submitBtn" type="submit" onClick={genTip} />
            </form>
            {
              state.totalTip !== '' && state.tipPP !== '' ? (
                <div className="results">
                  <p>Tip: ${state.totalTip}</p>
                  <p>Tip per person: ${state.tipPP}</p>
                </div>
              ) : ""
            }
          </article>
        </section>

      </div>
    </>
  )
}

export default Main;