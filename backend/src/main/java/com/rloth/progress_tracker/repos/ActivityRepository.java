package com.rloth.progress_tracker.repos;

import com.rloth.progress_tracker.models.Activity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    List<Activity> findAllByActivityName(String activityName);

    @Query("select distinct a from Activity a" + " left join fetch a.content")
    List<Activity> findAllActivities();

    @Query("select distinct a from Activity a" + " left join fetch a.content")
    List<Activity> findAllActivitiesPageable(Pageable page);

    @Query("select a from Activity a where author_id = ?1")
    List<Activity> findActivitiesByUserId(Long id);

    @Query("select a from Activity a where author_id = ?1")
    List<Activity> findActivitiesByUserIdPageable(Long id, Pageable page);


/*
    findAllByActivityName i findActivityWithContent działają w jednakowy sposób XDD

    @Query("select a from Activity a" + " left join fetch a.content" + " where activity_name = :name")
    Activity findActivityWithContent(@Param("name") String name);
*/
/*
    @Query("select a from Activity a where activity_name = ?1")
    List<Activity> findAllByActivityName(String name);
*/
/*
    @Query("select a from Activity a where activity_name = :name")
    List<Activity> findAllByActivityName(@Param("name") String name);
*/


}
