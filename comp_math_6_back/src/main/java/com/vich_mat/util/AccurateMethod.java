package com.vich_mat.util;

import com.vich_mat.entities.Result;
import com.vich_mat.entities.UserData;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class AccurateMethod {

    ArrayList<Double> fArray;
    int functionNum;

    public void calculate(UserData userData, Result result){
        this.functionNum = userData.getFunctionNumber();
        fArray = new ArrayList<>();
        ArrayList<Double> xArray = userData.getXArray();
        for (int i = 0; i < xArray.size(); i++){
            fArray.add(getFValue(xArray.get(i), userData.getX0(), userData.getY0()));
        }
        result.setAccurate(fArray);
        result.setXArray(xArray);
    }

    private double getFValue(double x, double x0, double y0){
        double c = calculateC(x0, y0);
        switch (functionNum){
            case 1:
                return - Math.pow(Math.E, x)/ (Math.pow(Math.E, x) * x + c) ;
            case 2:
                return c * x + 1/x;
            default:
                return c * (Math.pow(Math.E, x)) - x - 5 ;
        }
    }

    private double calculateC(double x0, double y0){
        switch (functionNum){
            case 1:
                return -Math.exp(x0) / y0 - Math.exp(x0) * x0;
            case 2:
                return (y0 + x0 + 5) / Math.exp(x0);
            default:
                return (y0 * x0 - 1) / x0 / x0;
        }
    }

}
