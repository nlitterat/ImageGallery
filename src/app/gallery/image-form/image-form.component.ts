import { GalleryService } from './../../shared/gallery.service';
import { URLValidtor } from '../../shared/url.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  galleryElementForm: FormGroup;
  editMode = false;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private galleryService: GalleryService) {
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
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
      this.editMode = data.editMode;
    });
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }
  onSubmit() {
    if (this.editMode) {

    } else {
      this.galleryService.add(this.galleryElementForm.value);
    }
  }

}
