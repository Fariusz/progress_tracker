package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.repos.ActivityRepository;
import com.rloth.progress_tracker.repos.ContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private static final int PAGE_SIZE = 20;

    private final ActivityRepository activityRepository;
    private final ContentRepository contentRepository;

    public List<Activity> getActivities() {
        return activityRepository.findAllActivities();
    }

    public List<Activity> getActivitiesPageable(int page, Sort.Direction sort) {
        return activityRepository.findAllActivitiesPageable
                (PageRequest.of(page, PAGE_SIZE, Sort.by(sort, "id")
                        /* Sort.by(Sort.Order.asc("id"), Sort.Order.desc(("created"))) */));
    }

    public Activity getActivity(long id) {
        return activityRepository.findById(id)
                .orElseThrow();
    }

    public List<Activity> findAllByActivityName(String name) {
        return activityRepository.findAllByActivityName(name);
    }

    public List<Activity> getActivitiesWithContent(int page, Sort.Direction sort) {
        List<Activity> allActivities = activityRepository.findAllActivitiesPageable(PageRequest.of(page, PAGE_SIZE, Sort.by(sort, "id")));
        List<Long> ids = allActivities.stream()
                .map(Activity::getId)
                .collect(Collectors.toList());
        List<Content> contents = contentRepository.findAllByActivityIdIn(ids);
        allActivities.forEach(activity -> activity.setContent(extractContents(contents, activity.getId())));
        return allActivities;
    }

    private List<Content> extractContents(List<Content> contents, long id) {
        return contents.stream()
                .filter(content -> content.getActivityId() == id)
                .collect(Collectors.toList());
    }
}
