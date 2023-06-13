import  React from 'react';
import Plot from "react-plotly.js";
import {useSelector} from "react-redux";
import {selectResult} from "../store/slices/resultSlice";

const Graph = () => {
    const result = useSelector(selectResult);

    if(Object.keys(result).length === 0){
        return null;
    }

    const funcEuler = {
        x: result.xArray,
        y: result.eulerY,
        mode: 'markers+lines',
        type: 'scatter',
        marker : {size: 12},
        name: "Euler"
    }

    const funcModifiedEuler = {
        x: result.xArray,
        y: result.modifiedEulerY,
        mode: 'markers+lines',
        type: 'scatter',
        marker : {size: 12},
        name: "modified Euler"
    }

    const funcMiln = {
        x: result.xArray,
        y: result.milnY,
        mode: 'markers+lines',
        type: 'scatter',
        marker : {size: 12},
        name: "Miln"
    }

    const accurate = {x: result.xArray,
        y: result.accurate,
        mode: 'markers+lines',
        type: 'scatter',
        marker : {size: 12},
        name: "accurate"

    }



    return (
        <div>
            <Plot
                data={[funcEuler, funcModifiedEuler, funcMiln, accurate]}
                layout={{width: 1200, height: 700}}>

            </Plot>
        </div>
    );
};

export default Graph;