import { isNil } from 'lodash';

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
