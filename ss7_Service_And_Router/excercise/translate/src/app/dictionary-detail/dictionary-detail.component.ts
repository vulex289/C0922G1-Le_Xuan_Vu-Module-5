import {Component, OnInit} from '@angular/core';
import {TranslateService} from "../service/translate.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  mean: string;

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.mean = this.translateService.translate(word);
    })
  }
  //cách 2:
  //     const word1 = this.activatedRoute.snapshot.params.word;
  //     this.mean= this.translateService.translate(word1);
  //   }

  }
