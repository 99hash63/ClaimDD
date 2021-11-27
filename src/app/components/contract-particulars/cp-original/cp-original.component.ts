import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CpService } from 'src/app/shared/cp.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-cp-original',
  templateUrl: './cp-original.component.html',
  styleUrls: ['./cp-original.component.css'],
})
export class CpOriginalComponent implements OnInit {
  @Output('onTabClick') onTabClick: EventEmitter<any> = new EventEmitter();

  constructor(public cpService: CpService) {}

  displayCurrency = 'Currency';

  ngOnInit(): void {
    const message = this.cpService.getContractParticular();
  }

  selectedCurrency(value: string) {
    console.log(value);
  }

  addCpOriginal(form: NgForm) {
    this.cpService.addContractParticular(form.value).subscribe(
      (res) => {
        console.log(res['success']);
        this.onTabClick.emit(1);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
