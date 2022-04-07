package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.repos.ActivityRepository;
import com.rloth.progress_tracker.repos.ContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private static final int PAGE_SIZE = 20;

    private final ActivityRepository activityRepository;
    private final ContentRepository contentRepository;
    private final LoginService loginService;


    public List<Activity> getUserActivities(String username) {
        return activityRepository.findActivitiesByUserId(loginService.getUserId(username));
    }

    public List<Activity> getUserActivitiesPageable(String username, int page, int pageSize, Sort.Direction sort) {
        return activityRepository.findActivitiesByUserIdPageable
                (loginService.getUserId(username), PageRequest.of(page, pageSize, Sort.by(sort, "id")
                        /* Sort.by(Sort.Order.asc("id"), Sort.Order.desc(("created"))) */));
    }

    public List<Activity> getUserActivities(Long id) {
        return activityRepository.findActivitiesByUserId(id);
    }

    @Cacheable(cacheNames = "Activities")
    public List<Activity> getActivities() {
        return activityRepository.findAllActivities();
    }

    public List<Activity> getActivitiesPageable(int page, Sort.Direction sort) {
        return activityRepository.findAllActivitiesPageable
                (PageRequest.of(page, PAGE_SIZE, Sort.by(sort, "id")
                        /* Sort.by(Sort.Order.asc("id"), Sort.Order.desc(("created"))) */));
    }

    @Cacheable(cacheNames = "SingleActivity", key = "#id")
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

    public Activity addActivity(Activity activity, String username) {
        activity.setAuthorId(loginService.getUserId(username));
        return activityRepository.save(activity);
    }

    @Transactional
    @CachePut(cacheNames = "SingleActivity", key = "#result.id")
    public Activity editActivity(Activity activity) {
        Activity activityEdited = activityRepository.findById(activity.getId()).orElseThrow();
        activityEdited.setActivityName(activity.getActivityName());
        activityEdited.setContent(activity.getContent());
        return activityEdited;
    }

    @CacheEvict(cacheNames = "SingleActivity")
    public void deleteActivity(long id) {
        activityRepository.deleteById(id);
    }

    @CacheEvict(cacheNames = "Activities")
    public void clearActivities() {
        //Ta metoda czyści Cache
    }
}
