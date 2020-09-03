package johnbryce120.galleryserver.controller;

import johnbryce120.galleryserver.model.GalleryElement;
import johnbryce120.galleryserver.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@RestController
public class GalleryController {

    private GalleryService galleryService;

    @Autowired
    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @PostMapping("/elements")
    public ResponseEntity<GalleryElement> add(@Valid @RequestBody GalleryElement galleryElement) {
        return new ResponseEntity<>(galleryService.add(galleryElement), HttpStatus.OK);
    }

    @PutMapping("/elements")
    public ResponseEntity<GalleryElement> update(@RequestBody GalleryElement galleryElement) {
        return new ResponseEntity<>(galleryService.update(galleryElement), HttpStatus.OK);
    }

    @GetMapping("/elements/{id}")
    public ResponseEntity<GalleryElement> findOne(@PathVariable long id) {
        return new ResponseEntity<>(this.galleryService.findOne(id), HttpStatus.OK);
    }

    @GetMapping("/elements")
    public ResponseEntity<List<GalleryElement>> findAll() {
        return ResponseEntity.ok(this.galleryService.findAll());
    }

    @DeleteMapping("/elements")
    public ResponseEntity<Void> delete(@RequestParam("id") long id) {
        galleryService.delete(id);
        return ResponseEntity.ok().build();
    }
}
