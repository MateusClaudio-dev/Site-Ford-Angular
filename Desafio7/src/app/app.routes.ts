
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Dashboard } from './components/dashboard/dashboard';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'full'
    },

    { path: 'Login',    component: Login },
    { path: 'Home',     component: Home },
    { path: 'Dashboard',component: Dashboard }
];
