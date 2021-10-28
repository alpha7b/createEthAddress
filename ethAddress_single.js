const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')

const mnemonic = bip39.generateMnemonic()
console.log('mnemonic: ' + mnemonic) //生成助记词

async function getAddress(mnemonic){
    const seed = await bip39.mnemonicToSeed(mnemonic) //生成种子
    const hdwallet = HDWallet.fromSeed(seed)

    const key = hdwallet.derive("m/44' /60' /0' /0/0") //地址路径
    console.log("PrivateKey = " + key.getPrivateKey().toString('hex')) //私钥
    console.log("PublicKey = " + key.getPublicKey().toString('hex')) //公钥
    const EthAddress = '0x' + key.getAddress().toString('hex') //地址
    console.log("ETH Address = " + EthAddress)

}
getAddress(mnemonic) //执行函数
