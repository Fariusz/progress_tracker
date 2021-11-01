package com.rloth.progress_tracker.repos;

import com.rloth.progress_tracker.models.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long> {
    List<Content> findAllByActivityIdIn(List<Long> ids);
}
