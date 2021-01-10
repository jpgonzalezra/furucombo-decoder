// TODO:

import { getSignatureUsingSha3 } from './utils';

describe('utils', () => {
  it('resolve signature using keccak256', () => {
    expect('0x58871c81').toEqual(
      getSignatureUsingSha3(
        'addLiquidityETH(uint256,address,uint256,uint256,uint256)'
      )
    );
    expect('0x3351733f').toEqual(
      getSignatureUsingSha3(
        'addLiquidity(address,address,uint256,uint256,uint256,uint256)'
      )
    );
    //                 // 0xa1cfacde
    expect('0xa1cfacde').toEqual(
      getSignatureUsingSha3(
        'removeLiquidityETH(address,uint256,uint256,uint256)'
      )
    );
    expect('0xe2dc85dc').toEqual(
      getSignatureUsingSha3(
        'removeLiquidity(address,address,uint256,uint256,uint256)'
      )
    );
    expect('0xd0241dac').toEqual(
      getSignatureUsingSha3('swapExactETHForTokens(uint256,uint256,address[])')
    );
    expect('0x87151a79').toEqual(
      getSignatureUsingSha3('swapETHForExactTokens(uint256,uint256,address[])')
    );
    expect('0xef66f725').toEqual(
      getSignatureUsingSha3('swapExactTokensForETH(uint256,uint256,address[])')
    );
    expect('0x18a22c40').toEqual(
      getSignatureUsingSha3('swapTokensForExactETH(uint256,uint256,address[])')
    );
    expect('0x86818f26').toEqual(
      getSignatureUsingSha3(
        'swapExactTokensForTokens(uint256,uint256,address[])'
      )
    );
    expect('0x397d4b4a').toEqual(
      getSignatureUsingSha3(
        'swapTokensForExactTokens(uint256,uint256,address[])'
      )
    );
    expect(() => {
      getSignatureUsingSha3('');
    }).toThrow(Error);
  });
});
