package com.vich_mat.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
public class UserData {

    private int functionNumber;
    private double y0;
    private double x0;
    private double xn;
    private double h;
    private double eps;
    private ArrayList<Double> xArray = new ArrayList<>();

    public UserData(int functionNumber, double initialCondition, double x0, double xn, double h, double eps) {
        this.functionNumber = functionNumber;
        this.y0 = initialCondition;
        this.x0 = x0;
        this.xn = xn;
        this.h = h;
        this.eps = eps;
    }

    public void fillXArray(){
        xArray.add(x0);
        double size = Math.floor((xn - x0)/h);
        for(int i = 0; i < size; i++){
            xArray.add(x0 + (i+1) * h);
        }
        System.out.println(xArray);
    }




    public double calculateFunction(int functionNumber, double x, double y){
        switch (functionNumber) {
            case 1 -> {
                return y + (1 + x) * Math.pow(y, 2);
            }
            case 2 -> {
                return Math.pow(y, 2) + 2 * x * y;
            }
            case 3 -> {
                return x / y - Math.log(Math.abs(y));
            }
            default -> {
                return 0;
            }
        }
    }




}
