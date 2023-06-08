import {getDouble, getXArray, getYArray} from "../util/validator";
import axios from "axios";

const API_DATA_URL = "http://localhost:8082/vichka";

export async function sendDots(userData){


    return await axios.post(API_DATA_URL + "/calculate", {

    });
}