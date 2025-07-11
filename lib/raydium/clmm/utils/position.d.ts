import BN__default from 'bn.js';
import { ClmmPositionLayout } from '../layout.js';
import { c as ClmmPoolInfo, V as Tick, e as ClmmPoolPersonalPosition, b as ClmmPoolRewardInfo, G as GetAmountParams, g as ReturnTypeGetLiquidityAmountOut } from '../../../type-89ef0f7a.js';
import '../../../marshmallow/index.js';
import '@solana/web3.js';
import '../../../marshmallow/buffer-layout.js';
import 'decimal.js';
import '../../../api-dd29768d.js';
import 'axios';
import '../../../solana/type.js';
import '@solana/spl-token';
import '../../../api/url.js';
import '../../../common/owner.js';
import '../../../common/txTool/lookupTable.js';
import '../../../common/txTool/txType.js';
import '../../../module/token.js';
import '../../../common/pubKey.js';
import '../../../common/logger.js';
import '../../../module/currency.js';

declare class PositionUtils {
    static getfeeGrowthInside(poolState: Pick<ClmmPoolInfo, "tickCurrent" | "feeGrowthGlobalX64A" | "feeGrowthGlobalX64B">, tickLowerState: Tick, tickUpperState: Tick): {
        feeGrowthInsideX64A: BN__default;
        feeGrowthInsideBX64: BN__default;
    };
    static GetPositionFees(ammPool: ClmmPoolInfo, positionState: ClmmPoolPersonalPosition, tickLowerState: Tick, tickUpperState: Tick): {
        tokenFeeAmountA: BN__default;
        tokenFeeAmountB: BN__default;
    };
    static GetPositionFeesV2(ammPool: Pick<ClmmPoolInfo, "tickCurrent" | "feeGrowthGlobalX64A" | "feeGrowthGlobalX64B">, positionState: ClmmPositionLayout, tickLowerState: Tick, tickUpperState: Tick): {
        tokenFeeAmountA: BN__default;
        tokenFeeAmountB: BN__default;
    };
    static GetPositionRewardsV2(ammPool: Pick<ClmmPoolInfo, "tickCurrent" | "feeGrowthGlobalX64B"> & {
        rewardInfos: {
            rewardGrowthGlobalX64: BN__default;
        }[];
    }, positionState: ClmmPositionLayout, tickLowerState: Tick, tickUpperState: Tick): BN__default[];
    static GetPositionRewards(ammPool: ClmmPoolInfo, positionState: ClmmPoolPersonalPosition, tickLowerState: Tick, tickUpperState: Tick): BN__default[];
    static getRewardGrowthInside(tickCurrentIndex: number, tickLowerState: Tick, tickUpperState: Tick, rewardInfos: ClmmPoolRewardInfo[]): BN__default[];
    static getRewardGrowthInsideV2(tickCurrentIndex: number, tickLowerState: Tick, tickUpperState: Tick, rewardInfos: Pick<ClmmPoolRewardInfo, "rewardGrowthGlobalX64">[]): BN__default[];
    static getAmountsFromLiquidity({ poolInfo, ownerPosition, liquidity, slippage, add, epochInfo, }: GetAmountParams): ReturnTypeGetLiquidityAmountOut;
}

export { PositionUtils };
