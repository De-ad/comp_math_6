import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setDots} from "../store/slices/userDataSlice";
import {setError} from "../store/slices/errorSlice";

const UserDataInput = () => {
    const dispatch = useDispatch();
    const [functionNum, setFunctionNum] = useState("1");

    const handleRadioChange = (e) => {
        setFunctionNum(e.target.value);
    }


    return (
        <div>
            <div className="grid">
               <div className='flex'>
                    <input type="radio" id="first"  name="function"
                           checked={ functionNum === '1'}
                    value="1" onChange={handleRadioChange}/>
                    <label for="first"> y' = y + (1 + x)y^2 </label>
               </div>
                <div className='flex'>
                    <input type="radio" id="second" name="function"
                           checked={ functionNum === '2'}
                    value="2" onChange={handleRadioChange}/>
                    <label for="second"> (x + y)y' + y = 0</label>
                </div>
                <div className='flex'>
                    <input type="radio" id="third" name="function"
                           checked={ functionNum === '3'}
                    value="3" onChange={handleRadioChange}/>
                    <label for="third"> y^2 + x^2y' = xyy'</label>
                </div>
                <div>
                    y(x0): <input type='text'/>
                </div>
                <div>
                    x_0: <input type='text'/>
                </div>
                <div>
                    x_n: <input type='text'/>
                </div>
                <div>
                    h: <input type='text'/>
                </div>
                <div>
                    eps: <input type='text'/>
                </div>
            </div>
        </div>
    );
};

export default UserDataInput;