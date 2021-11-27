import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-particulars',
  templateUrl: './contract-particulars.component.html',
  styleUrls: ['./contract-particulars.component.css'],
})
export class ContractParticularsComponent implements OnInit {
  tabIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  onTabClick(index: number) {
    this.tabIndex = index;
  }

  parentFun(i: number) {
    console.log(i);
  }
}
