import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddImageComponent } from './gallery/add-image/add-image.component';
import { EditImageComponent } from './gallery/edit-image/edit-image.component';
import { ViewImageComponent } from './gallery/view-image/view-image.component';
import { DeleteImageComponent } from './gallery/delete-image/delete-image.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageFormComponent } from './gallery/image-form/image-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    GalleryComponent,
    NotFoundComponent,
    AddImageComponent,
    EditImageComponent,
    ViewImageComponent,
    DeleteImageComponent,
    ImageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
