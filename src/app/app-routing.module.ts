import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact/contactUs.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'service',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }
