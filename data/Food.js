class Food {
  constructor(name, type, expiration) {
    this.name = name;
    this.type = type;
    this.expiration = expiration;
    this.id = name + type + expiration;
  }
}

export default Food;