import { PublicKey, AccountInfo, RpcResponseAndContext, GetProgramAccountsResponse } from '@solana/web3.js';
import { TokenAccount, TokenAccountRaw } from './types.js';
import 'bn.js';
import '../../api-dd29768d.js';
import 'axios';
import '../../solana/type.js';
import '@solana/spl-token';
import '../../api/url.js';
import '../../common/owner.js';
import '../../common/txTool/lookupTable.js';
import '../../common/txTool/txType.js';
import 'decimal.js';
import '../../module/token.js';
import '../../common/pubKey.js';
import '../../common/logger.js';
import '../../module/currency.js';
import '../../marshmallow/index.js';
import '../../marshmallow/buffer-layout.js';
import './layout.js';

interface ParseTokenAccount {
    owner: PublicKey;
    solAccountResp?: AccountInfo<Buffer> | null;
    tokenAccountResp: RpcResponseAndContext<GetProgramAccountsResponse>;
}
declare function parseTokenAccountResp({ owner, solAccountResp, tokenAccountResp }: ParseTokenAccount): {
    tokenAccounts: TokenAccount[];
    tokenAccountRawInfos: TokenAccountRaw[];
};
declare function generatePubKey({ fromPublicKey, programId, assignSeed, }: {
    fromPublicKey: PublicKey;
    programId: PublicKey;
    assignSeed?: string;
}): {
    publicKey: PublicKey;
    seed: string;
};

export { ParseTokenAccount, generatePubKey, parseTokenAccountResp };
