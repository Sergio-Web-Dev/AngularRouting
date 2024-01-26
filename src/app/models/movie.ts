export class Movie {
  id:number
  title:string
  description: string
  genere : Genere
  url: string

  constructor(id?:number, title?:string, description?:string, genere?:Genere, url?: string){
    this.id = id ?? 0
    this.title = title ?? ''
    this.description = description ?? ''
    this.genere = genere ?? Genere.Undefined
    this.url = url ?? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  }
}

export enum Genere{
  Undefined,
  Action,
  Horror,
  SciFi,
  Comedy,
  Documentary,
  Romance
}
