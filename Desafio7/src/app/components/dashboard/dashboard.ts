import { Component } from '@angular/core';
import { Cabecalho } from '../cabecalho/cabecalho';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-dashboard',
  imports: [Cabecalho],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
