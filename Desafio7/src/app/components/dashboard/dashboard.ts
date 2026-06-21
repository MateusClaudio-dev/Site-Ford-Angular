import { DashboardService } from './../../service/dashboard.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Veiculo, VeiculosAPI } from '../../models/veiculo.model';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { TelemetriaVeiculo } from '../../models/veiculo.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard implements OnInit {

  carros: Veiculo[] = []
  carroSelecionado: Veiculo | null = null
  dadosTelemetria: TelemetriaVeiculo | null = null

  private buscadorVin$ = new Subject<string>();

  // BLOCO DO CONSUMO DE API 
  constructor(
    private DashboardService: DashboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(){

    // LÓGICA DO RETORNO DOS DADOS DA API
    this.DashboardService.obterCarros().subscribe((resposta: VeiculosAPI) => {
      this.carros = resposta.vehicles;
      console.log(this.carros);
      this.cdr.detectChanges();
    });

    // LÓGICA DO CAMPO DE BUSCA (VIN)
    this.buscadorVin$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((textoDoinput) => {
        return this.DashboardService.obterDadosPorVin(textoDoinput)
      })
    ).subscribe((resultadoDaAPI) => {
      this.dadosTelemetria = resultadoDaAPI;
      this.cdr.detectChanges();
    })
  }

  aoSelecionarCarro(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // 'target' aponta diretamente para o elemento que disparou o click
    const idSelecionado = Number(selectElement.value);

      this.carroSelecionado =  this.carros.find(carro => carro.id == idSelecionado) || null;
      console.log(idSelecionado)
  }

  aoDigitarVin(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.buscadorVin$.next(inputElement.value);
    }
  }

// BLOCO DA LOGICA DO MENU HAMBURGUER
  executarLogout() {
    console.log('Sessão finalizada.');
  }

  openMenu(): void {
    const dashboard = document.querySelector('.cabecalho-dashboard') as HTMLElement;
    const sideBar = document.querySelector('.side-bar') as HTMLElement;
    
    if (dashboard && sideBar) {
      dashboard.style.display = 'none';
      sideBar.style.display = 'block';
    }
  }

  closeMenu(): void {
    const dashboard = document.querySelector('.cabecalho-dashboard') as HTMLElement;
    const sideBar = document.querySelector('.side-bar') as HTMLElement;
    
    if (dashboard && sideBar) {
      dashboard.style.display = 'flex';
      sideBar.style.display = 'none';
    }
  }
}
