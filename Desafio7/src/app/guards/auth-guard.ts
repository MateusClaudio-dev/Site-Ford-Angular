import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => { 
  const router = inject(Router);
  const usuarioLogado = localStorage.getItem('usuarioLogado');
  if (usuarioLogado) {
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }
};
