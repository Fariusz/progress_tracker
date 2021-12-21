package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.controllers.dtos.ActivityDto;
import com.rloth.progress_tracker.controllers.mappers.ActivityDtoMapper;
import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.services.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.rloth.progress_tracker.controllers.mappers.ActivityDtoMapper.mapToActivityDto;

@RestController
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService service;

    @GetMapping("/activities")
    public List<Activity> getAllActivities(@AuthenticationPrincipal UsernamePasswordAuthenticationToken user){
        return service.getActivities();
    }

    @GetMapping("/activities/pageable")
    public List<ActivityDto> getActivitiesPageable(@RequestParam(required = false) Integer page, Sort.Direction sort){
        int pageNumber = page != null && page > 0 ? page: 1;
        Sort.Direction sortDirection = sort != null ? sort : Sort.Direction.ASC;
        return ActivityDtoMapper.mapToActivityDto (service.getActivitiesPageable(pageNumber - 1, sortDirection));
    }

    @GetMapping("/activities/pageable/content")
    public List<Activity> getActivitiesPageableWithContent(@RequestParam(required = false) Integer page, Sort.Direction sort){
        int pageNumber = page != null && page > 0 ? page: 1;
        Sort.Direction sortDirection = sort != null ? sort : Sort.Direction.ASC;
        return service.getActivitiesWithContent(pageNumber - 1, sortDirection);
    }

    @GetMapping("/activities/{id}")
    public Activity getActivityById(@PathVariable long id) {
        return service.getActivity(id);
    }

    @GetMapping("/findAllByActivityName/{activityName}")
    public List<Activity> getActivityByName(@PathVariable("activityName") String name) {
        return service.findAllByActivityName(name);
    }

    @PostMapping("/activites")
    public Activity addActivity(@RequestBody Activity activity){
        return service.addActivity(activity);
    }

    @PutMapping("/activities")
    public Activity editActivity(@RequestBody Activity activity){
        return service.editActivity(activity);
    }

    @DeleteMapping("/activities/{id}")
    public void deleteActivity(@PathVariable long id){
        service.deleteActivity(id);
    }
}
