import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
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
    ])
  ]
})
export class AboutComponent {
  profileSummary = `Motivated and dynamic aspiring frontend developer with hands-on experience in Angular, HTML, CSS/SCSS, and JavaScript. Strong foundational understanding of web development principles, eager to apply training experience to real-world projects. Enthusiastic about learning and staying updated with the latest in tech.`;

  infoItems = [
    { label: 'Email', value: 'abhishasharma322@gmail.com', link: 'mailto:abhishasharma322&#64;gmail.com' },
    { label: 'Phone', value: '9866843459', link: 'tel:9866843459' },
    { label: 'Location', value: 'Gangabu, Kathmandu', link: null },
    { label: 'Languages', value: 'English (Fluent), Nepali (Fluent)', link: null }
  ];
}
