import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponenet {
  // Personal Information - Customize this section
  personalInfo = {
    name: 'Mostafa Elshenawy',
    introduction: `I'm a passionate full-stack developer with over 1 years of experience creating digital solutions 
                  that bridge the gap between design and functionality. My journey began with a curiosity about 
                  how websites work, which evolved into a deep love for crafting exceptional user experiences.`,
    additionalInfo: `When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in continuous learning and staying 
                    updated with the latest industry trends.`,
    profileImage: 'assets/profile2.jpg'
  };

  // Statistics - Update with your real numbers
  stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' }
  ];

  experiences = [
    {
      position: 'Junior Developer',
      // company: 'StartupXYZ',
      period: '2024 - Present',
      description: 'Developed full-stack web applications using Angular, DotNet, and SQL.'
    }
  ];

  coreSkills = [
    'Angular', 'TypeScript', 'Node.js', 'React', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'
  ];
  PhilosophyValues = [
    {
      icon: '🎯',
      title: 'User-Centered',
      description: 'Every line of code I write is focused on creating the best possible user experience.'
    },
    {
      icon: '🚀',
      title: 'Performance First',
      description: 'I prioritize clean, efficient code that scales and performs well under pressure.'
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'I believe the best solutions come from working together and sharing knowledge.'
    }
  ];
downloadResume(): void {
  const resumeUrl = '/assets/mostafa-elshenawy-cv.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', 'mostafa-elshenawy-cv.pdf');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
