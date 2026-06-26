import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => { 
  const router = inject(Router);
  const logadoLocal = localStorage.getItem('usuarioLogado');
  const logadoSession = sessionStorage.getItem('usuarioLogado');
  if (logadoLocal === 'true' || logadoSession === 'true') {
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};
