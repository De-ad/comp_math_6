package com.vich_mat.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Result {

    ArrayList<Double> eulerF;
    ArrayList<Double> eulerY;
    ArrayList<Double> modifiedEuler;
    ArrayList<Double> miln;

}
