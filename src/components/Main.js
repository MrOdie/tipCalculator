import React from 'react';

const Main = () => {
  return (
    <>
      <div className="tipCalculatorContainer">
        <section className="tipCalculator">

          <form className="calculator">
            <label htmlFor="bill">Enter the Bill Total in order to begin.</label>
            <input id="bill" type="text" />
          </form>
        </section>

      </div>
    </>
  )
}

export default Main;