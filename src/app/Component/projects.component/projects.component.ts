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
  filters = ['All', 'Web App', 'Web API', 'Console App', 'Templates'];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product browsing, real-time inventory, secure checkout using Stripe, and an intuitive admin dashboard for managing orders and users.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Stripe', 'Redis'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'Company Management System',
      description: 'An internal system that allows companies to manage departments, employees, projects, tasks, and finances with secure access and detailed reporting.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Stripe'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'Bookify',
      description: 'A responsive online booking platform where users can schedule appointments, register/login securely, and admins can manage services and bookings with ease.',
      image: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['DotNet MVC', 'HTML/CSS/JS', 'JWT Authentication', 'MSQL', 'Stripe', 'Cloudinary'],
      category: 'Web App',
      demo: '#',
      github: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A scalable social networking API that supports user authentication, posting, liking, real-time messaging via SignalR, and user profile management.',
      image: 'https://images.unsplash.com/photo-1689004624325-6edf074228dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHNvY2lhbCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['DotNet API', 'SignalR', 'Angular', 'JWT Authentication', 'MSQL'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'Movie Management System',
      description: 'A backend system for managing movies, genres, user watchlists, and reviews, complete with authentication and role-based access.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'School Management System',
      description: 'A console-based system to manage students, teachers, classes, and grades using object-oriented principles in C#.',
      image: 'https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['C#', 'OOP', 'MSQL'],
      category: 'Console App',
      demo: '#',
      github: '#'
    },
    {
      title: 'Onion API Template',
      description: 'A clean and reusable API template following Onion Architecture with built-in support for validation, mapping, documentation, and authentication.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*r2whlknVkjIxheYd.png',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Fluent Validation', 'Swagger', 'EF Core', 'AutoMapper'],
      category: 'Templates',
      demo: '#',
      github: '#'
    },
    {
      title: 'Diabetic Blindness Detection',
      description: 'A web-based medical project that helps in early detection of diabetic blindness using image processing and secure access to diagnostic tools.',
      image: 'https://images.unsplash.com/photo-1555958124-a02a13553da0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERpYWJldGljX2JsaW5kbmVzc19kZXRlY3Rpb258ZW58MHx8MHx8fDA%3D',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Swagger', 'EF Core', 'AutoMapper'],
      category: 'Web API',
      demo: '#',
      github: '#'
    },
    {
      title: 'Software as a Service (SaaS)',
      description: 'A complete SaaS architecture with multi-tenancy, subscription billing, role-based access, and modular APIs to support custom business solutions.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['DotNet API', 'JWT Authentication', 'MSQL', 'Swagger', 'EF Core', 'AutoMapper'],
      category: 'Web API',
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
