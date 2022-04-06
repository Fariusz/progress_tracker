package com.rloth.progress_tracker.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private long author_id;
    private LocalDateTime created;
    @Lob
    private byte[] picture;
}
