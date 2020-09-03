package johnbryce120.galleryserver.repository;

import johnbryce120.galleryserver.model.GalleryElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryElementRepository extends JpaRepository<GalleryElement, Long> {
}
