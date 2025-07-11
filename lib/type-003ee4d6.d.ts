import { PublicKey, Transaction, Signer, Keypair, EpochInfo } from '@solana/web3.js';
import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { p as ApiV3PoolInfoConcentratedItem, d as ApiClmmConfigInfo, i as ApiV3Token, bW as GetTransferAmountFee, bV as TransferAmountFee, ch as Price, cg as Percent, cc as TokenAmount, bS as ComputeBudgetConfig, bT as TxTipConfig, ce as Fraction, bI as TokenInfo, D as ClmmKeys } from './api-37c6e723.js';
import { TxVersion } from './common/txTool/txType.js';
import { PoolInfoLayout, ClmmPositionLayout, LockClPositionLayoutV2 } from './raydium/clmm/layout.js';

declare const TICK_ARRAY_SIZE = 60;
declare const TICK_ARRAY_BITMAP_SIZE = 512;
interface ReturnTypeGetTickPrice {
    tick: number;
    price: Decimal;
    tickSqrtPriceX64: BN__default;
}
interface ReturnTypeGetPriceAndTick {
    tick: number;
    price: Decimal;
}
declare type Tick = {
    tick: number;
    liquidityNet: BN__default;
    liquidityGross: BN__default;
    feeGrowthOutsideX64A: BN__default;
    feeGrowthOutsideX64B: BN__default;
    rewardGrowthsOutsideX64: BN__default[];
};
declare type TickArray = {
    address: PublicKey;
    poolId: PublicKey;
    startTickIndex: number;
    ticks: Tick[];
    initializedTickCount: number;
};
declare type TickState = {
    tick: number;
    liquidityNet: BN__default;
    liquidityGross: BN__default;
    feeGrowthOutsideX64A: BN__default;
    feeGrowthOutsideX64B: BN__default;
    tickCumulativeOutside: BN__default;
    secondsPerLiquidityOutsideX64: BN__default;
    secondsOutside: number;
    rewardGrowthsOutside: BN__default[];
};
declare type TickArrayState = {
    ammPool: PublicKey;
    startTickIndex: number;
    ticks: TickState[];
    initializedTickCount: number;
};
declare class TickUtils {
    static getTickArrayAddressByTick(programId: PublicKey, poolId: PublicKey, tickIndex: number, tickSpacing: number): PublicKey;
    static getTickOffsetInArray(tickIndex: number, tickSpacing: number): number;
    static getTickArrayBitIndex(tickIndex: number, tickSpacing: number): number;
    static getTickArrayStartIndexByTick(tickIndex: number, tickSpacing: number): number;
    static getTickArrayOffsetInBitmapByTick(tick: number, tickSpacing: number): number;
    static checkTickArrayIsInitialized(bitmap: BN__default, tick: number, tickSpacing: number): {
        isInitialized: boolean;
        startIndex: number;
    };
    static getNextTickArrayStartIndex(lastTickArrayStartIndex: number, tickSpacing: number, zeroForOne: boolean): number;
    static mergeTickArrayBitmap(bns: BN__default[]): BN__default;
    static getInitializedTickArrayInRange(tickArrayBitmap: BN__default[], exTickArrayBitmap: TickArrayBitmapExtensionType, tickSpacing: number, tickArrayStartIndex: number, expectedCount: number): number[];
    static getAllInitializedTickArrayStartIndex(tickArrayBitmap: BN__default[], exTickArrayBitmap: TickArrayBitmapExtensionType, tickSpacing: number): number[];
    static getAllInitializedTickArrayInfo(programId: PublicKey, poolId: PublicKey, tickArrayBitmap: BN__default[], exTickArrayBitmap: TickArrayBitmapExtensionType, tickSpacing: number): {
        tickArrayStartIndex: number;
        tickArrayAddress: PublicKey;
    }[];
    static getAllInitializedTickInTickArray(tickArray: TickArrayState): TickState[];
    static searchLowBitFromStart(tickArrayBitmap: BN__default[], exTickArrayBitmap: TickArrayBitmapExtensionType, currentTickArrayBitStartIndex: number, expectedCount: number, tickSpacing: number): number[];
    static searchHightBitFromStart(tickArrayBitmap: BN__default[], exTickArrayBitmap: TickArrayBitmapExtensionType, currentTickArrayBitStartIndex: number, expectedCount: number, tickSpacing: number): number[];
    static checkIsOutOfBoundary(tick: number): boolean;
    static nextInitTick(tickArrayCurrent: TickArray, currentTickIndex: number, tickSpacing: number, zeroForOne: boolean, t: boolean): Tick | null;
    static firstInitializedTick(tickArrayCurrent: TickArray, zeroForOne: boolean): Tick;
    static _getTickPriceLegacy({ poolInfo, tick, baseIn, }: {
        poolInfo: ClmmPoolInfo;
        tick: number;
        baseIn: boolean;
    }): ReturnTypeGetTickPrice;
    static _getPriceAndTickLegacy({ poolInfo, price, baseIn, }: {
        poolInfo: ClmmPoolInfo;
        price: Decimal;
        baseIn: boolean;
    }): ReturnTypeGetPriceAndTick;
    static getTickPrice({ poolInfo, tick, baseIn, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        tick: number;
        baseIn: boolean;
    }): ReturnTypeGetTickPrice;
    static getPriceAndTick({ poolInfo, price, baseIn, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        price: Decimal;
        baseIn: boolean;
    }): ReturnTypeGetPriceAndTick;
}

interface ApiClmmPoint {
    price: string;
    liquidity: string;
}
interface ApiClmmConfigInfos {
    [configId: string]: ApiClmmConfigInfo;
}
interface ClmmConfigInfo {
    id: PublicKey;
    index: number;
    protocolFeeRate: number;
    tradeFeeRate: number;
    tickSpacing: number;
    fundFeeRate: number;
    fundOwner: string;
    description: string;
}
interface ClmmPoolRewardInfo {
    rewardState: number;
    openTime: BN__default;
    endTime: BN__default;
    lastUpdateTime: BN__default;
    emissionsPerSecondX64: BN__default;
    rewardTotalEmissioned: BN__default;
    rewardClaimed: BN__default;
    tokenMint: PublicKey;
    tokenVault: PublicKey;
    creator: PublicKey;
    rewardGrowthGlobalX64: BN__default;
    perSecond: Decimal;
    remainingRewards: undefined | BN__default;
    tokenProgramId: PublicKey;
}
interface ClmmPoolInfo {
    id: PublicKey;
    mintA: {
        programId: PublicKey;
        mint: PublicKey;
        vault: PublicKey;
        decimals: number;
    };
    mintB: {
        programId: PublicKey;
        mint: PublicKey;
        vault: PublicKey;
        decimals: number;
    };
    ammConfig: ClmmConfigInfo;
    observationId: PublicKey;
    creator: PublicKey;
    programId: PublicKey;
    version: 6;
    tickSpacing: number;
    liquidity: BN__default;
    sqrtPriceX64: BN__default;
    currentPrice: Decimal;
    tickCurrent: number;
    feeGrowthGlobalX64A: BN__default;
    feeGrowthGlobalX64B: BN__default;
    protocolFeesTokenA: BN__default;
    protocolFeesTokenB: BN__default;
    swapInAmountTokenA: BN__default;
    swapOutAmountTokenB: BN__default;
    swapInAmountTokenB: BN__default;
    swapOutAmountTokenA: BN__default;
    tickArrayBitmap: BN__default[];
    rewardInfos: ClmmPoolRewardInfo[];
    day: {
        volume: number;
        volumeFee: number;
        feeA: number;
        feeB: number;
        feeApr: number;
        rewardApr: {
            A: number;
            B: number;
            C: number;
        };
        apr: number;
        priceMin: number;
        priceMax: number;
    };
    week: {
        volume: number;
        volumeFee: number;
        feeA: number;
        feeB: number;
        feeApr: number;
        rewardApr: {
            A: number;
            B: number;
            C: number;
        };
        apr: number;
        priceMin: number;
        priceMax: number;
    };
    month: {
        volume: number;
        volumeFee: number;
        feeA: number;
        feeB: number;
        feeApr: number;
        rewardApr: {
            A: number;
            B: number;
            C: number;
        };
        apr: number;
        priceMin: number;
        priceMax: number;
    };
    tvl: number;
    lookupTableAccount: PublicKey;
    startTime: number;
    exBitmapInfo: TickArrayBitmapExtensionType;
}
interface ComputeClmmPoolInfo {
    id: PublicKey;
    version: 6;
    mintA: ApiV3Token;
    mintB: ApiV3Token;
    ammConfig: ClmmConfigInfo;
    observationId: PublicKey;
    exBitmapAccount: PublicKey;
    creator: PublicKey;
    programId: PublicKey;
    tickSpacing: number;
    liquidity: BN__default;
    sqrtPriceX64: BN__default;
    currentPrice: Decimal;
    tickCurrent: number;
    feeGrowthGlobalX64A: BN__default;
    feeGrowthGlobalX64B: BN__default;
    protocolFeesTokenA: BN__default;
    protocolFeesTokenB: BN__default;
    swapInAmountTokenA: BN__default;
    swapOutAmountTokenB: BN__default;
    swapInAmountTokenB: BN__default;
    swapOutAmountTokenA: BN__default;
    tickArrayBitmap: BN__default[];
    startTime: number;
    exBitmapInfo: TickArrayBitmapExtensionType;
    rewardInfos: ReturnType<typeof PoolInfoLayout.decode>["rewardInfos"];
}
interface ReturnTypeMakeHarvestTransaction {
    transactions: {
        transaction: Transaction;
        signer: Signer[];
    }[];
    address: {
        [key: string]: PublicKey;
    };
}
interface ClmmPoolPersonalPosition {
    poolId: PublicKey;
    nftMint: PublicKey;
    priceLower: Decimal;
    priceUpper: Decimal;
    amountA: BN__default;
    amountB: BN__default;
    tickLower: number;
    tickUpper: number;
    liquidity: BN__default;
    feeGrowthInsideLastX64A: BN__default;
    feeGrowthInsideLastX64B: BN__default;
    tokenFeesOwedA: BN__default;
    tokenFeesOwedB: BN__default;
    rewardInfos: {
        growthInsideLastX64: BN__default;
        rewardAmountOwed: BN__default;
        pendingReward: BN__default;
    }[];
    leverage: number;
    tokenFeeAmountA: BN__default;
    tokenFeeAmountB: BN__default;
}
declare type SDKParsedConcentratedInfo = {
    state: ClmmPoolInfo;
    positionAccount?: ClmmPoolPersonalPosition[];
};
interface ReturnTypeMakeCreatePoolTransaction {
    signers: (Signer | Keypair)[];
    transaction: Transaction;
    mockPoolInfo: ClmmPoolInfo;
}
declare type ManipulateLiquidityExtInfo = {
    address: {
        tickArrayLower: PublicKey;
        tickArrayUpper: PublicKey;
        positionNftAccount: PublicKey;
        personalPosition: PublicKey;
        protocolPosition: PublicKey;
    };
};
interface ReturnTypeGetLiquidityAmountOut {
    liquidity: BN__default;
    amountSlippageA: GetTransferAmountFee;
    amountSlippageB: GetTransferAmountFee;
    amountA: GetTransferAmountFee;
    amountB: GetTransferAmountFee;
    expirationTime: number | undefined;
}
interface ReturnTypeGetAmountsFromLiquidity {
    amountSlippageA: BN__default;
    amountSlippageB: BN__default;
}
interface ReturnTypeComputeAmountOutFormat {
    allTrade: boolean;
    realAmountIn: TransferAmountFee;
    amountOut: TransferAmountFee;
    minAmountOut: TransferAmountFee;
    expirationTime: number | undefined;
    currentPrice: Price;
    executionPrice: Price;
    priceImpact: Percent;
    fee: TokenAmount;
    remainingAccounts: PublicKey[];
    executionPriceX64: BN__default;
}
interface ReturnTypeComputeAmountOut {
    allTrade: boolean;
    realAmountIn: GetTransferAmountFee;
    amountOut: GetTransferAmountFee;
    minAmountOut: GetTransferAmountFee;
    expirationTime: number | undefined;
    currentPrice: Decimal;
    executionPrice: Decimal;
    priceImpact: Percent;
    fee: BN__default;
    remainingAccounts: PublicKey[];
    executionPriceX64: BN__default;
}
interface ReturnTypeComputeAmountOutBaseOut {
    amountIn: GetTransferAmountFee;
    maxAmountIn: GetTransferAmountFee;
    realAmountOut: GetTransferAmountFee;
    expirationTime: number | undefined;
    currentPrice: Decimal;
    executionPrice: Decimal;
    priceImpact: Percent;
    fee: BN__default;
    remainingAccounts: PublicKey[];
}
interface ReturnTypeFetchMultiplePoolTickArrays {
    [poolId: string]: {
        [key: string]: TickArray;
    };
}
interface CreateConcentratedPool<T = TxVersion.LEGACY> {
    programId: PublicKey;
    owner?: PublicKey;
    mint1: ApiV3Token;
    mint2: ApiV3Token;
    ammConfig: ClmmConfigInfo;
    initialPrice: Decimal;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    forerunCreate?: boolean;
    getObserveState?: boolean;
    txVersion?: T;
    feePayer?: PublicKey;
}
interface UserPositionAccount {
    /** transform to SDK function, should not used directlly in UI */
    sdkParsed: ClmmPoolPersonalPosition;
    rewardInfos: {
        pendingReward: TokenAmount | undefined;
        apr24h: Percent;
        apr7d: Percent;
        apr30d: Percent;
    }[];
    inRange: boolean;
    poolId: PublicKey;
    nftMint: PublicKey;
    priceLower: Fraction;
    priceUpper: Fraction;
    amountA?: TokenAmount;
    amountB?: TokenAmount;
    tokenA?: TokenInfo;
    tokenB?: TokenInfo;
    leverage: number;
    tickLower: number;
    tickUpper: number;
    positionPercentA: Percent;
    positionPercentB: Percent;
    tokenFeeAmountA?: TokenAmount;
    tokenFeeAmountB?: TokenAmount;
    getLiquidityVolume: (tokenPrices: Record<string, Price>) => {
        wholeLiquidity: Fraction | undefined;
        baseLiquidity: Fraction | undefined;
        quoteLiquidity: Fraction | undefined;
    };
}
interface IncreasePositionFromLiquidity<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    poolKeys?: ClmmKeys;
    ownerPosition: ClmmPositionLayout;
    ownerInfo: {
        useSOLBalance?: boolean;
    };
    amountMaxA: BN__default;
    amountMaxB: BN__default;
    liquidity: BN__default;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface IncreasePositionFromBase<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    ownerPosition: ClmmPoolPersonalPosition;
    ownerInfo: {
        useSOLBalance?: boolean;
    };
    base: "MintA" | "MintB";
    baseAmount: BN__default;
    otherAmountMax: BN__default;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface DecreaseLiquidity<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    poolKeys?: ClmmKeys;
    ownerPosition: ClmmPositionLayout;
    ownerInfo: {
        useSOLBalance?: boolean;
        closePosition?: boolean;
    };
    liquidity: BN__default;
    amountMinA: BN__default;
    amountMinB: BN__default;
    nftAccount?: PublicKey;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface LockPosition<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    authProgramId?: PublicKey;
    poolProgramId?: PublicKey;
    ownerPosition: ClmmPositionLayout;
    payer?: PublicKey;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    txVersion?: T;
    getEphemeralSigners?: (k: number) => any;
    feePayer?: PublicKey;
}
interface HarvestLockPosition<T = TxVersion.LEGACY> {
    programId?: PublicKey;
    authProgramId?: PublicKey;
    clmmProgram?: PublicKey;
    poolKeys?: ClmmKeys;
    lockData: ReturnType<typeof LockClPositionLayoutV2.decode>;
    ownerInfo?: {
        useSOLBalance?: boolean;
    };
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface ClmmPoolRewardLayoutInfo {
    rewardState: number;
    openTime: BN__default;
    endTime: BN__default;
    lastUpdateTime: BN__default;
    emissionsPerSecondX64: BN__default;
    rewardTotalEmissioned: BN__default;
    rewardClaimed: BN__default;
    tokenMint: PublicKey;
    tokenVault: PublicKey;
    creator: PublicKey;
    rewardGrowthGlobalX64: BN__default;
    feePayer?: PublicKey;
}
interface OpenPositionFromBase<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    poolKeys?: ClmmKeys;
    ownerInfo: {
        useSOLBalance?: boolean;
    };
    tickLower: number;
    tickUpper: number;
    base: "MintA" | "MintB";
    baseAmount: BN__default;
    otherAmountMax: BN__default;
    nft2022?: boolean;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    withMetadata?: "create" | "no-create";
    getEphemeralSigners?: (k: number) => any;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface OpenPositionFromBaseExtInfo {
    nftMint: PublicKey;
    tickArrayLower: PublicKey;
    tickArrayUpper: PublicKey;
    positionNftAccount: PublicKey;
    metadataAccount: PublicKey;
    personalPosition: PublicKey;
    protocolPosition: PublicKey;
}
interface OpenPositionFromLiquidity<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    poolKeys?: ClmmKeys;
    ownerInfo: {
        useSOLBalance?: boolean;
    };
    amountMaxA: BN__default;
    amountMaxB: BN__default;
    tickLower: number;
    tickUpper: number;
    liquidity: BN__default;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    withMetadata?: "create" | "no-create";
    getEphemeralSigners?: (k: number) => any;
    txVersion?: T;
    computeBudgetConfig: any;
    nft2022?: boolean;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface OpenPositionFromLiquidityExtInfo {
    address: {
        nftMint: PublicKey;
        tickArrayLower: PublicKey;
        tickArrayUpper: PublicKey;
        positionNftAccount: PublicKey;
        metadataAccount: PublicKey;
        personalPosition: PublicKey;
        protocolPosition: PublicKey;
    };
}
interface GetAmountParams {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    ownerPosition: ClmmPositionLayout;
    liquidity: BN__default;
    slippage: number;
    add: boolean;
    epochInfo: EpochInfo;
}
interface InitRewardParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    poolKeys?: ClmmKeys;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    rewardInfo: {
        mint: ApiV3Token;
        openTime: number;
        endTime: number;
        perSecond: Decimal;
    };
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface InitRewardsParams<T = TxVersion.LEGACY> extends Omit<InitRewardParams<T>, "rewardInfo"> {
    rewardInfos: {
        mint: ApiV3Token;
        openTime: number;
        endTime: number;
        perSecond: Decimal;
    }[];
}
interface SetRewardParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    poolKeys?: ClmmKeys;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    rewardInfo: {
        programId: PublicKey;
        mint: PublicKey;
        openTime: number;
        endTime: number;
        perSecond: Decimal;
    };
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface SetRewardsParams<T = TxVersion.LEGACY> extends Omit<SetRewardParams<T>, "rewardInfo"> {
    rewardInfos: {
        mint: ApiV3Token;
        openTime: number;
        endTime: number;
        perSecond: Decimal;
    }[];
}
interface CollectRewardParams<T = TxVersion.LEGACY> {
    poolInfo: ApiV3PoolInfoConcentratedItem;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    rewardMint: PublicKey;
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    computeBudgetConfig?: ComputeBudgetConfig;
    txVersion?: T;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface CollectRewardsParams<T = TxVersion.LEGACY> extends Omit<CollectRewardParams, "rewardMint"> {
    rewardMints: PublicKey[];
}
interface HarvestAllRewardsParams<T = TxVersion.LEGACY> {
    allPoolInfo: Record<string, ApiV3PoolInfoConcentratedItem>;
    allPositions: Record<string, ClmmPositionLayout[]>;
    ownerInfo: {
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
    };
    lockInfo?: {
        [poolId: string]: {
            [positionNft: string]: ReturnType<typeof LockClPositionLayoutV2.decode>;
        };
    };
    associatedOnly?: boolean;
    checkCreateATAOwner?: boolean;
    programId?: PublicKey;
    txVersion?: T;
    computeBudgetConfig?: ComputeBudgetConfig;
    txTipConfig?: TxTipConfig;
    feePayer?: PublicKey;
}
interface TickArrayBitmapExtensionType {
    poolId: PublicKey;
    positiveTickArrayBitmap: BN__default[][];
    negativeTickArrayBitmap: BN__default[][];
}
interface ReturnTypeFetchExBitmaps {
    [exBitmapId: string]: TickArrayBitmapExtensionType;
}
interface ClosePositionExtInfo {
    address: {
        positionNftAccount: PublicKey;
        personalPosition: PublicKey;
    };
}
interface InitRewardExtInfo {
    address: {
        poolRewardVault: PublicKey;
        operationId: PublicKey;
    };
}
declare type ClmmRpcData = ReturnType<typeof PoolInfoLayout.decode> & {
    currentPrice: number;
    programId: PublicKey;
};
interface ClmmLockAddress {
    positionId: PublicKey;
    lockPositionId: PublicKey;
    lockNftAccount: PublicKey;
    lockNftMint: PublicKey;
    positionNftAccount: PublicKey;
    metadataAccount: PublicKey;
}

export { ApiClmmPoint as A, ClosePositionExtInfo as B, ClmmConfigInfo as C, DecreaseLiquidity as D, InitRewardExtInfo as E, ClmmRpcData as F, GetAmountParams as G, HarvestLockPosition as H, IncreasePositionFromLiquidity as I, ClmmLockAddress as J, TICK_ARRAY_SIZE as K, LockPosition as L, ManipulateLiquidityExtInfo as M, TICK_ARRAY_BITMAP_SIZE as N, OpenPositionFromBase as O, ReturnTypeGetTickPrice as P, ReturnTypeGetPriceAndTick as Q, ReturnTypeMakeHarvestTransaction as R, SDKParsedConcentratedInfo as S, TickArrayBitmapExtensionType as T, UserPositionAccount as U, Tick as V, TickArray as W, TickState as X, TickArrayState as Y, TickUtils as Z, ApiClmmConfigInfos as a, ClmmPoolRewardInfo as b, ClmmPoolInfo as c, ComputeClmmPoolInfo as d, ClmmPoolPersonalPosition as e, ReturnTypeMakeCreatePoolTransaction as f, ReturnTypeGetLiquidityAmountOut as g, ReturnTypeGetAmountsFromLiquidity as h, ReturnTypeComputeAmountOutFormat as i, ReturnTypeComputeAmountOut as j, ReturnTypeComputeAmountOutBaseOut as k, ReturnTypeFetchMultiplePoolTickArrays as l, CreateConcentratedPool as m, IncreasePositionFromBase as n, ClmmPoolRewardLayoutInfo as o, OpenPositionFromBaseExtInfo as p, OpenPositionFromLiquidity as q, OpenPositionFromLiquidityExtInfo as r, InitRewardParams as s, InitRewardsParams as t, SetRewardParams as u, SetRewardsParams as v, CollectRewardParams as w, CollectRewardsParams as x, HarvestAllRewardsParams as y, ReturnTypeFetchExBitmaps as z };
