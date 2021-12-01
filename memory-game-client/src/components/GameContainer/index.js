import { Col, Container, Row } from 'react-bootstrap';
import CardBoard from '../CardBoard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MemoryActions } from '../../store/ducks/memory';

const GameContainer = (props) => {

    const handleOnWonCard = (cardId, cardURL) => {
        console.log("creating nft...", {cardId, cardURL});
    };

    return (
        <Container>
            <Row>
                <h2 className="text-center" style={{padding: "20px"}}>Memory Game</h2>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <CardBoard { ...props } onWonCard={handleOnWonCard} ></CardBoard>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = state => ({
    memory: state.memory
});

const mapDispatchToProps = dispatch => bindActionCreators(MemoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);