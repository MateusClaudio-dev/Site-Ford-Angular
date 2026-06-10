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
    const iconMenu = document.querySelector('.icon-menu') as HTMLElement
    const sideBar = document.querySelector('.side-bar') as HTMLElement
    iconMenu.addEventListener('click', function(){
    sideBar.style.display = 'block'
    })

  }

  closeMenu(): void {
    const iconClose = document.querySelector('.icon-close') as HTMLElement
    const sideBar = document.querySelector('.side-bar') as HTMLElement
    iconClose.addEventListener('click', function(){
    sideBar.style.display = 'none'
    })
  }
}

