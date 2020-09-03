package johnbryce120.galleryserver.controller;

import java.util.List;

import org.springframework.validation.ObjectError;

import lombok.Data;

@Data
public class ErrorResponse {
	String message;
	List<ObjectError> errors;
	

}
