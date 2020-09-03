import { DeleteImageComponent } from './gallery/delete-image/delete-image.component';
import { ViewImageComponent } from './gallery/view-image/view-image.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageFormComponent } from './gallery/image-form/image-form.component';


export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {
    path: 'gallery',
     component: GalleryComponent,
    children : [
      {path: 'view', component: ViewImageComponent},
      {path: 'add', component: ImageFormComponent, data: {editMode: false}},
      {path: 'edit/:id', component: ImageFormComponent, data: {editMode: true}},
      {path: 'delete', component: DeleteImageComponent},
    ]
    },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
