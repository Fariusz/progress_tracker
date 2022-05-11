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

@RestController
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    @GetMapping("/userActivities")
    public List<Activity> getUserActivities(@AuthenticationPrincipal String username) {
        return activityService.getUserActivities(username);
    }

    @GetMapping("/userActivitiesByListId/{id}")
    public List<Activity> userActivitiesByListId(@PathVariable long id) {
        return activityService.userActivitiesByListId(id);
    }

    @GetMapping("/userActivities/pageable")
    public List<Activity> getUserActivitiesPageable(@AuthenticationPrincipal String username, @RequestParam(required = false) Integer page, @RequestParam(required = false) Integer pageSize, Sort.Direction sort) {

        int pageNumber = page != null && page > 0 ? page : 1;
        Sort.Direction sortDirection = sort != null ? sort : Sort.Direction.ASC;
        return activityService.getUserActivitiesPageable(username, pageNumber - 1, pageSize, sortDirection);
    }

    @GetMapping("/activities")
    public List<Activity> getAllActivities(@AuthenticationPrincipal UsernamePasswordAuthenticationToken user) {
        return activityService.getActivities();
    }

    @GetMapping("/activities/pageable")
    public List<ActivityDto> getActivitiesPageable(@RequestParam(required = false) Integer page, Sort.Direction sort) {
        int pageNumber = page != null && page > 0 ? page : 1;
        Sort.Direction sortDirection = sort != null ? sort : Sort.Direction.ASC;
        return ActivityDtoMapper.mapToActivityDto(activityService.getActivitiesPageable(pageNumber - 1, sortDirection));
    }

    @GetMapping("/activities/pageable/content")
    public List<Activity> getActivitiesPageableWithContent(@RequestParam(required = false) Integer page, Sort.Direction sort) {
        int pageNumber = page != null && page > 0 ? page : 1;
        Sort.Direction sortDirection = sort != null ? sort : Sort.Direction.ASC;
        return activityService.getActivitiesWithContent(pageNumber - 1, sortDirection);
    }

    @GetMapping("/activities/{id}")
    public Activity getActivityById(@PathVariable long id) {
        return activityService.getActivity(id);
    }

    @GetMapping("/findAllByActivityName/{activityName}")
    public List<Activity> getActivityByName(@PathVariable("activityName") String name) {
        return activityService.findAllByActivityName(name);
    }

    @PostMapping("/activities")
    public Activity addActivity(@RequestBody Activity activity, @AuthenticationPrincipal String username) {
        return activityService.addActivity(activity, username);
    }

    @PutMapping("/activities")
    public Activity editActivity(@RequestBody Activity activity) {
        return activityService.editActivity(activity);
    }

    @DeleteMapping("/activities/{id}")
    public void deleteActivity(@PathVariable long id) {
        activityService.deleteActivity(id);
    }


}
