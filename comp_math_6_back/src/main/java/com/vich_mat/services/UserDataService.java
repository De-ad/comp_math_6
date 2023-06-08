package com.vich_mat.services;

import com.vich_mat.entities.Result;
import com.vich_mat.entities.UserData;
import com.vich_mat.payload.UserDataRequest;
import com.vich_mat.util.EulerMethod;
import com.vich_mat.util.MilnMethod;
import com.vich_mat.util.ModifiedEulerMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserDataService {

    @Autowired
    EulerMethod eulerMethod;
    @Autowired
    ModifiedEulerMethod modifiedEulerMethod;
    @Autowired
    MilnMethod milnMethod;

    public Result calculate(@RequestBody UserDataRequest request) {
        UserData userData = new UserData(request.getFunctionNumber(), request.getInitialCondition(), request.getRightEdge(),
                request.getLeftEdge(), request.getH(), request.getEps());
        Result result = new Result();
        eulerMethod.calculate(userData, result);

        return result;
    }
}
