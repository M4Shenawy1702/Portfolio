import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();


  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/m4elshenawy/',
      icon: '<i class="ri-linkedin-fill"></i>'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/M4Shenawy1702',
      icon: '<i class="ri-github-fill"></i>'
    },
  ];

  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  contactInfo = [
    { icon: '📧', value: 'm4.el.shenawy1702@gmail.com' },
    { icon: '📱', value: '+20 100878820' },
    { icon: '📍', value: 'Cairo , Egypt' }
  ];
}
