import {Component, OnInit} from '@angular/core';
import {ContractService} from '../service/contract/contract.service';
import {Contract} from '../model/contract/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  constructor(private contractService: ContractService) {
  }

  contracts: Contract[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.contracts = this.contractService.getAll();
  }
}
