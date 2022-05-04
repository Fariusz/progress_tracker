package com.rloth.progress_tracker.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long listId;
    private String activityName;
    private long authorId;
    private LocalDateTime created;

    //Relacja jeden (Activity) do wielu (Content)
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "activityId", updatable = false, insertable = false)
    private List<Content> content;
}
