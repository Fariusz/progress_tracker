package com.rloth.progress_tracker.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String activityName;
    private long author_id;
    private LocalDateTime created;

    //Relacja jeden (Activity) do wielu (Content)
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "activityId", updatable = false, insertable = false)
    private List<Content> content;
}
