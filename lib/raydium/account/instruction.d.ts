import { PublicKey, TransactionInstruction, Signer, Connection, Commitment } from '@solana/web3.js';
import { ay as AddInstructionParam, af as BigNumberish } from '../../api-dd29768d.js';
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

declare function initTokenAccountInstruction(params: {
    mint: PublicKey;
    tokenAccount: PublicKey;
    owner: PublicKey;
    programId?: PublicKey;
}): TransactionInstruction;
declare function closeAccountInstruction(params: {
    tokenAccount: PublicKey;
    payer: PublicKey;
    multiSigners?: Signer[];
    owner: PublicKey;
    programId?: PublicKey;
}): TransactionInstruction;
interface CreateWSolTokenAccount {
    connection: Connection;
    payer: PublicKey;
    owner: PublicKey;
    amount: BigNumberish;
    commitment?: Commitment;
    skipCloseAccount?: boolean;
}
/**
 * WrappedNative account = wsol account
 */
declare function createWSolAccountInstructions(params: CreateWSolTokenAccount): Promise<AddInstructionParam & {
    addresses: {
        newAccount: PublicKey;
    };
}>;
declare function makeTransferInstruction({ source, destination, owner, amount, multiSigners, tokenProgram, }: {
    source: PublicKey;
    destination: PublicKey;
    owner: PublicKey;
    amount: BigNumberish;
    multiSigners?: Signer[];
    tokenProgram?: PublicKey;
}): TransactionInstruction;

export { closeAccountInstruction, createWSolAccountInstructions, initTokenAccountInstruction, makeTransferInstruction };
