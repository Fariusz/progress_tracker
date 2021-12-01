package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.controllers.dtos.UserDto;
import com.rloth.progress_tracker.models.User;
import com.rloth.progress_tracker.repos.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoginService {

    @Autowired
    UserRepository userRepository;

    public boolean emailExist(UserDto user){
        return (userRepository.findByEmail(user.getEmail()) != null) ? true : false;
    }

    public User register(UserDto accountDto){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        User user = new User();
        user.setFirstName(accountDto.getFirstName());
        user.setLastName(accountDto.getLastName());
        user.setUsername(accountDto.getUsername());
        user.setPassword("{bcrypt}" + passwordEncoder.encode(accountDto.getPassword()));
        user.setEmail(accountDto.getEmail());
        user.setEnabled(true);
        return userRepository.save(user);
    }

    public List<User> listUsers() {
        return userRepository.findAll();
    }
}
