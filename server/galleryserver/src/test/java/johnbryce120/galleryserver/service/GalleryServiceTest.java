package johnbryce120.galleryserver.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import johnbryce120.galleryserver.model.GalleryElement;

@SpringBootTest
class GalleryServiceTest {

	@Autowired
	private GalleryService galleryService;

	@Test
	void testAdd() {
		GalleryElement galleryElement = new GalleryElement();
		galleryElement.setDescription("This is a test");
		galleryElement.setSrc("http//my-source");
		galleryElement.setTitle("my title");
		GalleryElement add = galleryService.add(galleryElement);
		assertNotNull(add);
	}

	@Test
	void testAddValidation() {
		Exception exception = assertThrows(Exception.class, () -> {
			GalleryElement galleryElement = new GalleryElement();
			galleryElement.setDescription("This is a test");
			galleryElement.setSrc("http//my-source");
			GalleryElement add = galleryService.add(galleryElement);
	    });
		assertNotNull(exception);
	}

	@Test
	void testUpdate() {
		fail("Not yet implemented");
	}

	@Test
	void testFindOne() {
		fail("Not yet implemented");
	}

	@Test
	void testFindAll() {
		fail("Not yet implemented");
	}

	@Test
	void testDelete() {
		fail("Not yet implemented");
	}

}
