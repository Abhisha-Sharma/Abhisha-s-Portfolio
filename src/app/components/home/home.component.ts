import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
    trigger('heroAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('800ms 300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  name = 'Abhisha Sharma';
  title = 'Frontend Angular Developer';
  location = 'Gangabu, Kathmandu';
  email = 'abhishasharma322@gmail.com';
  phone = '9866843459';

  // For staggered animations
  cards = [
    { title: 'Skills', description: 'Angular, HTML, CSS/SCSS, TypeScript, NgRx, and more.', link: '/skills', linkText: 'See My Skills' },
    { title: 'Experience', description: 'Frontend Angular Developer at Technofex', link: '/experience', linkText: 'View Experience' },
    { title: 'Education', description: 'Bachelor of Computer Science at Tribhuvan University', link: '/education', linkText: 'View Education' }
  ];
}
