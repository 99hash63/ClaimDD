import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CpService } from 'src/app/shared/cp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cp-conditions',
  templateUrl: './cp-conditions.component.html',
  styleUrls: ['./cp-conditions.component.css'],
})
export class CpConditionsComponent implements OnInit {
  @Output('onTabClick') onTabClick: EventEmitter<any> = new EventEmitter();

  constructor(public cpService: CpService) {}

  ngOnInit(): void {
    const message = this.cpService.getContractParticular();
  }

  addConditions(form: NgForm) {
    this.cpService.addContractParticular(form.value).subscribe(
      (res) => {
        console.log(res['success']);
        this.onTabClick.emit(2);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
