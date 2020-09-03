package johnbryce120.galleryserver.service;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import johnbryce120.galleryserver.model.GalleryElement;
import johnbryce120.galleryserver.repository.GalleryElementRepository;

@Service
public class GalleryService {

    private GalleryElementRepository galleryElementRepository;

    @Autowired
    public GalleryService(GalleryElementRepository galleryElementRepository) {
        this.galleryElementRepository = galleryElementRepository;
    }


    public GalleryElement add(@NotNull GalleryElement galleryElement) {
        galleryElement.setCreatedOn(new Date(Calendar.getInstance().getTimeInMillis()));
        return this.galleryElementRepository.save(galleryElement);
    }


    public GalleryElement update(@NotNull GalleryElement galleryElement) {
        return this.galleryElementRepository.save(galleryElement);
    }


    public GalleryElement findOne(@NotNull Long galleryElementId) {
        Optional<GalleryElement> optionalGalleryElement = galleryElementRepository.findById(galleryElementId);
        if (optionalGalleryElement.isPresent()) {
            return optionalGalleryElement.get();
        }
        throw new RuntimeException("Unable to find galleryElement with Id " + galleryElementId);
    }


    public List<GalleryElement> findAll() {
        return galleryElementRepository.findAll();
     
    }


    public void delete(long galleryElementId) {
        Optional<GalleryElement> optionalGalleryElement = galleryElementRepository.findById(galleryElementId);
        if (optionalGalleryElement.isPresent()) {
            galleryElementRepository.deleteById(galleryElementId);
        } else {
            throw new RuntimeException("Unable to find galleryElement with Id " + galleryElementId);
        }
    }
}
