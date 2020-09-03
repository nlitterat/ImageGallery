package johnbryce120.galleryserver.model;

public enum GalleryElementType {
    IMAGE("image"),
    VIDEO("video");

    public final String type;

    GalleryElementType(String type){
        this.type = type;
    }
}
