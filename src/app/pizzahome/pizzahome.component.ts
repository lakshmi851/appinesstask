import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//import customers from '../customers.json'
import * as customers from '../../customers.json';


@Component({
  selector: 'app-pizzahome',
  templateUrl: './pizzahome.component.html',
  styleUrls: ['./pizzahome.component.scss']
})
export class PizzahomeComponent implements OnInit {
    constructor(private modalService: NgbModal) {}
  //npm install --save @ng-bootstrap/ng-bootstrap need to be installed
  ngOnInit(): void {
    
  }
  
}
