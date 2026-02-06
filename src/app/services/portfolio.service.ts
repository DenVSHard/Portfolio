import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolioitems: any = [

    {
      mainImage: "/assets/img/portfolio/elpoloBook.png",
      backgroundImage: "/assets/img/portfolio/elpolo.png",
      gitLink: 'https://github.com/DenVSHard/El_Pollo_Loco',
      liveLink: 'https://el-pollo-loco.denis-weinhardt.com/',
      title: 'El Pollo Loco',
      description: 'A simple jump-and-run game based on an object-oriented approach. Help Pedro find coins and Tabasco bottles to fight against the chickens.',
      tags: ['Javascript', 'HTML', 'CSS']
    },

    {
      mainImage: "/assets/img/portfolio/joinBook.png",
      backgroundImage: "/assets/img/portfolio/join.png",
      gitLink: 'https://github.com/DenVSHard/Join',
      liveLink: 'https://join.denis-weinhardt.com/',
      title: 'JOIN',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tags: ['Javascript', 'HTML', 'CSS']
    },

  ]
  constructor() { }

  getPortfolio() {
    return this.portfolioitems;
  }
}