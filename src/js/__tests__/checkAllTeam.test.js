/* eslint-disable linebreak-style */
import Character from '../Character';
import Team from '../Team';

const hero1 = new Character('Vedmak');
const hero2 = new Character('Goblin');
const hero3 = new Character('Deamon');
const hero4 = new Character('PiderMan');
const correct = ['Vedmak', 'Goblin', 'Deamon', 'PiderMan'];

test('check function team.addAll', () => {
  const team = new Team();
  team.addAll(hero1, hero2, hero3, hero4);
  expect(() => {
    for (const item of team) {
      correct.includes(item);
    }
  }).toBeTruthy();
});

test('check function team.toArray', () => {
  const team = new Team();
  team.addAll(hero1, hero2, hero3, hero4);
  const arrObj = team.toArray();
  const arrName = [];
  arrObj.forEach((element) => {
    arrName.push(element.name);
  });
  expect(arrName).toEqual(correct);
});
