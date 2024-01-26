import { Injectable } from '@angular/core';
import { Genere } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class GenereService {
  generes: { key:Genere, value:string }[] = []

  constructor() {
    this.generes.push({key: Genere.Undefined, value: Genere[Genere.Undefined]})
    this.generes.push({key: Genere.Action, value: Genere[Genere.Action]})
    this.generes.push({key: Genere.Comedy, value: Genere[Genere.Comedy]})
    this.generes.push({key: Genere.Documentary, value: Genere[Genere.Documentary]})
    this.generes.push({key: Genere.Horror, value: Genere[Genere.Horror]})
    this.generes.push({key: Genere.Romance, value: Genere[Genere.Romance]})
    this.generes.push({key: Genere.SciFi, value: Genere[Genere.SciFi]})

    //Sort alphabetically
    // this.generes.sort((a, b) => {
    //   if(a.value < b.value) { return -1; }
    //   if(a.value > b.value) { return 1; }
    //   return 0;
    // })
    this.generes.sort((a, b) => a.key - b.key);
  }

  getAll(){
    return this.generes
  }

}
