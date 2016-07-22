export class Employee {
  constructor(
    public firstName: string=null,
    public middleName: string=null,
    public lastName:string=null,
    public gender=false){

  }
  toString(){
    return this.firstName+' '+this.middleName+' '+this.lastName+(this.gender? ' Male':' Female');
  }
}
