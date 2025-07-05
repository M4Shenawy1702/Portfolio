import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  activeFilter = 'All';
  filters = ['All', 'Web App', 'Web API', 'Console App'];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'An end-to-end shopping experience with secure payments, real-time stock updates, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Stripe'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'Company Management System',
      description: 'A centralized system for managing departments, employees, tasks, and finances with real-time collaboration.',
      image: 'https://images.unsplash.com/photo-1581092334649-fd1b0fdd9f0b?auto=format&fit=crop&w=800&q=80',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Stripe'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'Bookify',
      description: 'A sleek online booking system with dynamic scheduling, user authentication, and responsive design.',
      image: 'https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=800&q=80',
      technologies: ['DotNet MVC', 'HTML/CSS/JS', 'JWT Authentication', 'MSQL', 'Stripe', 'Cloudinary'],
      category: 'Web App',
      demo: '#',
      github: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social platform with scalable APIs, secure login, post feeds, likes, and real-time interaction.',
      image: 'https://images.unsplash.com/photo-1522202221400-92c33c4fefc8?auto=format&fit=crop&w=800&q=80',
      technologies: ['DotNet API', 'Angular', 'JWT Authentication', 'MSQL'],
      category: 'API',
      demo: '#',
      github: '#'
    }
  ];


  get filteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
