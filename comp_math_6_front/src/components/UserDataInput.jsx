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
                    <label for="first"> func1 </label>
               </div>
                <div className='flex'>
                    <input type="radio" id="second" name="function"
                           checked={ functionNum === '2'}
                    value="2" onChange={handleRadioChange}/>
                    <label for="second"> func 2</label>
                </div>
                <div className='flex'>
                    <input type="radio" id="third" name="function"
                           checked={ functionNum === '3'}
                    value="3" onChange={handleRadioChange}/>
                    <label for="third"> func 3</label>
                </div>

            </div>
        </div>
    );
};

export default UserDataInput;