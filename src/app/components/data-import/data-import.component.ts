import { Component, OnInit } from '@angular/core';
import { columns } from 'ngx-bootstrap-icons';
import * as XLSX from 'xlsx';
import { QuantumResourcesManpowerAdmin } from '../../shared/quantum-resources-manpower-admin.model';
import { QuantumResourcesManpowerAdminService } from 'src/app/shared/quantum-resources-manpower-admin.service';

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.css'],
})
export class DataImportComponent implements OnInit {
  data!: [][];
  rowIndex = 0;
  columnIndex = 0;
  dateStartIndex = 0;
  dateEndIndex = 0;
  placeId = 0;
  isFileUploaded = false;

  //import month
  importMonth = 0;
  //import start date
  importStartDate!: Date;
  //import end date
  importEndDate!: Date;
  //qrma object
  qrma: QuantumResourcesManpowerAdmin = {
    resourceId: '',
    resourceName: '',
    date: '',
    project: '',
    value: 0,
  };

  constructor(
    public quantumResourcesManpowerAdminService: QuantumResourcesManpowerAdminService
  ) {}

  ngOnInit(): void {}

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

  incrementRowIndex() {
    this.rowIndex += 1;
  }

  incrementColumnIndex() {
    this.columnIndex += 1;
  }

  //set start and end dates and indexes
  setDateIndex(index: any) {
    //restrat interface table
    this.rowIndex = 0;
    this.columnIndex = 0;
    // alert(this.dateStartIndex);

    if (this.dateStartIndex == 0) {
      this.dateStartIndex = index.value;
      this.importStartDate = this.data[0][this.dateStartIndex - 1];
      // console.log(this.importStartDate);
    } else if (this.dateEndIndex == 0) {
      this.dateEndIndex = index.value;
      this.importEndDate = this.data[0][this.dateEndIndex - 1];
    } else {
      return;
    }
    // console.log('start' + this.dateStartIndex);
    // console.log('end' + this.dateEndIndex);
  }

  //reset start and end dates
  resetStartAndEnd() {
    //restrat interface table
    this.rowIndex = 0;
    this.columnIndex = 0;

    this.dateStartIndex = 0;
    this.dateEndIndex = 0;
  }
  //getting users selected month from dropdown
  onSelectedMonthChange(event: any) {
    this.importMonth = event.target.value;
    alert(this.importMonth);
  }
  //data iumport function
  importData() {
    this.data.forEach((row) => {
      row.forEach((column) => {
        // console.log(column);
      });
    });

    //call function in service
    this.quantumResourcesManpowerAdminService
      .addQuantumResourcesManpowerAdmin(this.data, this.importMonth)
      .subscribe(
        (res) => {
          console.log(res['msg']);
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
