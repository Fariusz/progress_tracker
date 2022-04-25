package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.ActivitiesList;
import com.rloth.progress_tracker.models.Activity;
import com.rloth.progress_tracker.services.ListService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ListController {

    private final ListService listService;

    @GetMapping("/lists")
    public List<ActivitiesList> getLists(){
        return listService.getLists();
    }

    @GetMapping("/userLists")
    public List<ActivitiesList> getUserLists(@AuthenticationPrincipal String username) {
        return listService.getUserLists(username);
    }

    @PostMapping("/list")
    public ActivitiesList addList(@RequestBody ActivitiesList list, @AuthenticationPrincipal String username) {
        return listService.addList(list, username);
    }

    @PutMapping("/list")
    public ActivitiesList editList(@RequestBody ActivitiesList list) {
        return listService.editList(list);
    }

    @DeleteMapping("/list/{id}")
    public void deleteList(@PathVariable long id) {
        listService.deleteList(id);
    }

}
