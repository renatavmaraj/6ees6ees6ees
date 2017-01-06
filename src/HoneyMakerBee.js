class HoneyMakerBee extends Bee {
  constructor(honeyPot){
  super(honeyPot)
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
}

makeHoney() {
  this.honeyPot++;
}

giveHoney() {
  this.honeyPot--;
}

};
