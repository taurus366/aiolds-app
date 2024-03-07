import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import {personOutline, lockClosedOutline} from "ionicons/icons";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ]
})
export class LoginComponent   {

  isUsernameInCorrect: boolean = false;
  isPasswordInCorrect: boolean = false;

  constructor() {
    addIcons({personOutline, lockClosedOutline});
  }

  login(form: NgForm): void {

  }



}
