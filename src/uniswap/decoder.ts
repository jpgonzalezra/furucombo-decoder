// HUniswapV2 -> 0x58a21cfCee675d65D577B251668f7dC46Ea9c3A0
// --------------------------------------------------------
//    addLiquidityETH(uint256,address,uint256,uint256,uint256)        // 0x58871c81
//    addLiquidity(address,address,uint256,uint256,uint256,uint256)   // 0x3351733f
//    removeLiquidityETH(address,uint256,uint256,uint256)             // 0xa1cfacde
//    removeLiquidity(address,address,uint256,uint256,uint256)        // 0xe2dc85dc
//    (5) -> swapExactETHForTokens(uint256,uint256,address[])         // 0xd0241dac
//    swapETHForExactTokens(uint256,uint256,address[])                // 0x87151a79
//    (7) -> swapExactTokensForETH(uint256,uint256,address[])         // 0xef66f725
//    swapTokensForExactETH(uint256,uint256,address[])                // 0x18a22c40
//    swapExactTokensForTokens(uint256,uint256,address[])             // 0x86818f26
//    swapTokensForExactTokens(uint256,uint256,address[])             // 0x397d4b4a

import { ethers } from 'ethers';
import { ParamType } from 'ethers/lib/utils';
import { mapValues } from 'lodash';
import { Result } from '../types';
import { decodeDataUsingFunctionsBySignature } from '../utils';

const decodeFunctionBySignatures: Map<string, Function> = new Map([
  ['0xd0241dac', (data: string) => swapExactETHForTokens(data)],
  ['0xef66f725', (data: string) => swapExactTokensForETH(data)],
]);

export const execUniswap = (data: string) =>
  decodeDataUsingFunctionsBySignature(decodeFunctionBySignatures, data);

// (5) 0xd0241dac
const swapExactETHForTokens = (data: string): Result => {
  // uint256 value,
  // uint256 amountOutMin,
  // address[] calldata path
  const params = [
    ParamType.fromObject({
      name: 'value',
      type: 'uint256',
    }),
    ParamType.fromObject({
      name: 'amountOutMin',
      type: 'uint256',
    }),
    ParamType.fromObject({
      name: 'path',
      type: 'address[]',
    }),
  ];
  const decodedData = ethers.utils.defaultAbiCoder.decode(params, data);
  // creates an object with the same values that decoded (key,value) array
  return mapValues(decodedData);
};

// (7) 0xef66f725
const swapExactTokensForETH = (data: string): Result => {
  // uint256 amountIn,
  // uint256 amountOutMin,
  // address[] calldata path
  const params = [
    ParamType.fromObject({
      name: 'amountIn',
      type: 'uint256',
    }),
    ParamType.fromObject({
      name: 'amountOutMin',
      type: 'uint256',
    }),
    ParamType.fromObject({
      name: 'path',
      type: 'address[]',
    }),
  ];
  const decodedData = ethers.utils.defaultAbiCoder.decode(params, data);
  // creates an object with the same values that decoded (key,value) array
  return mapValues(decodedData);
};
