package com.rloth.progress_tracker.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    String HelloWorld(){
        return "Hello there!";
    }
}
