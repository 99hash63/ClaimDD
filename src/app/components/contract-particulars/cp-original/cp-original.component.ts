import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CpService } from 'src/app/shared/cp.service';

@Component({
  selector: 'app-cp-original',
  templateUrl: './cp-original.component.html',
  styleUrls: ['./cp-original.component.css'],
})
export class CpOriginalComponent implements OnInit {
  constructor(public cpService: CpService) {}

  displayCurrency = 'Currency';

  ngOnInit(): void {}

  selectedCurrency(value: string) {
    console.log(value);
    // this.displayCurrency = value;
  }

  addCpOriginal(form: NgForm) {
    this.cpService.addContractParticular(form.value).subscribe(
      (res) => {
        console.log(res['success']);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
