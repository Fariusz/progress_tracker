package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.config.LoginCredentials;
import com.rloth.progress_tracker.controllers.dtos.UserDto;
import com.rloth.progress_tracker.models.User;
import com.rloth.progress_tracker.repos.UserRepository;
import com.rloth.progress_tracker.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.List;

@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials credentials){
    }

    @PostMapping("/register")
    public String processRegister(UserDto accountDto){

        if (loginService.emailExist(accountDto)) {
            return ("There is an account with that email adress: " + accountDto.getEmail());
        }
        else if (!loginService.emailExist(accountDto)){
            loginService.register(accountDto);
            return "register_success";
        }
        else { return "error";}
    }

    @GetMapping("/users")
    public List<User> listUsers() {
        return loginService.listUsers();
    }
}
