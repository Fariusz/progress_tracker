package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.repos.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository repository;

    public List<Activity> getActivities(){
        return repository.findAll();
    }

    public Activity getActivity(long id) {
        return repository.findById(id)
                .orElseThrow();
    }
}
