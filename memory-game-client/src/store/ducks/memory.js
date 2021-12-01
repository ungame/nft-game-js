import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const Cards = [
    { name: 'fries', img: '/images/fries.png' },
    { name: 'cheeseburger', img: '/images/cheeseburger.png' },
    { name: 'ice-cream', img: '/images/ice-cream.png' }, 
    { name: 'pizza', img: '/images/pizza.png' }, 
    { name: 'milkshake', img: '/images/milkshake.png' }, 
    { name: 'hotdog', img: '/images/hotdog.png' }, 
];

export const { Types, Creators } = createActions({
    getCards: [],
    flipCard: ["cardId"],
    clearChosenCards: [],
    setWonCard: ["firstCardId", "secondCardId"]
});

export const MemoryTypes = Types;

const INITIAL_STATE = Immutable({
    cardList: Cards.concat([...Cards]),
    cardsWon: [],
    cardsChosen: [],
    cardsChosenId: [],
});

const getCards = (state = INITIAL_STATE, action) => {
    return state.cardList;
};

const flipCard = (state = INITIAL_STATE, action) => {
    const cardId = action.cardId;

    return state.merge({
        ...state,
        cardsChosen: [ ...state.cardsChosen, state.cardList[cardId].name ],
        cardsChosenId: [ ...state.cardsChosenId, cardId ],
    });
};

const clearChosenCards = (state = INITIAL_STATE, action) => {
    return state.merge({
        ...state,
        cardsChosen: [],
        cardsChosenId: [],
    });
};

const setWonCard = (state = INITIAL_STATE, action) => {
    return state.merge({
        ...state,
        cardsWon: [ ...state.cardsWon, action.firstCardId, action.secondCardId ],
    });
};

export default createReducer(INITIAL_STATE, {
    [Types.GET_CARDS]: getCards,
    [Types.FLIP_CARD]: flipCard,
    [Types.CLEAR_CHOSEN_CARDS]: clearChosenCards,
    [Types.SET_WON_CARD]: setWonCard,
});