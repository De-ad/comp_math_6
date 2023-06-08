import  React from 'react';
import Plot from "react-plotly.js";
import {useSelector} from "react-redux";
import {selectResult} from "../store/slices/resultSlice";
import {getXArray, getYArray} from "../util/validator";

const Graph = () => {
    // const result = useSelector(selectResult);

    // if(Object.keys(result).length === 0){
    //     return null;
    // }
    //
    // const func = {
    //     x: xArray,
    //     y: yArray,
    //     mode: 'markers',
    //     type: 'scatter',
    //     marker : {size: 12},
    //     name: "origin"
    // }


    // if (Object.keys(result).length === 0){
    //     return null;
    // }

    return (
        <div>
            <Plot
                data={[]}
                layout={{width: 1200, height: 700}}>

            </Plot>
        </div>
    );
};

export default Graph;