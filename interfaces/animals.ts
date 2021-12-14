interface AnimalsInterface {
    color: string
    height: string
}

abstract class Animals implements AnimalsInterface {
    color: string
    height: string

    constructor(color: string, height: string){
        this.color = color
        this.height = height
    }
}

abstract class AnimalsWithBreed extends Animals {
    breed: string

    constructor(color: string, height: string, breed: string){
        super(color, height)
        this.breed = breed
    }
}


class Dog extends AnimalsWithBreed {
    collar: string

    constructor(color: string, height: string, breed: string, collar: string){
        super(color, height, breed)
        this.collar = collar
    }
}

class Horse extends AnimalsWithBreed {
    dateToChangeHorseshoe: Date

    constructor(color: string, height: string, breed: string, dateToChangeHorseshoe: Date){
        super(color, height, breed)
        this.dateToChangeHorseshoe = dateToChangeHorseshoe
    }
}