import { GalleryService } from './../shared/gallery.service';
import { Component, OnInit } from '@angular/core';
import { GalleryElement } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {

  }

  onDummyAdd() {
    const galleryElement: GalleryElement = new GalleryElement(null,
       'http://hello.world',
      'asldkfjadslkfj',
      'saldkfjalsdkjflksadjfdsalkfj'
    );
    this.galleryService.add(galleryElement);
  }

}
