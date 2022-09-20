// @ts-nocheck
const Web3 = require('web3');

test('version', () => {
    expect(Web3.version).toEqual("1.8.0");
});