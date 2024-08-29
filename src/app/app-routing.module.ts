import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from "./join/join.component";
import { WhocanuseComponent } from "./whocanuse/whocanuse.component";
import { PlansComponent } from "./plans/plans.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";

const routes: Routes = [
  { path: '', component: JoinComponent },
  { path: 'join', component: JoinComponent },
  { path: 'who', component: WhocanuseComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'how-it-works', component: HowItWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
