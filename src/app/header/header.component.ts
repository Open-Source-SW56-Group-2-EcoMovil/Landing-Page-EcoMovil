import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {JoinComponent} from "../join/join.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    JoinComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
