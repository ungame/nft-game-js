import { Col, Container, Row, Button } from 'react-bootstrap';
import CardBoard from '../CardBoard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MemoryActions } from '../../store/ducks/memory';
import { useBlockchain } from '../../blockchain';
import CardListView from '../CardListView';

const GameContainer = (props) => {

    const {
        isLogged,
        account,
        balance,
        tokens,
        doLogin,
        doMint,
    } = useBlockchain();

    const handleLogin = async () => {
        await doLogin();
    };

    const handleOnRegistered = async () => {
        alert("Token registrado com sucesso. A transação está sendo processada.");
    }

    const handleOnReceipt = async (receipt) => {
        alert("NFT criada com sucesso. Aguardando confirmações...");
    }

    const handleOnConfirmation = async (confirmations, receipt) => {
    }

    const handleOnError = async (err) => {
        alert("Transação falhou: ", err);
    }

    const events = {
        onRegistered: handleOnRegistered,
        onReceipt: handleOnReceipt,
        onConfirmation: handleOnConfirmation,
        onError: handleOnError,
    };

    const handleOnWonCard = (cardId, cardURL) => {
        console.log("creating nft...", {cardId, cardURL});
        doMint(cardURL, events);
    };

    return (
        <Container>
            <Row>
                <h2 className="text-center" style={{padding: "20px"}}>Memory Game</h2>
            </Row>
            {
                isLogged ? (
                    <div>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <CardBoard { ...props } onWonCard={handleOnWonCard} ></CardBoard>
                            </Col>
                        </Row>
                        <Row>
                            <CardListView tokens={tokens} />
                        </Row>
                    </div>
                ) : (
                    <Row>
                        <Col>
                            <Button variant="dark" size="lg" onClick={() => handleLogin()}>Login</Button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
};

const mapStateToProps = state => ({
    memory: state.memory
});

const mapDispatchToProps = dispatch => bindActionCreators(MemoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);