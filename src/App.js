import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber} from "./actions/index";
import { mulNumber, divNumber } from "./actions/index";
const App = ()=>{
  const myState = useSelector((state) => state.changeTheNumber);
  const mulDivState = useSelector((state) => state.multiplyTheNumber)
  const dispatch = useDispatch();

  return (<>
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 mx-auto text-center">
            <h3>Increment/Decrement Counter</h3>
            <h5>Using React & Redux</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-7 mx-auto">
            <div className="input-group mb-3 quantity">
              <button className="btn btn-outline-secondary quanity_minus" type="button" onClick={()=>dispatch(decNumber())} id="button-addon2" title="Decrement">-</button>
              <input type="text" className="form-control quantity_input text-center" name="quantity" value={myState} />
              <button className="btn btn-outline-secondary quanity_plus" type="button" onClick={()=>dispatch(incNumber(1))} id="button-addon2" title="Increment">+</button>
            </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-7 mx-auto text-center">
            <h3>Multiplication/Division Counter</h3>
            <h5>Using React & Redux</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-7 mx-auto">
            <div className="input-group mb-3 quantity">
              <button className="btn btn-outline-secondary quanity_minus" type="button" onClick={()=>dispatch(divNumber())} id="button-addon2" title="Decrement">/</button>
              <input type="text" className="form-control quantity_input text-center" name="quantity" value={mulDivState} />
              <button className="btn btn-outline-secondary quanity_plus" type="button" onClick={()=>dispatch(mulNumber(5))} id="button-addon2" title="Increment">*</button>
            </div>
        </div>
      </div>
    </div>
  </>)
}

export default App;
