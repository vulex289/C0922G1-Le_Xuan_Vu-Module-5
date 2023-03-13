import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../service/translate.service";
import {IWord} from "../model/iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordArr: IWord[] = [];
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.wordArr = this.translateService.wordList;
  }
}
