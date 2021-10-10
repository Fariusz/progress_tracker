package com.rloth.progress_tracker.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    String HelloWorld(){
        return "This is REST API of Radosław Loth progress tracker application." +
                "<br>List of available endpoints:<br>";
    }
}
