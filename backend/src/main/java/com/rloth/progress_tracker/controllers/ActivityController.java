package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.controllers.dtos.ActivityDto;
import com.rloth.progress_tracker.controllers.mappers.ActivityDtoMapper;
import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.services.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.rloth.progress_tracker.controllers.mappers.ActivityDtoMapper.mapToActivityDto;

@RestController
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService service;

    @GetMapping("/activities/all")
    public List<Activity> getActivities(){ return service.getActivities(); }

    @GetMapping("/activities/pageable")
    public List<ActivityDto> getActivitiesPageable(@RequestParam(required = false) int page, Sort.Direction sort){
        int pageNumber = page > 0 ? page: 1;
        return ActivityDtoMapper.mapToActivityDto (service.getActivitiesPageable(pageNumber - 1, sort));
    }

    @GetMapping("/activities/pageable/content")
    public List<Activity> getActivitiesWithContent(@RequestParam(required = false) int page, Sort.Direction sort){
        int pageNumber = page > 0 ? page: 1;
        return service.getActivitiesWithContent(pageNumber - 1, sort);
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
