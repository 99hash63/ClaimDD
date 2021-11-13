import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp-original',
  templateUrl: './cp-original.component.html',
  styleUrls: ['./cp-original.component.css'],
})
export class CpOriginalComponent implements OnInit {
  constructor() {}

  displayCurrency = 'Currency';

  ngOnInit(): void {}

  selectedCurrency(value: string) {
    console.log(value);
    // this.displayCurrency = value;
  }
}
