import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CpService } from 'src/app/shared/cp.service';

@Component({
  selector: 'app-cp-amendment',
  templateUrl: './cp-amendment.component.html',
  styleUrls: ['./cp-amendment.component.css'],
})
export class CpAmendmentComponent implements OnInit {
  constructor(public cpService: CpService, private router: Router) {}

  ngOnInit(): void {
    const message = this.cpService.getContractParticular();
  }

  addAmendmant(form: NgForm) {
    this.cpService.addContractParticular(form.value).subscribe(
      (res) => {
        console.log(res['success']);
        this.router.navigateByUrl('financial-particulars');
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
