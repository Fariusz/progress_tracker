package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.config.LoginCredentials;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials credentials){
    }

    @GetMapping("/secured")
    public String sercured(){
        return "secured";
    }
}
