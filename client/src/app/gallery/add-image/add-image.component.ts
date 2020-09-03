import { GalleryService } from './../../shared/gallery.service';

import { GalleryElement } from './../gallery.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  element: GalleryElement = new GalleryElement();


  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }

  onSubmit(): void {
   this.galleryService.add(this.element);
  }

}
