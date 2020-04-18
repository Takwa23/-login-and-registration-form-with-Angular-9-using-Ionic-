import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaravelPassportService } from 'laravel-passport';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user: FormGroup;
  constructor(public modalController: ModalController,
    public formBuilder: FormBuilder,
    private laravelPassportService:LaravelPassportService
    ) { 
  this.user= this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
}
  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
  login(){
    const user = this.user.value;
    this.laravelPassportService.loginWithEmailAndPassword(user.email, user.passw$).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('completed');
      }
    );
  }

}
