import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // formData = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   };

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      subtitle: 'Send me an email',
      value: 'm4.el.shenawy1702@gmail.com',
      link: 'mailto:m4.el.shenawy1702@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      subtitle: 'Give me a call',
      value: '+20 1008781820',
      link: 'tel:+201008781820'
    },
    {
      icon: '📍',
      title: 'Location',
      subtitle: 'Cairo, Egypt',
      value: 'New Nozha,Cairo, Egypt',
      link: '#'
    }
  ];

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

  // onSubmit(): void {
  //   console.log('Form submitted:', this.formData);
  //   // Here you would typically send the form data to your backend
  //   alert('Thank you for your message! I\'ll get back to you soon.');

  //   // Reset form
  //   this.formData = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   };
  // }
}
