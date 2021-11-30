package com.rloth.progress_tracker.controllers.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class HelloDto {

    private String message;
    private Status status;

    public enum Status {
        FAIL,
        SUCCESS
    }
}
