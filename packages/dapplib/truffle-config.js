require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain modify gloom nation flee stable'; 
let testAccounts = [
"0x342ca3dc86ed47e4d7d9cdec0cbda4c1d3207411ab9126fd6566b80432402419",
"0x2cf907492c6d84275d1e246410bf7cd94d44c687b4a061f2506668c4477b0e6b",
"0x0c4e6f7f3658bfd00d0859f85a4b123c829b9c6c7c231f3b7455535275fdfa3d",
"0x4e77b6b00553d5e1ef2774fa5bdb537653150c92ea1a8679236195311bccacef",
"0x2b55a38dc0ab310bbcb0a334f6ed92b2d59f1ac451991a3c6266321d1f23cedb",
"0xbaea894947a989f9d88d8a530a463cdcf259e7d766b4f4a8f2b1ed0447a8de88",
"0x516e1c767fee4a8495f8632468752ee00bc6c6499eaa82ac9fda03854a939e95",
"0x2c08ebcae242aa63c07813df3c4268ca2b5f6e2a0564f00267ce02feefeae5df",
"0x67651000c453ecb92482d238536e5854d3b4e3cf84d6abe4bb7656704bba5a3f",
"0x8730650b9f87dfe4c5f185228eb54d30a56d1f3fea3403f7614c3e2666be8f31"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
