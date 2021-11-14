/* eslint-disable linebreak-style */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('such a character is alredy in the team');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
