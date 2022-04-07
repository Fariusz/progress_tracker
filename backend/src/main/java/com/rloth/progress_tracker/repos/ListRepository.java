package com.rloth.progress_tracker.repos;

import com.rloth.progress_tracker.models.ActivitiesList;
import com.rloth.progress_tracker.models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ListRepository extends JpaRepository<ActivitiesList, Long> {
    @Query("select a from ActivitiesList a where authorId = ?1")
    List<ActivitiesList> findListsByUserId(Long userId);
}
