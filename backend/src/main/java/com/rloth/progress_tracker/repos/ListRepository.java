package com.rloth.progress_tracker.repos;

import com.rloth.progress_tracker.models.ActivitiesList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListRepository extends JpaRepository<ActivitiesList, Long> {
}
