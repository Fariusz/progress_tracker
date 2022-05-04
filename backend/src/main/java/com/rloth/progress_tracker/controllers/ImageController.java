package com.rloth.progress_tracker.controllers;

import com.rloth.progress_tracker.models.Image;
import com.rloth.progress_tracker.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping("uploadFile")
    public ResponseEntity uploadFile(@RequestParam(required = true) MultipartFile file, @AuthenticationPrincipal String username){
        try{
            imageService.uploadFile(file, username);
            return ResponseEntity.status(HttpStatus.OK).body("Uploaded file successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not upload the file: " + file.getOriginalFilename());
        }
    }

    @GetMapping("getFile/{id}")
    public Optional<Image> getFile(@PathVariable Long id){
        return imageService.getFile(id);
    }

    @DeleteMapping("deleteFile/{id]")
    public void deleteFile(@PathVariable Long id){
        imageService.deleteFile(id);
    }
}
