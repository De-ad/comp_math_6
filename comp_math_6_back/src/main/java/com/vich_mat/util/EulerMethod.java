package com.vich_mat.util;


import com.vich_mat.entities.Result;
import com.vich_mat.entities.UserData;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;


@Component
@Setter
public class EulerMethod {


    double h;
    int functionNum;


//    Yi+1 = Yi + hf(Xi, Yi);

    public void calculate(UserData userData, Result result){
        this.h = userData.getH();
        this.functionNum = userData.getFunctionNumber();

        double x0 = userData.getX0();
        double y0 = userData.getY0();
        double f0 = userData.calculateFunction(functionNum, x0, y0);

        ArrayList<Double> xArray = userData.getXArray();
        ArrayList<Double> yArray = new ArrayList<>(xArray.size());
        ArrayList<Double> fArray = new ArrayList<>(xArray.size());

        yArray.add(y0);
        fArray.add(f0);

        for (int i = 0; i < xArray.size() - 1; i++){
            yArray.add(calculateNextY(yArray.get(i), fArray.get(i)));
            fArray.add(userData.calculateFunction(functionNum, xArray.get(i+1), yArray.get(i+1)));
        }

        result.setEulerF(fArray);
        result.setEulerY(yArray);
    }


    public double calculateNextY(double y, double f){
        return y + h*f;
    }
}
