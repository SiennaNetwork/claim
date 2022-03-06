import { StdFee } from 'secretjs/types/types';
import { SigningCosmWasmClient, CosmWasmClient } from 'secretjs';

// Claims vested tokens. Useful for investors.
export const claimVestedTokens = (secretjs: SigningCosmWasmClient, address: string, fee?: StdFee) => {
  return secretjs.execute(address, {
    claim: {},
  },
    '',
    [],
    fee
  );
};


export const queryClaimStatus = (secretjs: CosmWasmClient, unixTime: number, address: string): Promise<any> => {
  return secretjs.queryContractSmart(process.env.MGMT_CONTRACT, {
    progress: {
      address,
      time: unixTime
    },
  }
  );
};



