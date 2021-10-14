package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.services.ActivityService;
import lombok.RequiredArgsConstructor;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService service;

    @GetMapping("/activities")
    public List<Activity> getActivities(){
        return service.getActivities();
    }

    @GetMapping("/activities/{id}")
    public Activity getActivity(@PathVariable long id) {
        return service.getActivity(id);
    }

    @GetMapping("/findAllByActivityName/{activityName}")
    public List<Activity> findAllByActivityName(@PathVariable("activityName") String name) {
        return service.findAllByActivityName(name);
    }
}
