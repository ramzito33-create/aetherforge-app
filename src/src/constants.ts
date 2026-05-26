import { InvestmentItem } from './types';

export const BASE_MINING_RATE = 0.005; 

export const INVESTMENT_TIERS: InvestmentItem[] = [
  {
      id: 'inv_01',
          name: 'Quantum Overclock Node',
              cost: 150,
                  multiplier: 1.5,
                      level: 0,
                          basePayout: 0.01,
                              type: 'hardware',
                                  icon: 'Cpu'
                                    },
                                      {
                                          id: 'inv_02',
                                              name: 'Aether Nebula Rig',
                                                  cost: 500,
                                                      multiplier: 2.2,
                                                          level: 0,
                                                              basePayout: 0.04,
                                                                  type: 'hardware',
                                                                      icon: 'Zap'
                                                                        },
                                                                          {
                                                                              id: 'inv_03',
                                                                                  name: 'Singularity Core V2',
                                                                                      cost: 2000,
                                                                                          multiplier: 4.5,
                                                                                              level: 0,
                                                                                                  basePayout: 0.18,
                                                                                                      type: 'energy',
                                                                                                          icon: 'Atom'
                                                                                                            },
                                                                                                              {
                                                                                                                  id: 'inv_04',
                                                                                                                      name: 'Neural Network Optimizer',
                                                                                                                          cost: 7500,
                                                                                                                              multiplier: 10.0,
                                                                                                                                  level: 0,
                                                                                                                                      basePayout: 0.85,
                                                                                                                                          type: 'software',
                                                                                                                                              icon: 'Brain'
                                                                                                                                                }
                                                                                                                                                ];

                                                                                                                                                export const RANKS = [
                                                                                                                                                  { name: 'Bronze Novice', minBalance: 0 },
                                                                                                                                                    { name: 'Silver Voyager', minBalance: 1000 },
                                                                                                                                                      { name: 'Gold Synthesizer', minBalance: 5000 },
                                                                                                                                                        { name: 'Platinum Forger', minBalance: 25000 },
                                                                                                                                                          { name: 'Aether Immortal', minBalance: 100000 }
                                                                                                                                                          ];

                                                                                                                                                          export const SPIN_REWARDS = [25, 50, 75, 100, 250, 500];
                                                                                                                                                          