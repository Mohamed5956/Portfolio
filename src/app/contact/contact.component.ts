import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  fg = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }

  get name (){
    return this.fg.get('name');
  }

  get email(){
    return this.fg.get('email');
  }

  get message (){
    return this.fg.get('message');
  }
  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_5f18oed', 'template_v8zlzw6', e.target as HTMLFormElement, '1CQBjjhxQgdgR4Fuz')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
