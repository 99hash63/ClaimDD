import { Component, OnInit } from '@angular/core';
import { CpService } from 'src/app/shared/cp.service';

@Component({
  selector: 'app-cp-amendment',
  templateUrl: './cp-amendment.component.html',
  styleUrls: ['./cp-amendment.component.css'],
})
export class CpAmendmentComponent implements OnInit {
  constructor(public cpService: CpService) {}

  ngOnInit(): void {
    const message = this.cpService.getContractParticular();
  }
}
