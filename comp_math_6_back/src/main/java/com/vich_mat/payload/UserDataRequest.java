package com.vich_mat.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDataRequest {
    int functionNumber;
    double initialCondition;
    double rightEdge;
    double leftEdge;
    double h;
    double eps;

}
