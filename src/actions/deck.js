import { DECK } from './types';

export const fetchDeckResult = deckJson => {
  const { remaining, deck_id } = deckJson;

  return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => {
  return { type: DECK.FETCH_ERROR, message: error.message };
}

export const fetchNewDeck = () => dispatch => {
  return fetch(`${DECK.FETCH_API}/new/shuffle`)
  .then(response => {
    if (response.status !== 200)
      throw new Error('Unsuccessful request to deckofcardsapi.com');

    return response.json();
  })
  .then(json => dispatch(fetchDeckResult(json)))
  .catch(error => dispatch(fetchDeckError(error)));
}