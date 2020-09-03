import { URLValidtor } from './../../shared/url.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss']
})
export class EditImageComponent implements OnInit {
  galleryElementForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.galleryElementForm = this.formBuilder.group({
      title: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]
      ],
      src: ['',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(400),
          URLValidtor.prefix()
        ]
      ],
      description: ['']
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.galleryElementForm);
    console.log(this.galleryElementForm.value);
  }

}
