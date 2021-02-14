import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { GalleryComponent } from "./components/pages/gallery/gallery.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { PriceListComponent } from "./components/pages/price-list/price-list.component";
import { ShabbatShalomComponent } from "./components/pages/shabbat-shalom/shabbat-shalom.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"price",component:PriceListComponent},
  {path:"shabbat shalom",component:ShabbatShalomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
