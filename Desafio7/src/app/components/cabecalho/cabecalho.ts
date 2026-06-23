import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

  menuAberto: boolean = false

  constructor(private router: Router) {}



  openMenu(): void { this.menuAberto = true } 
  outMenu(): void { this.menuAberto = false }
  closeMenu(): void { this.menuAberto = false }
  executarLogout() {this.router.navigate(["/Login"])}
}


