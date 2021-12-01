package com.rloth.progress_tracker.controllers.dtos;

import lombok.*;

@Getter
@Setter
public class UserDto {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String username;

    public UserDto(String email, String password, String firstName, String lastName, String username) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }
}
