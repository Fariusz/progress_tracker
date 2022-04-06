package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.Image;
import com.rloth.progress_tracker.repos.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.Optional;

@RestController
public class ImageController {

    @Autowired
    ImageRepository imageRepository;

    @PostMapping("/upload")
    Long uploadImage(@RequestParam MultipartFile multipartImage) throws Exception{
        Image dbImage = new Image();
        dbImage.setName(multipartImage.getName());
        dbImage.setPicture(multipartImage.getBytes());
        return imageRepository.save(dbImage).getId();
    }

    @GetMapping(value = "/image/{imageId}", produces = MediaType.IMAGE_JPEG_VALUE)
    Resource downloadImage(@PathVariable Long imageId){
        byte[] image = imageRepository.findById(imageId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)).getPicture();

        return new ByteArrayResource(image);
    }
}
