import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      description: 'User interface and experience',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 60 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML/CSS', level: 65 },
        { name: 'Tailwind CSS', level: 65 }
      ]
    },
    {
      name: 'Backend',
      description: 'Server-side development',
      icon: '⚙️',
      skills: [
        { name: 'DotNet', level: 90 },
        { name: 'C#', level: 95 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MSSql', level: 89 }
      ]
    },
    {
      name: 'DevOps & Tools',
      description: 'Development and deployment',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 78 },
        { name: 'CI/CD', level: 80 },
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'VS', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'npm', icon: '📦' }
  ];
}
