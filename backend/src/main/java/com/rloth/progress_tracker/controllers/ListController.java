package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.ActivitiesList;
import com.rloth.progress_tracker.services.ListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ListController {

    private final ListService listService;

    @GetMapping("/lists")
    public List<ActivitiesList> getLists(){
        return listService.getLists();
    }
}
