package com.vich_mat.services;

import com.vich_mat.entities.Result;
import com.vich_mat.payload.UserDataRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserDataService {


    public Result calculate(@RequestBody UserDataRequest request) {
        return null;
    }
}
