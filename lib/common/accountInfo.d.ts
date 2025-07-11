import { Commitment, Connection, PublicKey, AccountInfo } from '@solana/web3.js';
import { bZ as ReturnTypeFetchMultipleMintInfos } from '../api-dd29768d.js';
import 'axios';
import '../solana/type.js';
import 'bn.js';
import '@solana/spl-token';
import '../api/url.js';
import './owner.js';
import './txTool/lookupTable.js';
import './txTool/txType.js';
import 'decimal.js';
import '../module/token.js';
import './pubKey.js';
import './logger.js';
import '../module/currency.js';
import '../marshmallow/index.js';
import '../marshmallow/buffer-layout.js';

interface GetMultipleAccountsInfoConfig {
    batchRequest?: boolean;
    commitment?: Commitment;
    chunkCount?: number;
}
declare function getMultipleAccountsInfo(connection: Connection, publicKeys: PublicKey[], config?: GetMultipleAccountsInfoConfig): Promise<(AccountInfo<Buffer> | null)[]>;
declare function getMultipleAccountsInfoWithCustomFlags<T extends {
    pubkey: PublicKey;
}>(connection: Connection, publicKeysWithCustomFlag: T[], config?: GetMultipleAccountsInfoConfig): Promise<({
    accountInfo: AccountInfo<Buffer> | null;
} & T)[]>;
declare enum AccountType {
    Uninitialized = 0,
    Mint = 1,
    Account = 2
}
declare const ACCOUNT_TYPE_SIZE = 1;
declare function fetchMultipleMintInfos({ connection, mints, config, }: {
    connection: Connection;
    mints: PublicKey[];
    config?: {
        batchRequest?: boolean;
    };
}): Promise<ReturnTypeFetchMultipleMintInfos>;

export { ACCOUNT_TYPE_SIZE, AccountType, GetMultipleAccountsInfoConfig, fetchMultipleMintInfos, getMultipleAccountsInfo, getMultipleAccountsInfoWithCustomFlags };
