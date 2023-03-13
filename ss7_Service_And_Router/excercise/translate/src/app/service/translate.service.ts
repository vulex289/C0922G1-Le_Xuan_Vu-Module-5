import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() {
  }

  wordList: IWord[] = [{
    word: "red",
    mean: "đỏ"
  },
    {
      word: "bonjour",
      mean: "xin chào"
    },
    {
      word: "messi",
      mean: "Cảm ơn"
    },
    {
      word: "au revoir",
      mean: "Hẹn gặp lại"
    },
    {
      word: "moi",
      mean: "Tôi"
    },
    ]

  translate(value: string) {
    return this.wordList.find(item => item.word === value).mean

  }
}
