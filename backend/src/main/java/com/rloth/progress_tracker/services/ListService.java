package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.ActivitiesList;
import com.rloth.progress_tracker.repos.ActivityRepository;
import com.rloth.progress_tracker.repos.ListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ListService {

    private final ListRepository listRepository;

    public List<ActivitiesList> getLists() {
        return listRepository.findAll();
    }
}
