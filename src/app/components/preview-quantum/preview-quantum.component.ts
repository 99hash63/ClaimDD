import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuantumService } from 'src/app/shared/quantum.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preview-quantum',
  templateUrl: './preview-quantum.component.html',
  styleUrls: ['./preview-quantum.component.css'],
})
export class PreviewQuantumComponent implements OnInit {
  startDate = '';
  endDate = '';
  resourceId!: string;
  date: any;
  value!: string;

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
      date: any;
      value: number;
    }
  ];
  //date and values of first element set (converted dates to string)
  dateAndValuesString!: [
    {
      _id: string;
      date: string;
      value: number;
    }
  ];
  closeResult: string = '';

  constructor(
    private modalService: NgbModal,
    public quantumService: QuantumService,
    private router: Router
  ) {}

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

          this.dateAndValues.forEach((dateAndValue) => {
            dateAndValue.date = new Date(dateAndValue.date).toDateString();
          });
          this.dateAndValuesString = this.dateAndValues;
          console.log(this.dateAndValues);
        },
        (err) => {
          console.log(err.error);
        }
      );
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addQuantumForm(form: NgForm) {
    this.quantumService
      .addSingleQuantumData(this.resourceId, this.date, this.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.error);
        }
      );
  }

  deleteQuantumData(resourceId: string) {
    alert(resourceId);
    this.quantumService
      .deleteQuantumData(resourceId, this.startDate, this.endDate)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
