import { isEmpty, isNil } from 'lodash';
import { keccak256 } from 'js-sha3';

export const decodeDataUsingFunctionsBySignature = (
  functions: Map<string, Function>,
  data: string
) => {
  const signature = data.slice(0, 10);
  const decoder = functions.get(signature);

  if (isNil(decoder)) {
    throw Error('invalid signature');
  }

  const dataWithoutSignature = data.slice(10);
  return decoder.call(null, `0x${dataWithoutSignature}`);
};

export const getSignatureUsingSha3 = (data: string) => {
  if (isEmpty(data)) {
    throw Error('getSignatureUsingSha3: invalid data');
  }
  return `0x${keccak256(data).slice(0, 8)}`;
};
