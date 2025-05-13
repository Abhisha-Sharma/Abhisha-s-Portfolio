import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
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
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: '0%' }),
        animate('1.2s ease-out', style({ width: '*' }))
      ])
    ]),
    trigger('iconPulse', [
      transition(':enter', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(0.5)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1.2)', opacity: 0.5, offset: 0.7 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Technologies',
      skills: [
        { name: 'HTML', level: 90, icon: 'html' },
        { name: 'CSS/SCSS', level: 85, icon: 'css' },
        { name: 'JavaScript', level: 80, icon: 'javascript' },
        { name: 'TypeScript', level: 75, icon: 'code' },
        { name: 'Angular', level: 85, icon: 'web' },
        { name: 'Angular Material', level: 80, icon: 'dashboard' }
      ]
    },
    {
      name: 'State Management',
      skills: [
        { name: 'NgRx Store', level: 75, icon: 'account_tree' }
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'i18n (internationalization)', level: 70, icon: 'language' },
        { name: 'Unit Testing', level: 65, icon: 'check_circle' },
        { name: 'BEM for CSS organization', level: 80, icon: 'view_quilt' }
      ]
    }
  ];

  getProgressColor(level: number): string {
    if (level >= 85) return 'primary';
    if (level >= 70) return 'accent';
    return 'warn';
  }

  getProgressClass(level: number): string {
    if (level >= 85) return 'expert-level';
    if (level >= 70) return 'advanced-level';
    return 'intermediate-level';
  }
}
