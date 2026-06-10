import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
    executarLogout() {
    
  }

  openMenu(): void {
    const dashboard = document.querySelector('.cabecalho-dashboard') as HTMLElement
    const iconMenu = document.querySelector('.icon-menu') as HTMLElement
    const sideBar = document.querySelector('.side-bar') as HTMLElement
    iconMenu.addEventListener('click', function(){
    dashboard.style.display = 'none'
    sideBar.style.display = 'block'
    })

  }

  closeMenu(): void {
    const dashboard = document.querySelector('.cabecalho-dashboard') as HTMLElement
    const iconClose = document.querySelector('.icon-close') as HTMLElement
    const sideBar = document.querySelector('.side-bar') as HTMLElement
    iconClose.addEventListener('click', function(){
     dashboard.style.display = 'flex'
    sideBar.style.display = 'none'
    })
  }
}

