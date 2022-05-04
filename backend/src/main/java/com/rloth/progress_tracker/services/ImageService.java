package com.rloth.progress_tracker.services;

import com.rloth.progress_tracker.models.Image;
import com.rloth.progress_tracker.repos.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;
    private final LoginService loginService;

    public void uploadFile(MultipartFile file, String username) {
        Image image = new Image();

        try{
            image.setPicture(file.getBytes());
            image.setName(file.getOriginalFilename());
            image.setCreated(LocalDateTime.now());
            image.setAuthorId(loginService.getUserId(username));
            imageRepository.save(image);
        }catch (Exception exception){
            throw new RuntimeException("Could not store the file. Error: " + exception.getMessage());
        }
    }

    public Optional<Image> getFile(Long id){
        return imageRepository.findById(id);
    }

    public void deleteFile(Long id) {
        imageRepository.deleteById(id);
    }
}
