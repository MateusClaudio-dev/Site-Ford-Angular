import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Cabecalho } from '../cabecalho/cabecalho';

@Component({
  selector: 'app-home',
  imports: [Cabecalho],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}