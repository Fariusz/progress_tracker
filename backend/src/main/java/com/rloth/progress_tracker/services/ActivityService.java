package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.repos.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private static final int PAGE_SIZE = 20;

    private final ActivityRepository repository;

    public List<Activity> getActivities(){
        return repository.findAllActivities();
    }

    public List<Activity> getActivitiesPageable(int page){
        return repository.findAllActivitiesPageable(PageRequest.of(page,PAGE_SIZE));
    }

    public Activity getActivity(long id) {
        return repository.findById(id)
                .orElseThrow();
    }

    public List<Activity> findAllByActivityName(String name){
        return repository.findAllByActivityName(name);
    }
}
