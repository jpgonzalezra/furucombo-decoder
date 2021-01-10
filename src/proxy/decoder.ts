// Furucombo Proxy v0.13.1  -> 0xeebec7874f46c4452610a11fa6be0264f7f0557f
// --------------------------------------------------------
//    batchExec(address[],bytes[])       // 0x74a28f79

import { execUniswap } from '../huniswap/decoder';
import { ethers } from 'ethers';
import { ParamType } from 'ethers/lib/utils';
import { execHErc20TokenIn } from '../herc20tokenin/decoder';
import { Result } from '../types';
import {
  HERC20_CONTRACT_ADDRESS,
  HUNISWAP_CONTRACT_ADDRESS,
} from '../constants';

const getProtocolByAddress: Map<string, Function> = new Map([
  [HUNISWAP_CONTRACT_ADDRESS, (data: string) => execUniswap(data)],
  [HERC20_CONTRACT_ADDRESS, (data: string) => execHErc20TokenIn(data)],
]);

export const decoder = (data: string) => {
  const dataWithoutSignature = data.slice(10);
  return batchExec(`0x${dataWithoutSignature}`);
};

// (5) 0x74a28f79
const batchExec = (data: string): Result => {
  // address[] tos,
  // bytes[] datas
  const params = [
    ParamType.fromObject({
      name: 'tos',
      type: 'address[]',
    }),
    ParamType.fromObject({
      name: 'datas',
      type: 'bytes[]',
    }),
  ];
  const decodedData = ethers.utils.defaultAbiCoder.decode(params, data);
  // creates an object with the same values that decoded (key,value) array

  const result = decodedData.tos.map((to: string, index: number) => {
    const protocol = getProtocolByAddress.get(to);
    const data = decodedData.datas[index];
    return protocol?.call(null, data);
  });
  return result;
};
