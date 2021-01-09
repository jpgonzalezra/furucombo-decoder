// HERC20TokenIn -> 0x914490a362f4507058403a99e28bdf685c5c767f
// --------------------------------------------------------
//    inject(address[],uint256[])                // 0xd0797f84

import { ethers } from 'ethers';
import { ParamType } from 'ethers/lib/utils';
import { mapValues } from 'lodash';
import { Result } from '../types';
import { decodeDataUsingFunctionsBySignature } from '../utils';

const decodeFunctionBySignatures: Map<string, Function> = new Map([
  ['0xd0797f84', (data: string) => inject(data)],
]);

export const execHErc20TokenIn = (data: string) =>
  decodeDataUsingFunctionsBySignature(decodeFunctionBySignatures, data);

// (1) 0xd0797f84
const inject = (data: string): Result => {
  // address[] calldata tokens,
  // uint256[] calldata amounts
  const params = [
    ParamType.fromObject({
      name: 'tokens',
      type: 'address[]',
    }),
    ParamType.fromObject({
      name: 'amounts',
      type: 'uint256[]',
    }),
  ];
  const decodedData = ethers.utils.defaultAbiCoder.decode(params, data);
  // creates an object with the same values that decoded (key,value) array
  return mapValues(decodedData);
};
