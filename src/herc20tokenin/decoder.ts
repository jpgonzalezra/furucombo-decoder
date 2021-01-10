// HERC20TokenIn -> 0x914490a362f4507058403a99e28bdf685c5c767f
// -----------------------------------------------------------
//                    // 0xd0797f84

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
    getSignatureUsingSha3('inject(address[],uint256[])'),
    (data: string) => inject(data),
  ],
]);

export const execHErc20TokenIn = (data: string) =>
  decodeDataUsingFunctionsBySignature(decodeFunctionBySignatures, data);

const inject = (data: string): Result => {
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
  return mapValues(decodedData);
};
