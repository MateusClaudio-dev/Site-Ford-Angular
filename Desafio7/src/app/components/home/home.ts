import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  executarLogout() {
    
  }

  openMenu(): void {
    const header = document.querySelector('.home-header') as HTMLElement
    const card = document.querySelector('.welcome-card') as HTMLElement
    const iconMenu = document.querySelector('.icon-menu') as HTMLElement
    const sideBar = document.querySelector('.side-bar') as HTMLElement
      iconMenu.addEventListener('click', () => {
      header.style.display = 'none'
      card.style.display = 'none'
      sideBar.style.display = 'block'
      
    })
  }

  outMenu(): void {
    const header = document.querySelector('.home-header') as HTMLElement
    const sideBar = document.querySelector('.side-bar') as HTMLElement
    sideBar.addEventListener('click', () => {
      // aqui display deve ser none para o side-bar, ou seja menu fechar
      header.style.display = 'flex'
      sideBar.style.display = 'none'
    })
  }

  closeMenu() {

  }
}
