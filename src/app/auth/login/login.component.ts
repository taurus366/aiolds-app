import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import {personOutline, lockClosedOutline} from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ]
})
export class LoginComponent   {

  constructor() {
    addIcons({personOutline, lockClosedOutline});
  }



}
