import { BigNumber } from 'ethers';
import { execUniswap } from './decoder';

describe('furucombo uniswap decoder', () => {
  // addLiquidityETH(uint256,address,uint256,uint256,uint256)        // 0x58871c81
  it('decode addLiquidityETH operation', async () => {
    const data = '';
    const result = execUniswap(data);
    expect(result).toEqual('decoder');
  });

  // swapExactETHForTokens(uint256,uint256,address[])                // 0xd0241dac
  it.only('decode swapExactETHForTokens operation', async () => {
    const data =
      '0xd0241dac00000000000000000000000000000000000000000000000000470de4df8200000000000000000000000000000000000000000000000000000000000000d9675700000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7';
    const result = execUniswap(data);
    expect(result).toMatchObject({
      value: BigNumber.from('20000000000000000'),
      amountOutMin: BigNumber.from('14247767'),
      path: [
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      ],
    });
  });
});