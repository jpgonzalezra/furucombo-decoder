// HUniswapV2 -> 0x58a21cfCee675d65D577B251668f7dC46Ea9c3A0
// --------------------------------------------------------

import { ethers } from 'ethers';
import { ParamType } from 'ethers/lib/utils';
import { mapValues } from 'lodash';
import { Result } from '../types';
import {
  decodeDataUsingFunctionsBySignature,
  getSignatureUsingSha3,
} from '../utils';

const decodeFunctionBySignatures: Map<string, Function> = new Map([
  [
    getSignatureUsingSha3(
      'addLiquidityETH(uint256,address,uint256,uint256,uint256)'
    ),
    (data: string) => addLiquidityETH(data),
  ],
  [
    getSignatureUsingSha3(
      'addLiquidity(address,address,uint256,uint256,uint256,uint256)'
    ),
    (data: string) => addLiquidity(data),
  ],
  [
    getSignatureUsingSha3(
      'removeLiquidityETH(address,uint256,uint256,uint256)'
    ),
    (data: string) => removeLiquidityETH(data),
  ],
  [
    getSignatureUsingSha3(
      'removeLiquidity(address,address,uint256,uint256,uint256)'
    ),
    (data: string) => removeLiquidity(data),
  ],
  [
    getSignatureUsingSha3('swapExactETHForTokens(uint256,uint256,address[])'),
    (data: string) => swapExactETHForTokens(data),
  ],
  [
    getSignatureUsingSha3('swapETHForExactTokens(uint256,uint256,address[])'),
    (data: string) => swapETHForExactTokens(data),
  ],
  [
    getSignatureUsingSha3('swapExactTokensForETH(uint256,uint256,address[])'),
    (data: string) => swapExactTokensForETH(data),
  ],
  [
    getSignatureUsingSha3('swapTokensForExactETH(uint256,uint256,address[])'),
    (data: string) => swapTokensForExactETH(data),
  ],
  [
    getSignatureUsingSha3(
      'swapExactTokensForTokens(uint256,uint256,address[])'
    ),
    (data: string) => swapExactTokensForTokens(data),
  ],
  [
    getSignatureUsingSha3(
      'swapTokensForExactTokens(uint256,uint256,address[])'
    ),
    (data: string) => swapTokensForExactTokens(data),
  ],
]);

export const execUniswap = (data: string) =>
  decodeDataUsingFunctionsBySignature(decodeFunctionBySignatures, data);

export const addLiquidityETH = (data: string): Result => {
  return {};
};
export const addLiquidity = (data: string): Result => {
  return {};
};
export const removeLiquidityETH = (data: string): Result => {
  return {};
};
export const removeLiquidity = (data: string): Result => {
  return {};
};

const swapExactETHForTokens = (data: string): Result => {
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
  return mapValues(decodedData);
};

export const swapETHForExactTokens = (data: string): Result => {
  return {};
};

const swapExactTokensForETH = (data: string): Result => {
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
  return mapValues(decodedData);
};

export const swapTokensForExactETH = (data: string): Result => {
  return {};
};
export const swapExactTokensForTokens = (data: string): Result => {
  return {};
};
export const swapTokensForExactTokens = (data: string): Result => {
  return {};
};
