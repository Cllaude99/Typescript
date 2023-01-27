abstract class AbstractPerson5{
  abstract name: string
  constructor(public age?: number){}
}

class Person5 extends AbstractPerson5{
  constructor(public name: string, public age?: number){
    super(age)
  }
}