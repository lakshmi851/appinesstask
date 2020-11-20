import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//import customers from '../customers.json'
import * as customers from '../../customers.json';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  customersList = (customers as any).default;
  title = 'appBootstrap';
   options: any[] = ["Order_Recieved","Preparing","Ready_to_serve"];

  closeResult: string;
  selectedCustomer:any
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.customersList.forEach(element => {
      element.hidePrepare=true
       element.hideRecive=true
       element.hideReady=true

      element.status==this.options[0]?element.hideRecive=false:true
      element.status==this.options[1]?element.hidePrepare=false:true
      element.status==this.options[2]?element.hideReady=false:true


    });
    console.log(this.customersList)

  }
  open(content,selectedCustomer) {
    this.selectedCustomer=selectedCustomer;
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ChangeStatus(x,status)
  {
    x.status = status;
    x.hidePrepare=true
    x.hideRecive=true
    x.hideReady=true

   x.status==this.options[0]?x.hideRecive=false:true
   x.status==this.options[1]?x.hidePrepare=false:true
   x.status==this.options[2]?x.hideReady=false:true
  }
}
