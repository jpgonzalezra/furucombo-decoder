import { execHErc20TokenIn } from './decoder';

describe('furucombo herc20tokenin decoder', () => {
  // inject(uint256,uint256,address[])                // 0xd0241dac
  it.only('decode inject operation', async () => {
    const data = '';
    const result = execHErc20TokenIn(data);
    expect(result).toMatchObject({});
  });
});
