"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    _fName;
    _lName;
    _age;
    _isMarried;
    constructor(fName, lName, age, isMarried) {
        this._fName = fName;
        this._lName = lName;
        this._age = age;
        this._isMarried = isMarried;
    }
    getFullNameClass = () => {
        return (`Your name is ${this._fName} ${this._lName}`);
    };
    get fName() {
        return this._fName;
    }
    set fName(value) {
        this._fName = value;
    }
    get lName() {
        return this._lName;
    }
    set lName(value) {
        this._lName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get isMarried() {
        return this._isMarried;
    }
    set isMarried(value) {
        this._isMarried = value;
    }
}
exports.Human = Human;
