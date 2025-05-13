import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('150ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('chipAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger('70ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Trainee Frontend Angular Developer',
      company: 'Technofex',
      period: 'June 2024 - Present',
      description: [
        'Using NgRx for state management',
        'Implementing Angular Material UI components',
        'Developing multi-language support with i18n',
        'Writing unit tests'
      ],
      technologies: ['Angular', 'TypeScript', 'NgRx', 'Angular Material', 'i18n', 'Unit Testing']
    },
    {
      title: 'Intern Frontend Angular Developer',
      company: 'DGHUB',
      period: 'May 2021 - August 2021',
      description: [
        'Observed senior developers, learned semantic HTML/CSS/SCSS',
        'Gained exposure to Angular basics like data binding and event handling',
        'Applied BEM methodology in SCSS organization'
      ],
      technologies: ['HTML', 'CSS/SCSS', 'Angular', 'BEM']
    }
  ];

  projects = [
    {
      name: 'HR Management System',
      description: 'A comprehensive HR management system with features for employee management, attendance tracking, and performance evaluations.',
      technologies: ['Angular', 'TypeScript', 'NgRx', 'Angular Material']
    }
  ];
}
