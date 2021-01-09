## furucombo decoder

## Decoders

- HUniswapV2 -> 0x58a21cfCee675d65D577B251668f7dC46Ea9c3A0          | INCOMPLETE

  - addLiquidityETH(uint256,address,uint256,uint256,uint256)        |
  - addLiquidity(address,address,uint256,uint256,uint256,uint256)   |
  - removeLiquidityETH(address,uint256,uint256,uint256)             |
  - removeLiquidity(address,address,uint256,uint256,uint256)        |
  - swapExactETHForTokens(uint256,uint256,address[])                | OK
  - swapETHForExactTokens(uint256,uint256,address[])                |
  - swapExactTokensForETH(uint256,uint256,address[])                | OK
  - swapTokensForExactETH(uint256,uint256,address[])                |
  - swapExactTokensForTokens(uint256,uint256,address[])             |
  - swapTokensForExactTokens(uint256,uint256,address[])             |

- HERC20TokenIn -> 0x914490a362f4507058403a99e28bdf685c5c767f       | DONE
  - inject(address[], uint256[])                                    | OK
