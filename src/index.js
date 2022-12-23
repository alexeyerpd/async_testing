import { GameSavingLoader } from './js/gameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
    console.error(e);
  }
})();
