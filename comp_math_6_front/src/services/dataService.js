import {getDouble, getXArray, getYArray} from "../util/validator";
import axios from "axios";

const API_DATA_URL = "http://localhost:8082/vichka";

export async function sendData(functionNumber, y0, x0, xn, h, eps){
    let functionNum = getDouble(functionNumber);
    y0 = getDouble(y0);
    x0 = getDouble(x0);
    xn = getDouble(xn);
    h = getDouble(h);
    eps = getDouble(eps);
    return await axios.post(API_DATA_URL + "/calculate", {
        functionNumber : functionNum,
        y0 : y0,
        x0: x0,
        xn : xn,
        h : h,
        eps : eps,
    });
}