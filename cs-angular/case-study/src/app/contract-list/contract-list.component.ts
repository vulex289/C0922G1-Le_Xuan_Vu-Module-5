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
  dateStart = '';
  dateEnd = '';

  ngOnInit(): void {
    this.searchByDate();
  }

  getAll() {
    return this.contractService.getAll().subscribe((contract) => {
      this.contracts = contract;
    });
  }

  searchByDate() {
    if (this.dateEnd === '' && this.dateStart === '') {
      console.log(this.dateStart);
      this.getAll();
    } else {
      this.contractService.searchByDate(this.dateStart, this.dateEnd).subscribe(item => {
        this.contracts = item;
      });
    }
  }
}
