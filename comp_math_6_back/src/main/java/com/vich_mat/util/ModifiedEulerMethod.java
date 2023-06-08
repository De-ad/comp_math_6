package com.vich_mat.util;

import com.vich_mat.entities.Result;
import com.vich_mat.entities.UserData;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class ModifiedEulerMethod {


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
//            x_(i+1)
            double x_1 = xArray.get(i+1);
            double f = userData.calculateFunction(functionNum, xArray.get(i),  yArray.get(i));
//            y_i + h * f(xi, yi)
            double sumForF = yArray.get(i) + h * f;
            double fxi_1yh = userData.calculateFunction(functionNum, x_1, sumForF);

            yArray.add(calculateNextY(yArray.get(i), f, fxi_1yh));
            fArray.add(userData.calculateFunction(functionNum, xArray.get(i+1),  yArray.get(i+1)));

        }

        result.setModifiedEulerF(fArray);
        result.setModifiedEulerY(yArray);
    }


    private double calculateNextY(double y, double fxy, double fxi_1yh){
        return y + (h/2)*(fxy + fxi_1yh);
    }
}
