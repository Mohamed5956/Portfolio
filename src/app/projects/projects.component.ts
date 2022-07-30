import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectService:ProjectService) { 
    this.projects =[];
  }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects() 
  }

}
