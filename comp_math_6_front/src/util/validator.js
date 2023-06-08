import {isNumber} from "chart.js/helpers";

export const getDouble = (number) => {
    if (isNaN(number) || !isNumber(number)) {
        return;
    }
    number = parseFloat(number.replace(/,/g, "."));
    return number;
}
