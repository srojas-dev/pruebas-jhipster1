import { Routes } from '@angular/router';

import ErrorComponent from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
<<<<<<< Updated upstream
    title: 'Chybová stránka!',
=======
    title: 'Страница за грешка!',
>>>>>>> Stashed changes
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
<<<<<<< Updated upstream
      errorMessage: 'Nemáte oprávnení k přístupu na tuto stránku.',
    },
    title: 'Chybová stránka!',
=======
      errorMessage: 'Не сте упълномощени да получите достъп до тази страница.',
    },
    title: 'Страница за грешка!',
>>>>>>> Stashed changes
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
<<<<<<< Updated upstream
      errorMessage: 'Stránka neexistuje.',
    },
    title: 'Chybová stránka!',
=======
      errorMessage: 'Тази страница не съществува.',
    },
    title: 'Страница за грешка!',
>>>>>>> Stashed changes
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
