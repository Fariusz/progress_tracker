package com.rloth.progress_tracker.repos;

import com.rloth.progress_tracker.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {

}
