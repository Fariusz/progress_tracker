package com.rloth.progress_tracker.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Activity {
    @Id
    private Long id;
    private Long user_id;
    private String activityname;
    private LocalDateTime created;
}
