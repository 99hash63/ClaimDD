import { Component, OnInit } from '@angular/core';
import { columns } from 'ngx-bootstrap-icons';
import * as XLSX from 'xlsx';
import { QuantumService } from 'src/app/shared/quantum.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.css'],
})
export class DataImportComponent implements OnInit {
  data!: [][];
  rowIndex = 0;
  columnIndex = 0;
  placeId = 0;
  isFileUploaded = false;

  //import month
  importMonth = 0;
  //import start date
  importStartDate!: Date;
  //import end date
  importEndDate!: Date;

  constructor(public quantumService: QuantumService, private router: Router) {}

  ngOnInit(): void {
    if (this.quantumService.importQuantumType == '') {
      this.router.navigateByUrl('/quantum');
    }
  }

  onFileChange(evt: any) {
    const traget: DataTransfer = <DataTransfer>evt.target;

    if (traget.files.length !== 1) throw new Error('cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {
        type: 'binary',
        cellDates: true,
        dateNF: 'dd"."mm"."yyyy',
      });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        raw: false,
        dateNF: 'dd"."mm"."yyyy',
      });

      const headings: [] = this.data[0];
      this.isFileUploaded = true;

      for (var index in headings) {
        if (index == '2') {
          // console.log(headings[index]);
        }
      }
    };

    reader.readAsBinaryString(traget.files[0]);
  }

  //getting users selected month from dropdown
  onSelectedMonthChange(event: any) {
    this.importMonth = event.target.value;
  }

  //data iumport function
  importData() {
    this.data.forEach((row) => {
      row.forEach((column) => {
        // console.log(column);
      });
    });
    Swal.fire({
      title: 'Do you wish to continue import?',
      text: 'If data exists for selected month, it will be overwritten!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Import!',
      cancelButtonText: 'No, Cancel Import',
    }).then((result) => {
      if (result.isConfirmed) {
        //call function in service
        this.quantumService
          .importQuantumData(this.data, this.importMonth)
          .subscribe(
            (res) => {
              console.log(res['msg']);
              Swal.fire('Done!', 'Data imported successfully.', 'success');
            },
            (err) => {
              console.log(err.error);
              Swal.fire(
                'Opps!',
                'Error with importing data, please try again',
                'error'
              );
            }
          );
      }
      // else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire('Cancelled', 'Your company post is safe :)', 'error');
      // }
    });
  }
}
