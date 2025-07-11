import { PublicKey } from '@solana/web3.js';

declare const FARM_PROGRAM_ID_V3: PublicKey;
declare const FARM_PROGRAM_ID_V4: PublicKey;
declare const FARM_PROGRAM_ID_V5: PublicKey;
declare const FARM_PROGRAM_ID_V6: PublicKey;
declare const UTIL1216: PublicKey;
declare const OPEN_BOOK_PROGRAM: PublicKey;
declare const SERUM_PROGRAM_ID_V3: PublicKey;
declare const AMM_V4: PublicKey;
declare const AMM_STABLE: PublicKey;
declare const LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL: PublicKey;
declare const CLMM_PROGRAM_ID: PublicKey;
declare const CLMM_LOCK_PROGRAM_ID: PublicKey;
declare const CLMM_LOCK_AUTH_ID: PublicKey;
declare const Router: PublicKey;
declare const FEE_DESTINATION_ID: PublicKey;
declare const IDO_PROGRAM_ID_V1: PublicKey;
declare const IDO_PROGRAM_ID_V2: PublicKey;
declare const IDO_PROGRAM_ID_V3: PublicKey;
declare const IDO_PROGRAM_ID_V4: PublicKey;
declare const CREATE_CPMM_POOL_PROGRAM: PublicKey;
declare const CREATE_CPMM_POOL_AUTH: PublicKey;
declare const CREATE_CPMM_POOL_FEE_ACC: PublicKey;
declare const DEV_CREATE_CPMM_POOL_PROGRAM: PublicKey;
declare const DEV_CREATE_CPMM_POOL_AUTH: PublicKey;
declare const DEV_CREATE_CPMM_POOL_FEE_ACC: PublicKey;
declare const LOCK_CPMM_PROGRAM: PublicKey;
declare const DEV_LOCK_CPMM_PROGRAM: PublicKey;
declare const LOCK_CPMM_AUTH: PublicKey;
declare const DEV_LOCK_CPMM_AUTH: PublicKey;
declare const LAUNCHPAD_PROGRAM: PublicKey;
declare const LAUNCHPAD_AUTH: PublicKey;
declare const DEV_LAUNCHPAD_PROGRAM: PublicKey;
declare const DEV_LAUNCHPAD_AUTH: PublicKey;
declare const IDO_ALL_PROGRAM: {
    IDO_PROGRAM_ID_V1: PublicKey;
    IDO_PROGRAM_ID_V2: PublicKey;
    IDO_PROGRAM_ID_V3: PublicKey;
    IDO_PROGRAM_ID_V4: PublicKey;
};
declare const ALL_PROGRAM_ID: {
    AMM_V4: PublicKey;
    AMM_STABLE: PublicKey;
    CLMM_PROGRAM_ID: PublicKey;
    CLMM_LOCK_PROGRAM_ID: PublicKey;
    CLMM_LOCK_AUTH_ID: PublicKey;
    FARM_PROGRAM_ID_V3: PublicKey;
    FARM_PROGRAM_ID_V5: PublicKey;
    FARM_PROGRAM_ID_V6: PublicKey;
    OPEN_BOOK_PROGRAM: PublicKey;
    SERUM_PROGRAM_ID_V3: PublicKey;
    UTIL1216: PublicKey;
    Router: PublicKey;
    CREATE_CPMM_POOL_PROGRAM: PublicKey;
    CREATE_CPMM_POOL_AUTH: PublicKey;
    CREATE_CPMM_POOL_FEE_ACC: PublicKey;
    LOCK_CPMM_PROGRAM: PublicKey;
    LOCK_CPMM_AUTH: PublicKey;
    LAUNCHPAD_PROGRAM: PublicKey;
    LAUNCHPAD_AUTH: PublicKey;
    FEE_DESTINATION_ID: PublicKey;
};
declare type ProgramIdConfig = Partial<typeof ALL_PROGRAM_ID>;
declare const DEVNET_PROGRAM_ID: {
    AMM_V4: PublicKey;
    AMM_STABLE: PublicKey;
    CLMM_PROGRAM_ID: PublicKey;
    CLMM_LOCK_PROGRAM_ID: PublicKey;
    CLMM_LOCK_AUTH_ID: PublicKey;
    FARM_PROGRAM_ID_V3: PublicKey;
    FARM_PROGRAM_ID_V5: PublicKey;
    FARM_PROGRAM_ID_V6: PublicKey;
    OPEN_BOOK_PROGRAM: PublicKey;
    SERUM_PROGRAM_ID_V3: PublicKey;
    UTIL1216: PublicKey;
    Router: PublicKey;
    CREATE_CPMM_POOL_PROGRAM: PublicKey;
    CREATE_CPMM_POOL_AUTH: PublicKey;
    CREATE_CPMM_POOL_FEE_ACC: PublicKey;
    LOCK_CPMM_PROGRAM: PublicKey;
    LOCK_CPMM_AUTH: PublicKey;
    LAUNCHPAD_PROGRAM: PublicKey;
    LAUNCHPAD_AUTH: PublicKey;
    FEE_DESTINATION_ID: PublicKey;
};

export { ALL_PROGRAM_ID, AMM_STABLE, AMM_V4, CLMM_LOCK_AUTH_ID, CLMM_LOCK_PROGRAM_ID, CLMM_PROGRAM_ID, CREATE_CPMM_POOL_AUTH, CREATE_CPMM_POOL_FEE_ACC, CREATE_CPMM_POOL_PROGRAM, DEVNET_PROGRAM_ID, DEV_CREATE_CPMM_POOL_AUTH, DEV_CREATE_CPMM_POOL_FEE_ACC, DEV_CREATE_CPMM_POOL_PROGRAM, DEV_LAUNCHPAD_AUTH, DEV_LAUNCHPAD_PROGRAM, DEV_LOCK_CPMM_AUTH, DEV_LOCK_CPMM_PROGRAM, FARM_PROGRAM_ID_V3, FARM_PROGRAM_ID_V4, FARM_PROGRAM_ID_V5, FARM_PROGRAM_ID_V6, FEE_DESTINATION_ID, IDO_ALL_PROGRAM, IDO_PROGRAM_ID_V1, IDO_PROGRAM_ID_V2, IDO_PROGRAM_ID_V3, IDO_PROGRAM_ID_V4, LAUNCHPAD_AUTH, LAUNCHPAD_PROGRAM, LIQUIDITY_POOL_PROGRAM_ID_V5_MODEL, LOCK_CPMM_AUTH, LOCK_CPMM_PROGRAM, OPEN_BOOK_PROGRAM, ProgramIdConfig, Router, SERUM_PROGRAM_ID_V3, UTIL1216 };
