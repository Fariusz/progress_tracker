package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.controllers.dtos.HelloDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    HelloDto HelloWorld() {
        return new HelloDto("tutaj restapi", HelloDto.Status.SUCCESS);
    }
}

