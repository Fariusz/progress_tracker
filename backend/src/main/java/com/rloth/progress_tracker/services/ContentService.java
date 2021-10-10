package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.repos.ContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContentService {

    private final ContentRepository repository;

    public List<Content> getContent(){
        return repository.findAll();
    }
}