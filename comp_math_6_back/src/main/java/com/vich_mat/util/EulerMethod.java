package com.vich_mat.util;


import com.vich_mat.entities.Result;
import com.vich_mat.entities.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



@Component
public class EulerMethod {


    double h;


//    Yi+1 = Yi + hf(Xi, Yi);

    public void calculate(UserData userData, Result result){
        this.h = userData.getH();


    }


    public double calculateNextY(double y, double f){
        return y + h*f;
    }
}
