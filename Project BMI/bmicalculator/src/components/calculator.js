import "./calculator.css";
import React, { useState } from "react";
import  healthyimage from '../images/healthy.png';
import  Overweightimage from '../images/overweight.png';
import underweight from '../images/underweight.png';

function Calculator() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [ans, setAns] = useState();
  let a=ans;
  function Subm(e) {
    e.preventDefault();
  }
  function Weig(e) {
    setWeight(e.target.value);
  }
  function Heig(e) {
    setHeight(e.target.value);
  }
  function Calculate() {
    setAns(weight/(height*height));
  }
  function reload(){
    window.location.reload()

  }
  return (
    <>
      <div className="Div">
        <h2 style={{ textAlign: "center", color: "lightblue",fontWeight:"bolder" }}>
          BMI Calculator
        </h2>
        <form onSubmit={Subm}>
          <div style={{ margin: "auto", marginLeft: "20px" }}>
            <label style={{ marginLeft: "0px" }}>Weight(in kg)</label>
            <input
              type="text"
              placeholder="Enter Your Weight"
              className="input"
              value={weight}
              onChange={Weig}
            />
            <br />
            <label>Height(in m)</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Height"
              className="input"
              value={height}
              onChange={Heig}
            />
            <button
              type="submit"
              style={{
                marginLeft: "5px",
                marginTop: "10px",
                cursor: "pointer",
                border: "1px solid red",
                borderRadius: "8px",
                backgroundColor: "#dd7973",
                height: "40px",
                width: "200px",
              }}
              onClick={Calculate}
            >
              Submit
            </button>
            <br />
            <button
              type="submit"
              style={{
                marginLeft: "5px",
                marginTop: "10px",
                cursor: "pointer",
                border: "1px solid blue",
                borderRadius: "8px",
                backgroundColor: "#4681f4",
                height: "40px",
                width: "200px",
              }}
              onClick={reload}
            >
              Reload
            </button>
          </div>

          <div style={{ textAlign: "center",marginTop:"0px" }}>
            <h3>Your BMI is: {ans}</h3>
           

            {a < 18.5 ? (
              <div><p>You are Underweight</p>
                 <img src={underweight} alt="Underweight" style={{height:'150px'}} />
              </div>
              
            ) : a >= 18.5 && a < 25.0 ? (
              <div><p>You are Normal</p>
                 <img src={healthyimage} alt="Normal" style={{height:'150px'}} />
              </div>
            ) : a >= 25.0 && a < 40 ? (
              <div>
                <p>You are Overweight</p>
                <img src={Overweightimage} alt="Overweight" style={{height:'150px'}} />
                </div>
            ) : a>= 40 ?(
              <div><p>You are Obese</p>
              <img src={Overweightimage} alt="Obese" style={{height:'150px'}} />
              </div>
            ): (
              <img src="https://cdn-icons-gif.flaticon.com/10968/10968080.gif" style={{height:"150px",width:"150px"}}/>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Calculator;
