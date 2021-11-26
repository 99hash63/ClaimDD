import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/shared/events.service';
import { Events } from 'src/app/shared/events.model';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  title = 'appBootstrap';
  public eventsList: Events[] = [];

  closeResult: string = '';
  constructor(
    private modalService: NgbModal,
    public eventsService: EventsService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getEvents();
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

  getEvents() {
    this.eventsService.getEvents().subscribe(
      (res) => {
        this.eventsList = res['data'];

        this.eventsList.forEach((event) => {
          event.startDate = this.datepipe.transform(
            event.startDate,
            'yyyy-MM-dd'
          );

          event.endDate = this.datepipe.transform(event.endDate, 'yyyy-MM-dd');
        });
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  addEventsForm(form: NgForm) {
    this.eventsService.addEvents(form.value).subscribe(
      (res) => {
        console.log('evnt added successfully');
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
