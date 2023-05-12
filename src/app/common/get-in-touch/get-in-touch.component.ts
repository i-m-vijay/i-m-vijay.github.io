import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit { 
  form: any;
  submitted = false;

  helpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['']
  });
  
  get helpFormControl() {
    return this.helpForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.helpForm.valid) {
    alert('Form Submitted successfully!!!\n Check the values in browser console.');
    console.warn(this.helpForm.value);
  }
}
  constructor(
    private fb: FormBuilder
    ) { 
    }  
  ngOnInit(): void {
  }
} 
