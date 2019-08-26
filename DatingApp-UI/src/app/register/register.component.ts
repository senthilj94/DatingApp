import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  registerModel: any = {} ;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerModel).subscribe(() => {
      console.log('Registration successfull');
      }, error => {
        console.log(error);
      });
    console.log(this.registerModel);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Register cancelled');
  }
}
