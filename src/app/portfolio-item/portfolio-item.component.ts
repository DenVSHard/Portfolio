import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})

export class PortfolioItemComponent implements OnInit {
  @Input() portfolioItem: any;
  @Input() index: any;

  portfolioItems: any = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioItems = this.portfolioService.getPortfolio();
  }

  openPortfolioItem(input: number) {
    const item = document.getElementById('portfolioitem' + input);
    const itemdetail = document.getElementById('portfolioitemdetail' + input);

    if (item != null && itemdetail != null) {
      item.classList.add('d-none');
      itemdetail.classList.remove('d-none');
    }
  }

  closePortfolioItem(input: number) {
    const item = document.getElementById('portfolioitem' + input);
    const itemdetail = document.getElementById('portfolioitemdetail' + input);

    if (item != null && itemdetail != null) {
      item.classList.remove('d-none');
      itemdetail.classList.add('d-none');
    }
  }
}