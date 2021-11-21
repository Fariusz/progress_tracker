package com.rloth.progress_tracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ProgressTrackerApplication {
    public static void main(String[] args) {
        System.out.println("{bcrypt}" + new BCryptPasswordEncoder().encode("test"));
        SpringApplication.run(ProgressTrackerApplication.class, args);
    }
}
