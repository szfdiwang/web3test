// @ts-nocheck
const Web3 = require('web3');
const config = require('../config');

console.log(config.provider);

test('chainId', async () => {
    const web3 = new Web3(config.provider);
    // return web3.eth.getChainId().then((chainId) => {
    //     expect(chainId).toEqual(config.chainId)
    // })
    const chain = await web3.eth.getChainId()
    console.log(chain)
    expect(chain).toEqual(config.chainId)
}, 10000);