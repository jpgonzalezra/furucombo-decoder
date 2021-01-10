## furucombo decoder

## Decoders

- HUniswapV2 -> 0x58a21cfCee675d65D577B251668f7dC46Ea9c3A0 | INCOMPLETE
  - addLiquidityETH(uint256,address,uint256,uint256,uint256) |
  - addLiquidity(address,address,uint256,uint256,uint256,uint256) |
  - removeLiquidityETH(address,uint256,uint256,uint256) |
  - removeLiquidity(address,address,uint256,uint256,uint256) |
  - swapExactETHForTokens(uint256,uint256,address[]) | OK
  - swapETHForExactTokens(uint256,uint256,address[]) |
  - swapExactTokensForETH(uint256,uint256,address[]) | OK
  - swapTokensForExactETH(uint256,uint256,address[]) |
  - swapExactTokensForTokens(uint256,uint256,address[]) |
  - swapTokensForExactTokens(uint256,uint256,address[]) |

- HERC20TokenIn -> 0x914490a362f4507058403a99e28bdf685c5c767f | DONE
  - inject(address[], uint256[]) | OK

- HGasToken -> 0xf2b12d6a219789026bbfd348e5929f70d7e4dbf0

- HMooniswap -> 0xb62877ef1b378620f3e357d47a3788c0cc95e7d7

- HCurveDao -> 0x23fdc9fd8b34f72c8e9783b6d53060014a04895f

- HWeth -> 0x60a3743ef3c6148b099eeba11c479cd85865c71e

- HOneInch -> 0x653ef79b04726e0de467f81d7c4479c8cbb6fa65

- HMaker -> 0x30ba0890cfb7c6d42a33154b81413afebae8a742
- HYVault -> 0x4ca6f6631d354f88ee019b619daf2e7850f91088

- HKyberNetwork -> 0x86b3fa3edd18c1d94fa0014405289c0f77b80ada

- HUniswap -> 0x47ed0892e0fd5c69bb6936d42c81c03353a6a7ca

- Compound

  - HSCompound -> 0xa502c654eeec632042393832a83c88e83d962e9e
  - HCEther -> 0x6fdb0bea9af517fed4960074aac8be424f22c758
  - HCToken -> 0x23f8fd34beb50fbc79378b540098c3b31bdd0c42

- Aave

  - HAaveProtocolV2 -> 0x7b15d5e24cad28b072e48cd4b250ec74f6a5a55c
  - HAaveProtocol -> 0xd9c746b3074552a2314b1b19728e84a7ad92fb59
    - flashLoan(address,uint256,bytes)
    - executeOperation(address,uint256,uint256,bytes)
    - deposit(address,uint256)
    - redeem(address,uint256)
