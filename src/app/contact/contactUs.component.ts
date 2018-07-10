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
  show= false;
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

  return this.http.post(url, this.submitform.value)
  .subscribe(res => this.showmsg(res));

}
showmsg(data){
  if (data._body==='Email Sent Successfully'){
    this.show=true;
    this.submitform.reset();
    }
}
}
