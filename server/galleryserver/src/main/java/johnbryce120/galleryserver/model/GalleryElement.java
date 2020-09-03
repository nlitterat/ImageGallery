package johnbryce120.galleryserver.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import java.sql.Date;

@Data
@NoArgsConstructor
@Entity
public class GalleryElement {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@NotNull
	@Length(min = 7, max = 255)
//    @Pattern()
	private String src;
	@NotNull
	@Length(min = 7, max = 15)
	private String title;
	@NotNull
	@Length(min = 2, max = 255)
	private String description;
	private GalleryElementType type;
	@Column(updatable = false)
	private Date createdOn;
}
