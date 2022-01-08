package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.services.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ContentController {

    private final ContentService service;

    @GetMapping("/content")
    public List<Content> getContent(){
        return service.getContent();
    }

}
