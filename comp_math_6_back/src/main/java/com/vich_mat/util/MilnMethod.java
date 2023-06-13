package com.vich_mat.util;

import com.vich_mat.entities.Result;
import com.vich_mat.entities.UserData;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class MilnMethod {

    double f_1;
    double f_2;
    double f_3;
    double f_4;
    double y_4;
    double y_2;
    double y_3;
    double h;

    ArrayList<Double> xArray;
    ArrayList<Double> yArray;
    ArrayList<Double> fArray;
    double eps;


    private void prepare(UserData userData, Result result){
        eps = userData.getEps();

        xArray = userData.getXArray();
        h = userData.getH();
        yArray = new ArrayList<>();
        fArray = new ArrayList<>();
        for (int i = 0; i < 4; i++){
            yArray.add(result.getModifiedEulerY().get(i));
            fArray.add(result.getModifiedEulerF().get(i));
        }
        fArray.add(result.getModifiedEulerF().get(4));
    }

    public void calculate(UserData userData, Result result){

        prepare(userData, result);
        int i = 0;
        while (i < xArray.size() - 4){
            y_4 = yArray.get(i);
            y_2 = yArray.get(i+2);
            f_1 = fArray.get(i+3);
            f_2 = fArray.get(i+2);
            f_3 = fArray.get(i+1);
//            predict y
            double y_pred = predictY(y_4, f_3, f_2, f_1);
            double x = xArray.get(i);
//            predict f
            double f_pred = userData.calculateFunction(userData.getFunctionNumber(), x, y_pred);
//            correct while eps is enough
            double y_corr = correctY(y_2, f_2, f_1, f_pred );
            while (Math.abs(y_pred - y_corr) > eps){
                y_pred = y_corr;
                 f_pred = userData.calculateFunction(userData.getFunctionNumber(), x, y_pred);
                 y_corr = correctY(y_2, f_2, f_1, f_pred );
            }
            yArray.add(y_corr);
            fArray.add(userData.calculateFunction(userData.getFunctionNumber(), x, y_corr));
            i++;
        }
        result.setMilnF(fArray);
        result.setMilnY(yArray);

    }

    public double predictY(double y_4, double f_3, double f_2, double f_1){
        return y_4 + (4*h/3) * (2* f_3 - f_2 + 2* f_1);
    }

    public double correctY(double y_2, double f_2, double f_1, double f_predict ){
        return y_2 + (h/3) * (f_2 + 4 * f_1 + f_predict);
    }
}
