import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { PurchaseInstructionKeys, ClaimInstructionKeysV3, ClaimInstructionKeys, IdoClaimInstructionParams } from './type.js';
import '../../api-dd29768d.js';
import 'axios';
import '../../solana/type.js';
import 'bn.js';
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

declare function makePurchaseInstruction({ programId, amount, instructionKeys, }: {
    programId: PublicKey;
    amount: string | number;
    instructionKeys: PurchaseInstructionKeys;
}): TransactionInstruction;
declare function makeClaimInstruction<Version extends "" | "3" = "">({ programId }: {
    programId: PublicKey;
}, instructionKeys: Version extends "3" ? ClaimInstructionKeysV3 : ClaimInstructionKeys): TransactionInstruction;
declare function makeClaimInstructionV4(params: IdoClaimInstructionParams): TransactionInstruction;

export { makeClaimInstruction, makeClaimInstructionV4, makePurchaseInstruction };
