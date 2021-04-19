import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logisticsdma-bangalore',
  templateUrl: './logisticsdma-bangalore.component.html',
  styleUrls: ['./logisticsdma-bangalore.component.css']
})
export class LogisticsdmaBangaloreComponent implements OnInit {

  registerForm: any = FormGroup;
  bannerModalForm: any = FormGroup;

  submitted = false;
  arr: any[] = [];

  isFirstOpen = false;

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Logistics Digital Marketing Agency in Bangalore | Logistics SEO Company');

    meta.addTags([
      {
        name: 'description',
        content: 'Logistics Digital Marketing Agency in Bangalore, Best Logistics SEO Services Company in Bangalore India, SEO Agency for Logistics Company, Best Logistics Digital Marketing Companies in Bangalore, Top Logistics Social Media Company, Logistics PPC Agency in Bangalore.'
      },
      {
        name: 'keywords',
        content: 'Logistics Digital Marketing Agency in Bangalore, Best Logistics SEO Services Company in Bangalore India, SEO Agency for Logistics Company, Best Logistics Digital Marketing Companies in Bangalore, Top Logistics Social Media Company, Logistics PPC Agency in Bangalore.'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Logistics Digital Marketing Agency in Bangalore | Logistics SEO Company'
      },
      {
        name: 'og:description',
        content: 'Logistics Digital Marketing Agency in Bangalore, Best Logistics SEO Services Company in Bangalore India, SEO Agency for Logistics Company, Best Logistics Digital Marketing Companies in Bangalore, Top Logistics Social Media Company, Logistics PPC Agency in Bangalore.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/logistics-digital-marketing-agency-bangalore/'
      },
      {
        name: 'og:site_name',
        content: 'Digital Marketing Agency in Bangalore | Logistics SEO Company'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'Logistics Digital Marketing Agency in Bangalore, Best Logistics SEO Services Company in Bangalore India, SEO Agency for Logistics Company, Best Logistics Digital Marketing Companies in Bangalore, Top Logistics Social Media Company, Logistics PPC Agency in Bangalore.'
      },
      {
        name: 'twitter:title',
        content: 'Logistics Digital Marketing Agency in Bangalore | Logistics SEO Company'
      }
    ]);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      organisation: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });
    this.bannerModalForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', [Validators.required]],
      fMessage: ['', [Validators.required]]
    });
  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmits() {
    this.submitted = true;
    this.arr = this.registerForm.value;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const formName = this.registerForm.value.firstName;
    const formEmail = this.registerForm.value.email;
    const formPhone = this.registerForm.value.lastName;
    const formMessage = this.registerForm.value.password;
    const organisation = this.registerForm.value.organisation;
    const website = this.registerForm.value.website;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-inline-newseo.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
        page: "brandstory.in/b2b-marketing-companies-in-pune/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          this.router.navigate(['thank-you']);
          // window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

      debugger;

    this.httpClient.post('https://brandstory.in/assets/customer_mail5_2021.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
        page: "brandstory.in/b2b-marketing-companies-in-pune/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  onSubmitBannerModal() {
    this.submitted = true;
    this.arr = this.bannerModalForm.value;

    if (this.bannerModalForm.invalid) {
      return;
    }
    const formName = this.bannerModalForm.value.fName;
    const formEmail = this.bannerModalForm.value.fEmail;
    const formPhone = this.bannerModalForm.value.fPhone;
    const formService = this.bannerModalForm.value.fService;
    const formMessage = this.bannerModalForm.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-modal.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/b2b-marketing-companies-in-pune/"

      })
      .subscribe(
        (data: any) => {
          this.modalRef.hide();
          this.router.navigate(['thank-you']);
          // window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

      debugger;

    this.httpClient.post('https://brandstory.in/assets/customer_mail4_2021.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/b2b-marketing-companies-in-pune/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )

  }
}


