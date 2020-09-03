import { element } from 'protractor';
import { Routes, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { GalleryElement } from './../gallery.model';
import { GalleryService } from './../../shared/gallery.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent implements OnInit, OnDestroy {

  destory$: Subject<boolean> = new Subject();
  elements: GalleryElement[];

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnDestroy(): void {
    this.destory$.next(true);
    this.destory$.complete();
    console.log('on destory view ')
  }

  ngOnInit() {

    this.galleryService.changeEvent.pipe(takeUntil(this.destory$)).subscribe(

      (values: GalleryElement[]) => {
        console.log('listening');
        this.elements = values;
      });

    this.elements = this.galleryService.elements;
  }

  onEdit(galleryElement: GalleryElement) {
    this.router.navigate(['gallery/edit', galleryElement.id]);
  }

  onDelete(id: number) {
    this.galleryService.delete(id);
  }

}
