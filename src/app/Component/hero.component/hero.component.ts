import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  skills = [
    // Database
    'SQL', 'PostgreSQL', 'LINQ', 'EFCore',

    // Backend
    'C#', 'OOP', 'DotNet', 'Azure',

    // Frontend
    'TypeScript', 'Angular', 'HTML', 'CSS', 'Tailwind', 'Bootstrap',

    // Tools
    'Git', 'GitHub', 'Visual Studio', 'VSCode', 'Postman', 'Docker'
  ];
}
