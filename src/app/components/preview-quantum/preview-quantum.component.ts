import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuantumService } from 'src/app/shared/quantum.service';

@Component({
  selector: 'app-preview-quantum',
  templateUrl: './preview-quantum.component.html',
  styleUrls: ['./preview-quantum.component.css'],
})
export class PreviewQuantumComponent implements OnInit {
  startDate = '';
  endDate = '';

  //data
  data:
    | [
        {
          _id: string;
          resourceId: string;
          resourceName: string;
          dateAndValue: [
            {
              _id: string;
              date: Date;
              value: number;
            }
          ];
        }
      ]
    | undefined;

  //date and values of first element set
  dateAndValues!: [
    {
      _id: string;
      date: Date;
      value: number;
    }
  ];

  constructor(public quantumService: QuantumService, private router: Router) {}

  ngOnInit(): void {
    if (this.quantumService.QuantumType == '') {
      this.router.navigateByUrl('/quantum');
    }
  }

  //set start date
  setStartDate(event: any) {
    this.startDate = event.target.value;
  }

  //set end date
  setEndDate(event: any) {
    this.endDate = event.target.value;
  }

  previewData() {
    this.quantumService
      .previewQuantumData(this.startDate, this.endDate)
      .subscribe(
        (res) => {
          console.log(res['data']);
          this.data = res['data'];

          this.dateAndValues = res['data'][0].dateAndValue;
          console.log(this.dateAndValues);
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
