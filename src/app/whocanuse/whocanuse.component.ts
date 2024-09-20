import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-whocanuse',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatCardModule, MatCheckboxModule, TranslateModule],
  templateUrl: './whocanuse.component.html',
  styleUrl: './whocanuse.component.css'
})
export class WhocanuseComponent {

}
