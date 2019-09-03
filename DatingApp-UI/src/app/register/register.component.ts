import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  registerModel: any = {} ;
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerModel).subscribe(() => {
      this.alertify.success('Registration successfull');
      }, error => {
        this.alertify.error(error);
      });
    console.log(this.registerModel);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Register cancelled');
  }
}
