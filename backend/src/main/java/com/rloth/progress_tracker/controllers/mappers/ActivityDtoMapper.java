package com.rloth.progress_tracker.controllers.mappers;

import com.rloth.progress_tracker.controllers.dtos.ActivityDto;
import com.rloth.progress_tracker.models.Activity;

import java.util.List;
import java.util.stream.Collectors;

public class ActivityDtoMapper {

    private ActivityDtoMapper(){};

    public static List<ActivityDto> mapToActivityDto(List<Activity> activities) {
        return activities.stream()
                .map(activity -> mapToActivityDto(activity))
                .collect(Collectors.toList());
    }

    public static ActivityDto mapToActivityDto(Activity activity){
        return ActivityDto.builder()
                .id(activity.getId())
                .activityName(activity.getActivityName())
                .created(activity.getCreated())
                .build();
    }
}
