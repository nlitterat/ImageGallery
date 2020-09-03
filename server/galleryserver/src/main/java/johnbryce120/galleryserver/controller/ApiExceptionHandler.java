package johnbryce120.galleryserver.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler  {

	public ApiExceptionHandler() {
		System.out.println("**************** constactor ******************");
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	protected ResponseEntity<ErrorResponse> handleEverything(MethodArgumentNotValidException ex) {
		System.out.println("handleEverythingf: " + ex.getBindingResult().getErrorCount());
		ErrorResponse errorResponse = new ErrorResponse();
		errorResponse.setMessage("Bad dog");
		errorResponse.setErrors(ex.getBindingResult().getAllErrors());
		return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.BAD_REQUEST);
	}
}
