import { ErrorHandler } from '@angular/core/';

export class MyErrorHandler implements ErrorHandler {
  handleError(error: Response) {
    // do something with the exception
    alert('an unexpected error occured');
  }
}
