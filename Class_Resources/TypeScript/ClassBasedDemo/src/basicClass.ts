export class Human{

    private _fName: String;
    private _lName : String;
    private _age: number;
    private _isMarried: boolean;


    constructor(fName: String, lName: String, age: number, isMarried: boolean) {
        this._fName = fName;
        this._lName = lName;
        this._age = age;
        this._isMarried = isMarried;
    }


    public getFullNameClass =() =>{
        return(`Your name is ${this._fName} ${this._lName}`)
    }

    get fName(): String {
        return this._fName;
    }

    set fName(value: String) {
        this._fName = value;
    }

    get lName(): String {
        return this._lName;
    }

    set lName(value: String) {
        this._lName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get isMarried(): boolean {
        return this._isMarried;
    }

    set isMarried(value: boolean) {
        this._isMarried = value;
    }


}

