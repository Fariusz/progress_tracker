package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Content;
import com.rloth.progress_tracker.repos.ContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContentService {

    private final ContentRepository contentRepository;

    public List<Content> getContent() {
        return contentRepository.findAll();
    }

    public List<Content> getActivityContent(Long id) {
        return contentRepository.findAllByActivityIdIn(Collections.singletonList(id));
    }

    public Content addContent(Content content) {

        return contentRepository.save(content);
    }

    public void deleteContent(long id) {
        contentRepository.deleteById(id);
    }

    @Transactional
    public Content editContent(Content content) {
        Content contentEdited = contentRepository.findById(content.getId()).orElseThrow();
        contentEdited.setContent(content.getContent());
        contentEdited.setCreated(content.getCreated());
        contentEdited.setRepetitions(content.getRepetitions());
        return contentEdited;
    }
}