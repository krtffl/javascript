const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'SUBSTITUTION'],
  [47, 'GOAL'],
  [61, 'SUBSTITUTION'],
  [64, 'YELLOW CARD'],
  [69, 'RED CARD'],
  [70, 'SUBSTITUION'],
  [72, 'SUBSTITUTION'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'YELLOW CARD'],
]);

const events = [...new Set(gameEvents.values())];
gameEvents.delete(64);

console.log(events);
console.log(
  `an event happened, on average, every ${90 / gameEvents.size} minutes`
);

for ([key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  }

  if (key > 45) {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}
