import { DashboardService } from './../../service/dashboard.service';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Veiculo, VeiculosAPI } from '../../models/veiculo.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

// LOGICA DO MENU HAMBURGER
export class Dashboard  {
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

  carros: Veiculo[] = []

  // BLOCO DO CONSUMO DE API 
  constructor(private DashboardService: DashboardService) {}

  ngOnInit(){
    this.DashboardService.obterCarros().subscribe((resposta: VeiculosAPI) => {
      this.carros = resposta.vehicles
      console.log(this.carros)
    });
  }

  @Input() vehicles: Veiculo = {
    id: '1',
    vehicle: "Testando",
    volumetotal: 1,
    connected: 2,
    softwareUpdates: 3,
  }
}

