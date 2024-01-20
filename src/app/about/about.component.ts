import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import Swal from "sweetalert2"

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [
    NgClass,
    NgOptimizedImage,
    NgIf
  ],
  styleUrl: './about.component.css'
})
export class AboutComponent {
  tab:number = 1;
constructor() {
}
  showModal(cardType:string){
    switch (cardType){
      case 'warner': {
        Swal.fire({
          title: '@Warner Music Group',
          confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
          html:`<p style="text-align: left">Commenced my professional journey with the Warner Music Group IT department
            in 2016, where I undertook the responsibility of enhancing the performance of existing <strong>AngularJS</strong> web applications.
            <p style="text-align: left">Being a <strong>Certified Scrum Master</strong> in my team, I took charge of organizing daily stand-up meetings, and strategic planning for upcoming tasks within our structured two-week Sprint cycle.
            Throughout my time here, I mastered multiple Frontend development related skills: <strong>AngularJS version 1,10 and 17, Bootstrap version 3 and 5,
            NodeJS, PHP and MySQL</strong> to name a few.</p>`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          }
        });
        break;
      }
      case 'mts': {
        Swal.fire({
          title: '@Manulife Technologies & Services',
          confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
          html:`<p style="text-align: left">Started my professional journey at MTS fresh out of university. During my time here, I am mostly involved with
            the development of Portfolio Management Toolkit (PMT) web application, built on top of <strong>Kendo UI</strong> and <strong>jQuery.</strong></p>
            <p style="text-align: left">However, this website is showing some issue with slowness, particularly with financial tables surpassing 500 rows. In response to this issue, I conducted an investigation and proposed a migration from Kendo UI to <strong>Angular 1.</strong>
            The rationale behind this shift was to preserve the MVC architecture (<strong>ASP.Net</strong>) while harnessing Angular's capabilities to enhance DOM rendering speed.
            Since making this transition, Angular has been my preferred framework for crafting robust and efficient user interfaces.</p>`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          }
        });
        break;
      }
      case 'ihome': {
        Swal.fire({
          title: '@iHome Systems',
          confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
          html:`<p style="text-align: left">My final year internship was carried out in a smart home
            consultant company. Here, I learned about different smart home devices, platforms, and ecosystems available
            in the market.</p>
            <p style="text-align: left">My main tasks consisted of <strong>designing a mobile application</strong> for controlling all smart devices
            on the client's site. <strong>Regex</strong> is a key component used in the app to differentiate between different devices
            and customize their functionality.</p>`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          }
        });
        break;
      }
      case 'airmaster': {
        Swal.fire({
          title: '@Airmaster Dragon',
          confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
          html:`<p style="text-align: left">In my 3-month internship, I developed a marketing website using
            <strong>Wix</strong> I also maintained already existing <strong>Joomla 2.5/MySQL</strong>. Produced marketing videos for
            Airmaster hoodies.</p>`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          }
        });
        break;
      }
    }
  }

  protected readonly NgOptimizedImage = NgOptimizedImage;
}
