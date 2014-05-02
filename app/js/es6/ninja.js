/* exported Ninja */   //
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Ninja{  // this is a function but you don't write function for class
  constructor(gender, weapon, name, age, photo){  //have to spell out contructor correctly
    this.id = animalId++;
    this.name = name;
    this.age = age *1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'ninja';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
