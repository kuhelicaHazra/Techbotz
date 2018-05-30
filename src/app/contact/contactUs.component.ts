import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact-root',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css']
})
export class ContactUsComponent {

  submitform: FormGroup; // <--- submitorm is of type FormGroup
  constructor(private fb: FormBuilder, private http: Http) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
  this.submitform = this.fb.group({
    name: ['', Validators.required ],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    message: ['', Validators.required]
  });
}

onSubmit() {
console.log(this.submitform.value);
console.log('POST');
  const url = `/sendEmail`;
  this.http.post(url, this.submitform.value).subscribe(res => console.log(res.json()));
}
}
