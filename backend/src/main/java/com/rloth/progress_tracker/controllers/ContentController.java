package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.services.ContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ContentController {

    private final ContentService contentService;

    @GetMapping("/content")
    public List<Content> getContent() {
        return contentService.getContent();
    }



    @GetMapping("/content/{id}")
    public List<Content> getActivityContent(@PathVariable long id) {
        return contentService.getActivityContent(id);
    }

    @PostMapping("/content")
    public Content addContent(@RequestBody Content content) {
        return contentService.addContent(content);
    }

    @PutMapping("/content")
    public Content editContent(@RequestBody Content content) {
        return contentService.editContent(content);
    }

    @DeleteMapping("/content/{id}")
    public void deleteContent(@PathVariable long id) {
        contentService.deleteContent(id);
    }
}
