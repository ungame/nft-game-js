import { useEffect } from 'react';

const GameBoard = (props) => {

    const { flipCard, clearChosenCards, setWonCard, onWonCard, memory } = props;
    const { cardList, cardsWon, cardsChosenId, cardsChosen } = memory;

    const chooseImage = (cardId) => {
        const cardIdStr = cardId.toString();

        if(cardsWon.includes(cardIdStr)) {
            return window.location.origin + "/images/white.png";
        }

        if(cardsChosenId.includes(cardIdStr)) {
            return cardList[cardIdStr].img;
        }

        return window.location.origin + "/images/blank.png";
    };

    const checkAlreadyWonCard = (cardId) => cardsWon.includes(cardId);

    const handleFlipCard = (cardId) => flipCard(cardId);

    const handleOnWonCard = (cardId, cardImage) => {
        if (onWonCard) {
            const cardURL = window.location.origin + cardImage;
            onWonCard(cardId, cardURL);
        }
    };

    const checkForMatch = () => {
        const [ firstCardId, secondCardId ] = cardsChosenId;

        if (firstCardId === secondCardId) {
            alert("Esta carta já foi selecionada!");
        } else if (cardsChosen[0] === cardsChosen[1]) {

            alert("Parabéns!!! Um par de cartas identicas foi encontrada!");

            setWonCard(firstCardId, secondCardId);

            handleOnWonCard(firstCardId, cardList[firstCardId].img);

        } else {
            alert("ERROOOOOOOOOOOOOOOOOOOOOOOOUUUUUUUUUU!!!!");
        }

        clearChosenCards();
    };

    useEffect(() => {
        let alreadyChosen = cardsChosen.length;
        if (alreadyChosen === 2) {
            checkForMatch();
        }
    }, [cardsChosen]);

    return cardList.map((card, key) => {
        return (
            <img 
                key={key}
                alt=""
                src={chooseImage(key)}
                data-id={key}
                onClick={(event) => {
                    let cardId = event.target.getAttribute("data-id");

                    if(!checkAlreadyWonCard(cardId)) {
                        handleFlipCard(cardId);
                    }
                }}
            />
        );
    });

};

export default GameBoard;