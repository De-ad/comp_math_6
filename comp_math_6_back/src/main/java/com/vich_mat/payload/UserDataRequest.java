package com.vich_mat.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDataRequest {
    int functionNumber;
    double y0;
    double x0;
    double xn;
    double h;
    double eps;

}
