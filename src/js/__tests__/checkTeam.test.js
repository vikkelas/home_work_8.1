/* eslint-disable linebreak-style */
import Character from '../Character';
import Team from '../Team';

const hero1 = new Character('Vedmak');
const team = new Team();

test('check function team.add and throw Error', () => {
  team.add(hero1);
  expect(() => team.members.has(hero1)).toBeTruthy();
});

test('check function team.add return throw Error', () => {
  expect(() => team.add(hero1)).toThrow();
});
