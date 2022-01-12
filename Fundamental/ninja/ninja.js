class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.health, this.speed, this.strength);
    }

    drinkSake(){
        this.health += 10;
    }

}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("drink this alcoholic wisdom")
    }
}

const sensei1 = new Sensei("Edward")
sensei1.sayName();
sensei1.showStats();

sensei1.speakWisdom();