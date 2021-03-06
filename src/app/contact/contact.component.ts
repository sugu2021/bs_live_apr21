import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title ,Meta} from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  enquiryModal:any = FormGroup;
  arr: any[]=[];
  constructor(meta:Meta, title:Title,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder) {
    title.setTitle('Brandstory Solutions Private Limited Contact Us Location Information');

    meta.addTags([
      {
        name: 'description',
        content: 'Brandstory Solutions Private Limited: No 5, 1st Cross, 3rd Floor Krishna Reddy Colony, Domlur Layout, Bangalore, Karnataka – 560071. Mobile: +91 9811599577 Email: info@brandstory.in. Digital Marketing Company in Bangalore Contact Us Location.'
        },
      {
        name: 'keywords',
        content: 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Brandstory Solutions Private Limited Contact Us Location Information'
      },
      {
        name: 'og:description',
        content: 'Brandstory Solutions Private Limited: No 5, 1st Cross, 3rd Floor Krishna Reddy Colony, Domlur Layout, Bangalore, Karnataka – 560071. Mobile: +91 9811599577 Email: info@brandstory.in. Digital Marketing Company in Bangalore Contact Us Location.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/contact-us/'
      },
      {
        name: 'og:site_name',
        content: 'Digital Marketing Agency | Digital Marketing Company Bangalore | SEO Company'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'Brandstory Solutions Private Limited: No 5, 1st Cross, 3rd Floor Krishna Reddy Colony, Domlur Layout, Bangalore, Karnataka – 560071. Mobile: +91 9811599577 Email: info@brandstory.in. Digital Marketing Company in Bangalore Contact Us Location.'
      },
      {
        name: 'twitter:title',
        content:'Brandstory Solutions Private Limited Contact Us Location Information'
      }
    ]);
  }

  ngOnInit() {
    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone:  ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      company: ['', Validators.required],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

   onSubmit(form:NgForm ) {

    debugger;

    this.arr = form.value;
    console.log(JSON.stringify( this.arr));
    console.log(JSON.stringify( form.value));
    console.log(JSON.stringify( form.value.fName));

    const formName = form.value.fName;
    const formEmail = form.value.fEmail;
    const formPhone = form.value.fPhone;
    const formService = form.value.fService;
    const formMessage = form.value.fMessage;

    // const formData = new FormData();
    // formData.append('name', formName);
    // formData.append('email', formEmail);
    // formData.append('phone', formPhone);
    // formData.append('service', formService);
    // formData.append('message', formMessage);


    let head = new HttpHeaders();
    head.append('Access-Control-Allow-Headers', 'Content-Type');
    head.append('Access-Control-Allow-Methods', 'GET');
    head.append('Access-Control-Allow-Origin', '*');
    // this.httpClient.post('https://brandstory.in/assets/thankyou_mail.php',formData)
    this.httpClient.post('https://brandstory.in/assets/thank-you1.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/contact-us"

    })
    .subscribe(
      (data:any) => {
        this.router.navigate(['thank-you']);
      //  window.location.href = "https://brandstory.in/thank-you"
        console.log(data);
      }
    )

    debugger;

    this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/contact-us"

    })
    .subscribe(
      (data:any) => {
        //this.modalRef.hide();
       // this.router.navigate(['thank-you']);
      //  window.location.href = "https://brandstory.in/thank-you"
        // console.log(data);
      }
    )

   }

   onSubmitEnquiryModal( ) {
    this.submitted = true;
    this.arr = this.enquiryModal.value;

    debugger;

    if (this.enquiryModal.invalid) {
      return;
  }
    //console.log(JSON.stringify( this.arr));
    //console.log(JSON.stringify( form.value));
    //console.log(JSON.stringify( form.value.fName));

    const formName = this.enquiryModal.value.fName;
    const formEmail = this.enquiryModal.value.fEmail;
    const formPhone = this.enquiryModal.value.fPhone;
    const company = this.enquiryModal.value.company;
    const formService = this.enquiryModal.value.fService;
    const formMessage = this.enquiryModal.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/contact-usmail.php',
    // this.httpClient.post('https://brandstory.in/assets/mails/contact-usmail.php',
    // this.httpClient.post('https://brandstory.in/assets/mails/contact-usmail.php',
    // this.httpClient.post('http://localhost/api/contact-usmail.php',

    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      company: company,
      service: formService,
      message: formMessage,
      page:"brandstory.in/contact"

    })
    .subscribe(
      (data:any) => {
        //this.modalRef.hide();
       this.router.navigate(['thank-you']);
      //  window.location.href = "https://brandstory.in/thank-you";
        console.log(data);
      }
    )

    debugger;

    // this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
    this.httpClient.post('https://brandstory.in/assets/contact-usmail_custom2021.php',
    // this.httpClient.post('/assets/contact-usmail_custom2021.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      company: company,
      service: formService,
      message: formMessage,
      page:"brandstory.in/contact"

    })
    .subscribe(
      (data:any) => {
        //this.modalRef.hide();
       // this.router.navigate(['thank-you']);
      //  window.location.href = "https://brandstory.in/thank-you"
        // console.log(data);
      }
    )


   }
}
