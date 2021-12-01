import { Component, OnInit } from '@angular/core';
import { QuantumService } from 'src/app/shared/quantum.service';

@Component({
  selector: 'app-quantum',
  templateUrl: './quantum.component.html',
  styleUrls: ['./quantum.component.css'],
})
export class QuantumComponent implements OnInit {
  constructor(public quantumService: QuantumService) {}

  ngOnInit(): void {}

  //set import type
  setQuantumType(quantumType: string) {
    this.quantumService.setImportQuantumType(quantumType);
  }
}
