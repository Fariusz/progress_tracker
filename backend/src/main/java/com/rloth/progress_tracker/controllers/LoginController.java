package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.config.LoginCredentials;
import com.rloth.progress_tracker.controllers.dtos.UserDto;
import com.rloth.progress_tracker.models.User;
import com.rloth.progress_tracker.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials credentials){
    }

    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> processRegister(@RequestBody UserDto accountDto){

        if (loginService.emailExist(accountDto)) {
            return new ResponseEntity<>("{\n" + "  \"message\" : \"EMAIL_EXISTS\"\n" + "}\n", HttpStatus.BAD_REQUEST);
        }
        else if (loginService.usernameExist(accountDto)) {
            return new ResponseEntity<>("{\n" + "  \"message\" : \"USERNAME_EXISTS\"\n" + "}\n", HttpStatus.BAD_REQUEST);
        }
        else if (!loginService.emailExist(accountDto) || !loginService.usernameExist(accountDto)){
            loginService.register(accountDto);
            return new ResponseEntity<>("{\n" + "  \"message\" : \"REGISTER_SUCCESS\"\n" + "}\n", HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>("{\n" + "  \"message\" : \"UNKNOWN\"\n" + "}\n", HttpStatus.NOT_IMPLEMENTED);
        }
    }

    @GetMapping("/users")
    public List<User> listUsers() {
        return loginService.listUsers();
    }
}
