import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent,title:"Home"},
  {path:"portolio",component:PortfolioComponent,title:"Portolio"},
  {path:"apout",component:AboutComponent,title:"Apout"},
  {path:"contact",component:ContactComponent,title:"Contact"},
  {path:"**",component:PageNotFoudComponent, title:"Page Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
