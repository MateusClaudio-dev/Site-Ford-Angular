# Projeto Angular

Aplicação web corporativa de alta performance desenvolvida para consolidação de aprendizado de **TypeScript, HTML5, CSS3, responsividade, componentização, reatividade assíncrona, governança de dados e otimização do ciclo de vida de componentes utilizando framework Angular**.

---

## 👨‍💻 Escopo de Atuação 

* **Engenharia de Front-end (Desenvolvimento Integral):** Responsável único pela arquitetura técnica, componentização, gerenciamento de estado e fluxo reativo do lado do cliente.
* **Consumo de Serviços & Infraestrutura:** Atuação estratégica na integração com uma API REST preexistente fornecida para o ecossistema corporativo. Demonstração prática de competências em fundamentos de APIs e provisionamento de infraestrutura em nuvem através da configuração e deploy do servidor no ambiente **Render**.

---

## 🔗 Links Oficiais do Ambiente de Produção
* **Módulo Cliente (GitHub Pages):** [https://MateusClaudio-dev.github.io/Site-Ford-Angular/](https://MateusClaudio-dev.github.io/Site-Ford-Angular/)
* **Módulo Distribuidor (Render API):** [https://api-ford-2ecp.onrender.com](https://api-ford-2ecp.onrender.com)

---

## 1. Programação Reativa Baseada em Fluxos (RxJS)
O controle de concorrência e o gerenciamento de chamadas assíncronas assenta-se na biblioteca RxJS, implementando os seguintes padrões:

**Observable:** Consumo eficiente e tipado de dados através do serviço modularizado HttpClient.

**Subject:** Centralização de eventos síncronos e compartilhamento de estados globais de sessão ativa entre componentes independentes.

**Pipe:** Composição declarativa de transformações de dados em tempo de execução.

**DebounceTime:** Aplicado como padrão de otimização nos campos de busca. Ele atua como um limitador de taxa (rate limiter), evitando que múltiplos disparos de rede sobrecarreguem o servidor a cada tecla digitada pelo usuário.

---

## 2. Ciclo de Vida e Sincronismo Dinâmico

**ChangeDetectorRef:** Adotado para realizar a checagem manual do ciclo de detecção do Angular, contornando gargalos assíncronos e forçando a renderização precisa das métricas operacionais (Vendas Totais, Conectividade e Software) imediatamente após a seleção de novos modelos.

---

## 3. Vinculação de Estados (Data Binding) & Diretivas
**Property Binding ([]):** Utilizado para acoplamento dinâmico de mídias (imagens dos veículos controladas pelo estado lógico) e restrição de componentes visuais (disabled).

**Event Binding (()):** Captura e processamento reativo de ações do usuário (submissão de formulários de autenticação, filtros analíticos e encerramento de sessão).

**Diretivas Estruturais e de Controle:** Emprego de [(ngModel)] para persistência bidirecional em inputs, *ngIf para manipulação cirúrgica da árvore DOM e *ngFor para renderização de tabelas analíticas a partir do payload JSON da API.
## 📁 Arquitetura do Repositório (Monorepo Pattern)

A estrutura adota o padrão monorepo para garantir a coesão das entregas e centralização do pipeline de versionamento:

```text
SITE-FORD-ANGULAR/
│
├── Api-Sprint7/      # Back-end: API REST integrada e configurada para nuvem
└── Desafio7/         # Front-end: Aplicação reativa robusta em Angular
