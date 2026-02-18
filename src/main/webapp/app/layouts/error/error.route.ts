import { Routes } from '@angular/router';

import ErrorComponent from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    title: 'Chybová stránka!',
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      errorMessage: 'Nemáte oprávnení k přístupu na tuto stránku.',
    },
    title: 'Chybová stránka!',
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      errorMessage: 'Stránka neexistuje.',
    },
    title: 'Chybová stránka!',
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
