import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setDots} from "../store/slices/userDataSlice";
import {setError} from "../store/slices/errorSlice";
import {getResult} from "../store/slices/resultSlice";

const UserDataInput = () => {
    const dispatch = useDispatch();
    const [functionNumber, setFunctionNumber] = useState("1");
    const[y0, setY0] = useState("");
    const[x0, setX0] = useState("");
    const[xn, setXn] = useState("");
    const[h, setH] = useState("");
    const[eps, setEps] = useState("");

    const handleRadioChange = (e) => {
        setFunctionNumber(e.target.value);
    }

    const sendUserData = (e) => {
        e.preventDefault();
        const data = {functionNumber, y0, x0, xn, h, eps};
        dispatch(getResult(data));
    }


    return (
        <div>
            <div className="grid space-y-3">
               <div className='flex'>
                    <input type="radio" id="first"  name="function"
                           checked={ functionNumber === '1'}
                    value="1" onChange={handleRadioChange}/>
                    <label for="first"> y' = y + (1 + x)y^2 </label>
               </div>
                <div className='flex'>
                    <input type="radio" id="second" name="function"
                           checked={ functionNumber === '2'}
                    value="2" onChange={handleRadioChange}/>
                    <label for="second"> y' = y/x - 2/x^2 </label>
                </div>
                <div className='flex'>
                    <input type="radio" id="third" name="function"
                           checked={ functionNumber === '3'}
                    value="3" onChange={handleRadioChange}/>
                    <label for="third"> y' = x + y + 4</label>
                </div>
                <div>
                    y(x0): <input type='text' onChange={(e) => {setY0(e.target.value)}}/>
                </div>
                <div>
                    x_0: <input type='text' onChange={(e) => {setX0(e.target.value)}}/>
                </div>
                <div>
                    x_n: <input type='text'onChange={(e) => {setXn(e.target.value)}}/>
                </div>
                <div>
                    h: <input type='text' onChange={(e) => {setH(e.target.value)}}/>
                </div>
                <div>
                    eps: <input type='text' onChange={(e) => {setEps(e.target.value)}}/>
                </div>
                <div>
                    <button className="bg-white rounded-lg p-2" onClick={sendUserData}> send </button>
                </div>
            </div>
        </div>
    );
};

export default UserDataInput;