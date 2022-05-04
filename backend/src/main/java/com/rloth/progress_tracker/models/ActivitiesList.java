package com.rloth.progress_tracker.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class ActivitiesList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String listName;
    private boolean isTraining;
    private long authorId;
    private LocalDateTime created;

    //Relacja jeden (Activity) do wielu (Content)
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "listId", updatable = false, insertable = false)
    private List<Activity> activities;
}