class Hero{
  constructor(name, age, type) {
    this.name = name
    this.age = age
    this.type = type;

  }
  atack(){
    if (this.type == "guerreiro" || this.type == "Guerreiro") {
      console.log(`O ${this.type}, ${this.name} , atacou usando espada`)
    }
    else if (this.type == "mago" || this.type == "Mago") {
      console.log(`O ${this.type}, ${this.name} , atacou usando magia`)
    }
    else if (this.type == "monge" || this.type == "Monge") {
      console.log(`O ${this.type}, ${this.name} , atacou usando artes marciais`)
    }
    else if (this.type == "ninja" || this.type == "Ninja") {
      console.log(`O ${this.type}, ${this.name} , atacou usando shuriken`)
    } 
    else if (this.type == undefined) {
      console.log(`O esquisitão, ${this.name} , não atacou, pois esqueceu de escolher sua classe`)
    } else {
      console.log(`O ${this.type}, ${this.name} , atacou usando o que tem de melhor`)
    }

  }
}

let Richard = new Hero("Richard Lionheart", 19, "Guerreiro")
let Lisa = new Hero("Lisa", 16, "Ninja")
let Drox = new Hero("Drox Snow", 23, "Mago")
let Vexx = new Hero("Vexx Tiger", 25, "Monge")
let Maycon = new Hero("Maycon Sky", 25, "Super aprendiz")
let Lucke = new Hero ("Lucke Zen", 28)

Richard.atack()
Lisa.atack()
Drox.atack()
Vexx.atack()
Maycon.atack()
Lucke.atack()