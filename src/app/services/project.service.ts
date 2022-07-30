import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects : Project[]

  constructor() {
    this.projects = [
      {
        title:'E-Commerce WebSite',
        img:'/assets/laravelecommerce.jpg',
        desc:`Full e-commerce website using laravel technology and SQL database
        JavaScript/HTML5/CSS3/Bootstrap`,
        link:``
      },
      {
        title:'Dental Clinic System',
        img:'/assets/dental.jpg',
        desc:`Booking detection appointments, monitoring appointments, 
        registering patients, medicines, diagnosis, type of detection and printing bill `,
        link:``
      },
      {
        title:'E-Commerce WebSite',
        img:'/assets/angular1.jpg',
        desc:`Full e-commerce website using laravel API and SQL database in back-end
        and Angular Framework for the front-end`,
        link:``
      }
    ]
   }

   getAllProjects():Project[]
   {
     return this.projects;
   }
  

}
