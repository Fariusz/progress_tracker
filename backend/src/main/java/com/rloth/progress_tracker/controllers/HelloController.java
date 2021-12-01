package com.rloth.progress_tracker.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    ResponseEntity HelloWorld() {
        return ResponseEntity.ok("Hello");
    }
}

