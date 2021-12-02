const CardListView = (props) => {
    const { tokens } = props;

    return (
        <div className="mt-3">
            <h5>Tokens coletados: <span id="result">{' '} {tokens.length}</span></h5>

            <div className="grid mb-4">
                {
                    tokens.map((tokenURI, key) => {
                        return (
                            <img 
                                key={key}
                                src={tokenURI}
                                alt=""
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default CardListView;