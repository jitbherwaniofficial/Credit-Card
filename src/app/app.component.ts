import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from './date-form-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardForm! :FormGroup;  
  submitted = false;
  title = 'creditcard';

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.cardForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      // lastName : ['', Validators.required],
      CardNumber : ['', [Validators.required,Validators.minLength(16),Validators.maxLength(16),]],
      Expiration :new DateFormControl ('', [Validators.required,Validators.pattern(/^(0[1-9]|1[0-2]\/\d{2}$)/)]),
      // Email : ['', [Validators.required,Validators.email]],
      SecurityCode : ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
    })
  }

  onSubmit(){
    
    this.submitted = true
    if (this.cardForm.invalid) {
      return
    }
    alert("Submitted")
  }

  onReset(){
    this.cardForm.reset();
  }
  
}
