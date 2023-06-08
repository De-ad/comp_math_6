package com.vich_mat.controllers;

import com.vich_mat.payload.ErrorResponse;
import com.vich_mat.payload.UserDataRequest;
import com.vich_mat.services.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/vichka")
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class DataController {

    @Autowired
    UserDataService userDataService;

    @PostMapping(value = "/calculate")
    public ResponseEntity<Object> getData(@RequestBody UserDataRequest userDataRequest){
        try{
            return ResponseEntity.ok(userDataService.calculate(userDataRequest));
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse("unknown exception in controller"));
        }

    }


}
