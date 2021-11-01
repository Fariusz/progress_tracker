package com.rloth.progress_tracker.controllers.dtos;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ActivityDto {
    private long id;
    private Long userId;
    private String activityName;
    private LocalDateTime created;
}
