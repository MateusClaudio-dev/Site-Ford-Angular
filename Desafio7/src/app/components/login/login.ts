import { Home } from './../home/home';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private authservice: AuthService,
    private router: Router
  ) {}

  dadosForm = {
    nome: "",
    senha: ""
  }

  aoSubmeterLogin(): void {
    if (!this.dadosForm.nome || !this.dadosForm.senha) {
      alert("Por favor digite todos os campos!");
      return;
    }
    this.authservice.efetuarLogin(this.dadosForm).subscribe({
      next: (respostaDoBack) => {
        console.log('Autenticado com sucesso', respostaDoBack);
        localStorage.setItem('usuarioLogado', 'true');
        this.router.navigate(["/Home"]);
      },
      error:(erro) => {
        console.error('Erro no login:', erro);
        alert(erro.error?.message || 'Falha na autenticação');
      }
    })
  }
}
