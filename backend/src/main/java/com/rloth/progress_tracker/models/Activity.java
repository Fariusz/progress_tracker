package com.rloth.progress_tracker.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Activity {
    @Id
    private Long id;
    private Long userId;
    private String activityName;
    private LocalDateTime created;

    //Relacja jeden (Activity) do wielu (Content)
    @OneToMany
    @JoinColumn(name = "activityId")
    private List<Content> content;
}
