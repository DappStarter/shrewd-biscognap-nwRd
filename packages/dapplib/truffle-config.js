require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift raise place hockey hunt derive obscure thrive'; 
let testAccounts = [
"0x5d329a0d4a56f4f8cc54c1d9058cbedc397c3b10546cb1c4358389b43f55072f",
"0xfc95ad49fc04079c942019b0750e073ef35d848d7f3d650c0e623e48f889065c",
"0xd0e72a461ef14182e7152d741d37915e1c5a83eecd539a3bcfd6db2ea24f8107",
"0xac47764536a2d70f2287278b17e06dc4ea285d459b533fe2ba574bbe6f6469bf",
"0x7cc4b5e175134120c412495b9c1a574bec3eebdf45c227b841e1c06b3b6be4ac",
"0x818af2b98b87eed480718e31433efda406e821c24ef0767e176dc328aefab66b",
"0x1cee85ab4a22ec2d6cc8a413a4e3c458a3af22608568d909ddc89e36a242988e",
"0x129aebf0f03e53663a22e8daced63bf6441ba74b8a9d3ead125400931bb624cb",
"0xf2ffc0ec187faed77a470ad992e5b6893d62ef26e875353faf27cf6c9e83bf0c",
"0xa0161126528d9ee2fc0acaea1d39e73849f3f5823c662927942c43d49cc18cac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


