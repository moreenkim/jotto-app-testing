import moxios from 'moxios';
import { storeFactory } from '../test/testUtils';
import { getSecretWord } from './index';

describe('get SecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    const SecretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(SecretWord);
    });
  });
});
