import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Deposite.css'
const Deposite = () => {
  const [curr, setCurr] = useState("1");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();
  const atm = useSelector((state) => state.atmData.atm);

  const onChange = (e) => {
    setCurr(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
     
    
    const data = {
      [curr]: quantity
    };
    if(quantity <= 0){
       alert("Please Enter valid Quntity")
    }
    else{
    dispatch({
      type: "DEPOSITE",
      payload: data
    });
    setCurr("1");
    setQuantity("");
  }
  };

  const onEnterQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
    <div className="main">
         <h3>Deposite</h3>
   <div className="main-div">
    
      <form onSubmit={onSubmit}>
          <div className="sub-div">
              <div>
          <small>Denomination Currency</small>
        <select onChange={onChange} value={curr} className="select-box">
          <option value="1"> Rs.1</option>
          <option value="2">Rs.2</option>
          <option value="5">Rs.5</option>
          <option value="10">Rs.10</option>
          <option value="20">Rs.20</option>
          <option value="50">Rs.50</option>
          <option value="100">Rs.100</option>
          <option value="200">Rs.200</option>
          <option value="500">Rs.500</option>
          <option value="2000">Rs.2000</option>
        </select>
        </div>
        <div >
            <small className="quntity-div" >Quntity</small>
          <input type="number" placeholder="Quntity" onChange={onEnterQuantity} value={quantity} className="quntity-input"/>
        </div>

        <div >
          <input type="submit" name="add" value="ADD" className="add-div"/>
        </div>
        </div>
      </form>
      <p>Available Denomination (currency Notes) </p>
      <ul style={{ listStyle: "none" }}>
        {Object.keys(atm).map((item, index) => (
          <li key={index}>
            {item + " X " + atm[item] + " = " + item * atm[item]}
          </li>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
};

export default Deposite;
