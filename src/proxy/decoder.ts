// Furucombo Proxy v0.13.1  -> 0xeebec7874f46c4452610a11fa6be0264f7f0557f
// --------------------------------------------------------
//    batchExec(address[],bytes[])       // 0x74a28f79

import { execUniswap } from "../uniswap/decoder";
import { ethers } from "ethers";
import { ParamType } from "ethers/lib/utils";
import { execHErc20TokenIn } from "../herc20tokenin/decoder";

type Result = {
  [key: string]: any;
};

const getProtocolByAddress: Map<string, Function> = new Map([
  [
    "0x58a21cfCee675d65D577B251668f7dC46Ea9c3A0",
    (data: string) => execUniswap(data),
  ],
  [
    "0x914490a362F4507058403A99E28bdF685C5c767f",
    (data: string) => execHErc20TokenIn(data),
  ],
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
      name: "tos",
      type: "address[]",
    }),
    ParamType.fromObject({
      name: "datas",
      type: "bytes[]",
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
