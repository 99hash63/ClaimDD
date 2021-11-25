import { Component, OnInit } from '@angular/core';
import { FpService } from 'src/app/shared/fp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-financial-particulars',
  templateUrl: './financial-particulars.component.html',
  styleUrls: ['./financial-particulars.component.css'],
})
export class FinancialParticularsComponent implements OnInit {
  constructor(public fpService: FpService) {}

  ngOnInit(): void {
    const message = this.fpService.getFinancialParticular();
    console.log(message);
  }

  addFp(form: NgForm) {
    this.fpService.addFinancialParticular(form.value).subscribe(
      (res) => {
        console.log(res['success']);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
