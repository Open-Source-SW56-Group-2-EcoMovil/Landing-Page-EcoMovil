import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {PlansComponent} from "./plans/plans.component";
import {AboutComponent} from "./about/about.component";
import {FooterComponent} from "./footer/footer.component";
import {JoinComponent} from "./join/join.component";
import {WhocanuseComponent} from "./whocanuse/whocanuse.component";
import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, HowItWorksComponent, PlansComponent, AboutComponent, FooterComponent, JoinComponent, WhocanuseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';
}
