//#region tier names
const tierNames = {
  COMMON: 0,
  RARE: 1,
  EPIC: 2,
  LEGENDARY: 3,
  MYTHIC: 4,
  SUPREME: 5,
  ULTIMATE: 6,
  CELESTIAL: 7,
  STELLAR: 8,
  IMMORTAL: 9,
  DIVINE: 10,
};
//#endregion

//#region gear
export const gearUpgradeCost = {
  common: [
    // from common
    { nuts: 100, copies: 4 },
    // from rare
    { nuts: 200, copies: 8 },
    // from epic
    { nuts: 450, copies: 18 },
    // from legendary
    { nuts: 1250, copies: 50 },
    // from mythic
    { nuts: 3500, copies: 140 },
    // from supreme
    { nuts: 6000, copies: 240 },
    // from ultimate
    { nuts: 9000, copies: 350 },
    // from celestial
    { nuts: 15000, copies: 470 },
    // from stellar
    { nuts: 24000, copies: 590 },
    // from immortal
    { nuts: 36000, copies: 790 },
  ],
  weaponry: [
    // from common
    { nuts: 200, copies: 2 },
    // from rare
    { nuts: 900, copies: 9 },
    // from epic
    { nuts: 1900, copies: 19 },
    // from legendary
    { nuts: 4000, copies: 40 },
    // from mythic
    { nuts: 9500, copies: 95 },
    // from supreme
    { nuts: 15500, copies: 150 },
    // from ultimate
    { nuts: 23000, copies: 210 },
    // from celestial
    { nuts: 32000, copies: 285 },
    // from stellar
    { nuts: 43000, copies: 370 },
    // from immortal
    { nuts: 59000, copies: 470 },
  ],
  personal: [
    // from common
    { nuts: 500, copies: 2 },
    // from rare
    { nuts: 1000, copies: 5 },
    // from epic
    { nuts: 2000, copies: 10 },
    // from legendary
    { nuts: 4500, copies: 20 },
    // from mythic
    { nuts: 9000, copies: 30 },
    // from supreme
    { nuts: 14000, copies: 40 },
    // from ultimate
    { nuts: 19000, copies: 45 },
    // from celestial
    { nuts: 29000, copies: 50 },
    // from stellar
    { nuts: 45000, copies: 55 },
    // from immortal
    { nuts: 69000, copies: 60 },
  ],
};
//#endregion

//#region hero
export const heroUpgradeCost = [
  { finalLevel: 2, cards: 0, coins: 200, newTier: tierNames.COMMON },
  { finalLevel: 3, cards: 0, coins: 300, newTier: tierNames.COMMON },
  { finalLevel: 4, cards: 0, coins: 400, newTier: tierNames.COMMON },
  { finalLevel: 5, cards: 0, coins: 500, newTier: tierNames.COMMON },
  { finalLevel: 6, cards: 0, coins: 600, newTier: tierNames.COMMON },
  { finalLevel: 7, cards: 0, coins: 700, newTier: tierNames.COMMON },
  { finalLevel: 8, cards: 0, coins: 800, newTier: tierNames.COMMON },
  { finalLevel: 9, cards: 0, coins: 900, newTier: tierNames.COMMON },
  { finalLevel: 10, cards: 0, coins: 1000, newTier: tierNames.COMMON },
  {
    finalLevel: 10,
    cards: 35,
    coins: 750,
    newTier: tierNames.RARE,
    tierBoost: true,
  },
  { finalLevel: 11, cards: 0, coins: 1100, newTier: tierNames.RARE },
  { finalLevel: 12, cards: 0, coins: 1200, newTier: tierNames.RARE },
  { finalLevel: 13, cards: 0, coins: 1300, newTier: tierNames.RARE },
  { finalLevel: 14, cards: 0, coins: 1400, newTier: tierNames.RARE },
  { finalLevel: 15, cards: 0, coins: 1500, newTier: tierNames.RARE },
  { finalLevel: 16, cards: 0, coins: 1600, newTier: tierNames.RARE },
  { finalLevel: 17, cards: 0, coins: 1700, newTier: tierNames.RARE },
  { finalLevel: 18, cards: 0, coins: 1800, newTier: tierNames.RARE },
  { finalLevel: 19, cards: 0, coins: 1900, newTier: tierNames.RARE },
  { finalLevel: 20, cards: 0, coins: 2000, newTier: tierNames.RARE },
  {
    finalLevel: 20,
    cards: 65,
    coins: 1500,
    newTier: tierNames.EPIC,
    tierBoost: true,
  },
  { finalLevel: 21, cards: 0, coins: 2100, newTier: tierNames.EPIC },
  { finalLevel: 22, cards: 0, coins: 2200, newTier: tierNames.EPIC },
  { finalLevel: 23, cards: 0, coins: 2300, newTier: tierNames.EPIC },
  { finalLevel: 24, cards: 0, coins: 2400, newTier: tierNames.EPIC },
  { finalLevel: 25, cards: 0, coins: 2500, newTier: tierNames.EPIC },
  { finalLevel: 26, cards: 0, coins: 2600, newTier: tierNames.EPIC },
  { finalLevel: 27, cards: 0, coins: 2700, newTier: tierNames.EPIC },
  { finalLevel: 28, cards: 0, coins: 2800, newTier: tierNames.EPIC },
  { finalLevel: 29, cards: 0, coins: 2900, newTier: tierNames.EPIC },
  { finalLevel: 30, cards: 0, coins: 3000, newTier: tierNames.EPIC },
  {
    finalLevel: 30,
    cards: 100,
    coins: 3000,
    newTier: tierNames.LEGENDARY,
    tierBoost: true,
  },
  { finalLevel: 31, cards: 0, coins: 3100, newTier: tierNames.LEGENDARY },
  { finalLevel: 32, cards: 0, coins: 3200, newTier: tierNames.LEGENDARY },
  { finalLevel: 33, cards: 0, coins: 3300, newTier: tierNames.LEGENDARY },
  { finalLevel: 34, cards: 0, coins: 3400, newTier: tierNames.LEGENDARY },
  { finalLevel: 35, cards: 0, coins: 3500, newTier: tierNames.LEGENDARY },
  { finalLevel: 36, cards: 0, coins: 3600, newTier: tierNames.LEGENDARY },
  { finalLevel: 37, cards: 0, coins: 3700, newTier: tierNames.LEGENDARY },
  { finalLevel: 38, cards: 0, coins: 3800, newTier: tierNames.LEGENDARY },
  { finalLevel: 39, cards: 0, coins: 3900, newTier: tierNames.LEGENDARY },
  { finalLevel: 40, cards: 0, coins: 4000, newTier: tierNames.LEGENDARY },
  {
    finalLevel: 40,
    cards: 140,
    coins: 6000,
    newTier: tierNames.MYTHIC,
    tierBoost: true,
  },
  {
    finalLevel: 41,
    cards: 0,
    coins: 4050,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 42,
    cards: 0,
    coins: 4100,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 43,
    cards: 0,
    coins: 4150,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 44,
    cards: 0,
    coins: 4200,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 45,
    cards: 0,
    coins: 4250,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 46,
    cards: 0,
    coins: 4300,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 47,
    cards: 0,
    coins: 4350,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 48,
    cards: 0,
    coins: 4400,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 49,
    cards: 0,
    coins: 4450,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 50,
    cards: 0,
    coins: 4500,
    newTier: tierNames.MYTHIC,
  },
  {
    finalLevel: 50,
    cards: 200,
    coins: 12000,
    newTier: tierNames.SUPREME,
    tierBoost: true,
  },
  {
    finalLevel: 51,
    cards: 0,
    coins: 4550,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 52,
    cards: 0,
    coins: 4600,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 53,
    cards: 0,
    coins: 4650,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 54,
    cards: 0,
    coins: 4700,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 55,
    cards: 0,
    coins: 4750,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 56,
    cards: 0,
    coins: 4800,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 57,
    cards: 0,
    coins: 4850,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 58,
    cards: 0,
    coins: 4900,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 59,
    cards: 0,
    coins: 4950,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 60,
    cards: 0,
    coins: 5000,
    newTier: tierNames.SUPREME,
  },
  {
    finalLevel: 60,
    cards: 300,
    coins: 25000,
    newTier: tierNames.ULTIMATE,
    tierBoost: true,
  },
  {
    finalLevel: 61,
    cards: 5,
    coins: 5300,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 62,
    cards: 13,
    coins: 5600,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 63,
    cards: 18,
    coins: 5900,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 64,
    cards: 23,
    coins: 6200,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 65,
    cards: 27,
    coins: 6550,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 66,
    cards: 30,
    coins: 6900,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 67,
    cards: 33,
    coins: 7300,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 68,
    cards: 36,
    coins: 7700,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 69,
    cards: 38,
    coins: 8100,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 70,
    cards: 41,
    coins: 8550,
    newTier: tierNames.ULTIMATE,
  },
  {
    finalLevel: 70,
    cards: 360,
    coins: 38000,
    newTier: tierNames.CELESTIAL,
    tierBoost: true,
  },
  {
    finalLevel: 71,
    cards: 43,
    coins: 9000,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 72,
    cards: 46,
    coins: 9500,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 73,
    cards: 48,
    coins: 10000,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 74,
    cards: 50,
    coins: 10550,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 75,
    cards: 53,
    coins: 11150,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 76,
    cards: 55,
    coins: 11750,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 77,
    cards: 57,
    coins: 12400,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 78,
    cards: 59,
    coins: 13100,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 79,
    cards: 61,
    coins: 13800,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 80,
    cards: 63,
    coins: 14550,
    newTier: tierNames.CELESTIAL,
  },
  {
    finalLevel: 80,
    cards: 420,
    coins: 57000,
    newTier: tierNames.STELLAR,
    tierBoost: true,
  },
  {
    finalLevel: 81,
    cards: 64,
    coins: 14850,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 82,
    cards: 64,
    coins: 15600,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 83,
    cards: 64,
    coins: 16300,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 84,
    cards: 64,
    coins: 17100,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 85,
    cards: 64,
    coins: 17900,
    newTier: tierNames.STELLAR,
  },
  {
    finalLevel: 85,
    cards: 110,
    coins: 82000,
    newTier: tierNames.IMMORTAL,
    tierBoost: true,
  },
  {
    finalLevel: 86,
    cards: 64,
    coins: 18800,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 87,
    cards: 64,
    coins: 19550,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 88,
    cards: 64,
    coins: 20400,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 89,
    cards: 64,
    coins: 21300,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 90,
    cards: 64,
    coins: 22200,
    newTier: tierNames.IMMORTAL,
  },
  {
    finalLevel: 90,
    cards: 130,
    coins: 107000,
    newTier: tierNames.DIVINE,
    tierBoost: true,
  },
];
//#endregion

//#region talent
/**
 * Element 0 is upgrading from 1 to 2
 * 18 levels, 17 upgrades
 */
export const talentUpgradeCost = [
  { batteries: 40, requiredHeroTier: tierNames.RARE },
  { batteries: 60, requiredHeroTier: tierNames.RARE },
  { batteries: 75, requiredHeroTier: tierNames.RARE },
  { batteries: 100, requiredHeroTier: tierNames.RARE },
  { batteries: 150, requiredHeroTier: tierNames.EPIC },
  { batteries: 200, requiredHeroTier: tierNames.EPIC },
  { batteries: 300, requiredHeroTier: tierNames.EPIC },
  { batteries: 400, requiredHeroTier: tierNames.LEGENDARY },
  { batteries: 500, requiredHeroTier: tierNames.LEGENDARY },
  { batteries: 750, requiredHeroTier: tierNames.LEGENDARY },
  { batteries: 1000, requiredHeroTier: tierNames.MYTHIC },
  { batteries: 1250, requiredHeroTier: tierNames.MYTHIC },
  { batteries: 1500, requiredHeroTier: tierNames.SUPREME },
  { batteries: 2000, requiredHeroTier: tierNames.ULTIMATE },
  { batteries: 2500, requiredHeroTier: tierNames.CELESTIAL },
  { batteries: 3250, requiredHeroTier: tierNames.CELESTIAL },
  { batteries: 4500, requiredHeroTier: tierNames.STELLAR },
];
//#endregion

//#region divine
/**
 * Upgrade 0 is upgrading from rank 1 to 2
 * 20 levels, 19 upgrades
 */
export const divineUpgradeCost = [
  {
    experience: 40,
    stones: 10,
  },
  {
    experience: 75,
    stones: 18,
  },
  {
    experience: 90,
    stones: 22,
  },
  {
    experience: 100,
    stones: 28,
  },
  {
    experience: 115,
    stones: 32,
  },
  {
    experience: 120,
    stones: 36,
  },
  {
    experience: 130,
    stones: 40,
  },
  {
    experience: 135,
    stones: 46,
  },
  {
    experience: 145,
    stones: 50,
  },
  {
    experience: 150,
    stones: 54,
  },
  {
    experience: 155,
    stones: 60,
  },
  {
    experience: 160,
    stones: 64,
  },
  {
    experience: 160,
    stones: 68,
  },
  {
    experience: 165,
    stones: 72,
  },
  {
    experience: 170,
    stones: 72,
  },
  {
    experience: 175,
    stones: 72,
  },
  {
    experience: 175,
    stones: 82,
  },
  {
    experience: 180,
    stones: 82,
  },
  {
    experience: 185,
    stones: 90,
  },
];
//#endregion

//#region drone
export const droneUpgradeCost = {
  Agent: [
    // assemble (get lvl 1)
    { cubes: 0, blueprints: 30 },
    // 2-5
    { cubes: 35, blueprints: 15 },
    { cubes: 35, blueprints: 15 },
    { cubes: 35, blueprints: 15 },
    { cubes: 35, blueprints: 15 },
    // 6-10
    { cubes: 55, blueprints: 30 },
    { cubes: 55, blueprints: 30 },
    { cubes: 55, blueprints: 30 },
    { cubes: 55, blueprints: 30 },
    { cubes: 55, blueprints: 30 },
    // 11-15
    { cubes: 70, blueprints: 45 },
    { cubes: 70, blueprints: 45 },
    { cubes: 70, blueprints: 45 },
    { cubes: 70, blueprints: 45 },
    { cubes: 70, blueprints: 45 },
    // 16-20
    { cubes: 90, blueprints: 60 },
    { cubes: 90, blueprints: 60 },
    { cubes: 90, blueprints: 60 },
    { cubes: 90, blueprints: 60 },
    { cubes: 90, blueprints: 60 },
  ],
  Guard: [
    // assemble (get lvl 1)
    { cubes: 0, blueprints: 60 },
    // 2-5
    { cubes: 30, blueprints: 30 },
    { cubes: 30, blueprints: 30 },
    { cubes: 30, blueprints: 30 },
    { cubes: 30, blueprints: 30 },
    // 6-10
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    // 11-15
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    // 16-20
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
  ],
  Medpro: [
    // assemble (get lvl 1)
    { cubes: 0, blueprints: 20 },
    // 2-5
    { cubes: 45, blueprints: 10 },
    { cubes: 45, blueprints: 10 },
    { cubes: 45, blueprints: 10 },
    { cubes: 45, blueprints: 10 },
    // 6-10
    { cubes: 60, blueprints: 20 },
    { cubes: 60, blueprints: 20 },
    { cubes: 60, blueprints: 20 },
    { cubes: 60, blueprints: 20 },
    { cubes: 60, blueprints: 20 },
    // 11-15
    { cubes: 80, blueprints: 30 },
    { cubes: 80, blueprints: 30 },
    { cubes: 80, blueprints: 30 },
    { cubes: 80, blueprints: 30 },
    { cubes: 80, blueprints: 30 },
    // 16-20
    { cubes: 110, blueprints: 40 },
    { cubes: 110, blueprints: 40 },
    { cubes: 110, blueprints: 40 },
    { cubes: 110, blueprints: 40 },
    { cubes: 110, blueprints: 40 },
  ],
  Phantom: [
    // assemble (get lvl 1)
    { cubes: 0, blueprints: 10 },
    // 2-5
    { cubes: 50, blueprints: 5 },
    { cubes: 50, blueprints: 5 },
    { cubes: 50, blueprints: 5 },
    { cubes: 50, blueprints: 5 },
    // 6-10
    { cubes: 70, blueprints: 10 },
    { cubes: 70, blueprints: 10 },
    { cubes: 70, blueprints: 10 },
    { cubes: 70, blueprints: 10 },
    { cubes: 70, blueprints: 10 },
    // 11-15
    { cubes: 90, blueprints: 15 },
    { cubes: 90, blueprints: 15 },
    { cubes: 90, blueprints: 15 },
    { cubes: 90, blueprints: 15 },
    { cubes: 90, blueprints: 15 },
    // 16-20
    { cubes: 125, blueprints: 20 },
    { cubes: 125, blueprints: 20 },
    { cubes: 125, blueprints: 20 },
    { cubes: 125, blueprints: 20 },
    { cubes: 125, blueprints: 20 },
  ],
  Zenith: [
    // assemble (get lvl 1)
    { cubes: 0, blueprints: 60 },
    // 2-5
    { cubes: 30, blueprints: 30 },
    { cubes: 30, blueprints: 30 },
    { cubes: 30, blueprints: 30 },
    { cubes: 30, blueprints: 30 },
    // 6-10
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    { cubes: 45, blueprints: 60 },
    // 11-15
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    { cubes: 60, blueprints: 90 },
    // 16-20
    { cubes: 80, blueprints: 120 },
    { cubes: 80, blueprints: 120 },
    { cubes: 80, blueprints: 120 },
    { cubes: 80, blueprints: 120 },
    { cubes: 80, blueprints: 120 },
  ],
};
//#endregion
