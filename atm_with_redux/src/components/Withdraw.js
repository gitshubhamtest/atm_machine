import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Withdraw.css"

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  // const atm = useSelector((state) => state.atmData.atm);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "WITHDRAW",
      payload: amount
    });
    setAmount("");
  };

  const onEnterAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
    <div className="main-withdraw">
      <h3>Withdraw</h3>
      <div className="main-divwith">
      <form onSubmit={onSubmit}>
          <div className="grid-div" >
          <div>
              <small>Withdraw amount</small>
              </div>
        <div className="amount-div">
          <input type="number" placeholder="amount" onChange={onEnterAmount} value={amount}  className="withdraw-input"/>
        </div>

        <div>
          <input type="submit" name="add" value="withdraw" className="withdraw-button" />
        </div>
        </div>
      </form>
      </div>
      </div>
    </>
  );
};

export default Withdraw;
