import { GameSavingLoader } from '../gameSavingLoader';

import { read } from '../reader';

const originalModule = jest.requireActual('../reader');

jest.mock('../reader');

test('GameSavingLoader', async () => {
  read.mockReturnValue(originalModule.read());
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  });
});

test('GameSavingLoader - test error', async () => {
  read.mockReturnValue(Promise.reject(new Error('Error')));

  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).toBe('Error');
  }
});
