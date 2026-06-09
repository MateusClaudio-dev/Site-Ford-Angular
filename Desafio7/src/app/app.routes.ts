import { Dashboard } from './components/dashboard/dashboard';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';



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
