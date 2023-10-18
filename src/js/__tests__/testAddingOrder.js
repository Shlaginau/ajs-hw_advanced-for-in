import orderByProps from '../orderByProps';

test('should add properties only if they exist in the object', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
      };
  const order = ['email', 'level'];

  const result = orderByProps(obj, order);

  const expected = [
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' }
  ];

  expect(result).toEqual(expected);
});
   