export class Category {
  ID : number
  name: string

  constructor(id?:number, name?:string) {
    this.ID = id ?? 0
    this.name = name ?? ''
  }
}
