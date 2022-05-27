export type RuleBook = {
  firstPlayerStartMp: number;
  secondPlayerStartMp: number;
  maxLimitMp: number;
  minMp: number;
  limitMpToIncrease: number;
  initialNumHands: number;
  maxNumHands: number;
  numDraws: number;
  firstPlayerNumDrawsInFirstTurn: number;
  secondPlayerNumDrawsInFirstTurn: number;
  initialPlayerHp: number;
  maxPlayerHp: number;
  minPlayerHp: number;
  maxNumDeckCards: number;
  minNumDeckCards: number;
  maxNumFieldCards: number;
  defaultNumTurnsToCanAttack: number;
  defaultNumAttacksLimitInTurn: number;
  defaultLimitNumCardsInDeck: number;
};

export const ruleBookEmpty = (): RuleBook => {
  return {
    firstPlayerStartMp: 0,
    secondPlayerStartMp: 0,
    maxLimitMp: 0,
    minMp: 0,
    limitMpToIncrease: 0,
    initialNumHands: 0,
    maxNumHands: 0,
    numDraws: 0,
    firstPlayerNumDrawsInFirstTurn: 0,
    secondPlayerNumDrawsInFirstTurn: 0,
    initialPlayerHp: 0,
    maxPlayerHp: 0,
    minPlayerHp: 0,
    maxNumDeckCards: 0,
    minNumDeckCards: 0,
    maxNumFieldCards: 0,
    defaultNumTurnsToCanAttack: 0,
    defaultNumAttacksLimitInTurn: 0,
    defaultLimitNumCardsInDeck: 0,
  };
};
