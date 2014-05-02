/* exported Alien */   //
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Alien{  // this is a function but you don't write function for class
  constructor(gender, weapon, name, age, photo){  //have to spell out contructor correctly
    this.id = animalId++;
    this.name = name;
    this.age = age *1;
    this.gender = gender;
    this.photo = '../media/dog.png';
    this.species = 'alien';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
