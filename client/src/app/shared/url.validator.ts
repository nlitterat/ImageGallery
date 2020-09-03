import { ValidatorFn, AbstractControl } from '@angular/forms';

export class URLValidtor {

  public static prefix(): ValidatorFn {
    const validUrlPrefixREgExp: RegExp = /^(http|https):\/\//;
    return (control: AbstractControl): { [key: string]: any } | null => {
      const validUrl = validUrlPrefixREgExp.test(control.value);
      return validUrl ? null : { urlPrefix: { value: control.value } };
    };
  }

}
