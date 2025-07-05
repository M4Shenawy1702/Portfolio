import { Component } from '@angular/core';
import { HeaderComponent } from "../header.component/header.component";
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "../hero.component/hero.component";
import { AboutComponenet } from "../about.componenet/about.component";
import {SkillsComponent } from "../skills/skills";
import { ProjectsComponent } from "../projects.component/projects.component";
import { ContactComponent } from "../contact.component/contact.component";
import { FooterComponent } from "../footer.component/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponenet, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] 
})
export class MainComponent {}
