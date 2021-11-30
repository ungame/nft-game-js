const { assert } = require("chai");

const MemoryToken = artifacts.require("./contracts/MemoryToken.sol");

require("chai")
    .use(require("chai-as-promised"))
    .should();

contract("Memory Token", (accounts) => {

    let token;

    describe("deployment", async () => {
        it("deploys successfully", async () => {
            
            token = await MemoryToken.deployed();

            const address = token.address;

            assert.notEqual(address, 0x0);
            assert.notEqual(address, "");
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);

        });

        it("has a name", async () => {
            const name = await token.name();
            assert.equal(name, "Memory Token");
        });

        it("has a symbol", async () => {
            const symbol = await token.symbol();
            assert.equal(symbol, "MTT");
        });
    });

    describe("token distribution", async () => {
        it("mints token", async () => {

            await token.mint(accounts[0], "https://www.token-uri.com/nft");

            const totalSupply = await token.totalSupply();
            assert.equal(totalSupply.toString(), "1", "total supply is correct");

            let balance = await token.balanceOf(accounts[0]);
            assert.equal(balance.toString(), "1", "balanceOf is correct");

            let owner = await token.ownerOf("0");
            assert.equal(owner.toString(), accounts[0].toString(), "ownerOf is correct");
            owner = await token.tokenOfOwnerByIndex(accounts[0], 0);

            balance = await token.balanceOf(accounts[0]);
            let nfts = [];
            for(let i = 0; i < balance; i++) {
                let id = await token.tokenOfOwnerByIndex(accounts[0], i);
                nfts.push(id);
            }
            let expected = ["0"]
            assert.equal(nfts.toString(), expected.toString(), "nfts is correct");

            const tokenURI = await token.tokenURI("0");
            assert.equal(tokenURI, "https://www.token-uri.com/nft");
        });
    });

});