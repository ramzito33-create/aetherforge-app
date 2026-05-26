export interface UserState {
      balance: number;
        totalEarned: number;
          miningRate: number; 
            rank: string;
              avatar: string;
              }

              export interface MiningState {
                isActive: boolean;
                  lastClaimed: string;
                    nextClaimAvailable: string;
                    }

                    export interface InvestmentItem {
                      id: string;
                        name: string;
                          cost: number;
                            multiplier: number;
                              level: number;
                                basePayout: number;
                                  type: 'hardware' | 'software' | 'energy';
                                    icon: string;
                                    }

                                    export interface StakingVault {
                                      stakedAmount: number;
                                        accumulatedRewards: number;
                                          lastTick: number;
                                            apy: number;
                                            }

                                            export interface ReferralUser {
                                              id: string;
                                                username: string;
                                                  status: 'Active' | 'Inactive';
                                                    earnedForYou: number;
                                                      joinDate: string;
                                                      }

                                                      export interface Transaction {
                                                        id: string;
                                                          type: 'Deposit' | 'Withdraw' | 'Swap' | 'Stake' | 'Claim';
                                                            amount: number;
                                                              currency: string;
                                                                status: 'Completed' | 'Pending' | 'Failed';
                                                                  timestamp: string;
                                                                    hash?: string;
                                                                    }

                                                                    export type TabType = 'dashboard' | 'invest' | 'referral' | 'wallet';
                                                                    
}