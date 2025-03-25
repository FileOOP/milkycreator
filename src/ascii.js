/**
 * ASCII Art Collection for PengRooms
 * The ice remembers. The penguins watch.
 */

const penguins = [
  `
      .---.
     /     \\
     \\.@-@./
     /\`\\_/\`\\
    //  _  \\\\
   | \\     )|_
  /\`\\_\`>  <_/ \\
  \\__/'---'\\__/
  `,
  `
       .-"""-.
      /        \\
     |  O    O  |
     |    __    |
      \\  \\__/  /
       '-.__..-'
        /|  |\\
       (_|  |_)
  `,
  `
    (o_
    //\\
    V_/_
  `,
  `
      __
    <(o )___
     ( ._> /
      \`---'
  `,
  `
         ._____.
        /(. .  )\\
       /   (_)   \\
       |  |   |  |
       |__|   |__|
  `,
  `
     ,;;,
    ;;'\\\\
   ;;;  \\\\
   ';;   \\\\
    ';;   \\\\
     ;;   |/
     ;;   (o>
     ;;    |
   .;;;   /|\\
   ;;;;  / | \\
  `,
  `
        .^.
       (   )
       (   )
       (O O)
       _) (_
      /     \\
     |       |
      \\_____/
        | |
       _| |_
      (_____)
  `,
  `
   .--.
  |o_o |
  |:_/ |
 //   \\ \\
(|     | )
/'\\_   _/\`\\
\\___)=(___/
  `
];

const corridors = [
  `
  |     |     |     |     |     |     |     |
  |     |     |     |     |     |     |     |
  |_____|_____|_____|_____|_____|_____|_____|
  `,
  `
  +=====+=====+=====+=====+=====+=====+=====+
  |     :     :     :     :     :     :     |
  |     :     :     :     :     :     :     |
  +=====+=====+=====+=====+=====+=====+=====+
  `,
  `
  .----.----.----.----.----.----.----.----.
  |    |    |    |    |    |    |    |    |
  |    |    |    |    |    |    |    |    |
  '----'----'----'----'----'----'----'----'
  `
];

const ice = [
  `
    *  .  *  .  *  .  *  .  *  .  *
  .    *    .    *    .    *    .
    *  .  *  .  *  .  *  .  *  .  *
  `,
  `
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `,
  `
       /\\  /\\  /\\  /\\  /\\  /\\
      /  \\/  \\/  \\/  \\/  \\/  \\
     /    \\    /    \\    /    \\
    /______\\/______\\/______\\
  `,
  `
  .-^-..-^-..-^-..-^-..-^-..-^-..
  '   ''   ''   ''   ''   ''   '
  `,
  `
  ___===___===___===___===___===___
     ===   ===   ===   ===   ===
  ===___===___===___===___===___===
  `
];

const glitches = [
  `
  E̷R̷R̷O̷R̷ ̷I̷N̷ ̷T̷H̷E̷ ̷I̷C̷E̷
  `,
  `
  [SIGNAL LOST]...[SIGNAL FOUND]...[SIGNAL LOST]
  `,
  `
  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  ??? THE FISH WERE NEVER REAL ???
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  `,
  `
  ############### WARNING ###############
  #                                     #
  #   REALITY TEMPERATURE: DROPPING     #
  #                                     #
  #######################################
  `,
  `
  01110000 01100101 01101110 01100111
  |||PENGUIN|||PENGUIN|||PENGUIN|||
  01110101 01101001 01101110
  `
];

const fish = [
  `
    ><((('>
  `,
  `
  ><(((('>  ><(((('>  ><(((('>
  `,
  `
      /\\
     /  \\
    |    |
    |    |  ><>
     \\  /
      \\/
  `,
  `
  ~<><   ~<><   ~<><   ~<><
     ><>~   ><>~   ><>~
  ~<><   ~<><   ~<><   ~<><
  `
];

const voids = [
  `
  .                                                    .
       .                                          .
                          .
             .                           .
                    .           .
         .                                      .
  .                      .                           .
  `,
  `
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓                            ▓
  ▓     THE VOID WADDLES       ▓
  ▓                            ▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  `,
  `
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░ EMPTY ICE SHELF ░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  `
];

const timestamps = [
  `
  [████████████████████] 100% FROZEN
  `,
  `
  <<<< TIME UNKNOWN >>>>
  `,
  `
  ⏰ CLOCK STOPPED AT: ??:??:??
  `
];

function getRandomPenguin() {
  return penguins[Math.floor(Math.random() * penguins.length)];
}

function getRandomCorridor() {
  return corridors[Math.floor(Math.random() * corridors.length)];
}

function getRandomIce() {
  return ice[Math.floor(Math.random() * ice.length)];
}

function getRandomGlitch() {
  return glitches[Math.floor(Math.random() * glitches.length)];
}

function getRandomFish() {
  return fish[Math.floor(Math.random() * fish.length)];
}

function getRandomVoid() {
  return voids[Math.floor(Math.random() * voids.length)];
}

function getRandomTimestamp() {
  return timestamps[Math.floor(Math.random() * timestamps.length)];
}

function getRandomArt() {
  const allArt = [...penguins, ...corridors, ...ice, ...glitches, ...fish, ...voids];
  return allArt[Math.floor(Math.random() * allArt.length)];
}

function getMultipleArts(count = 2) {
  const arts = [];
  for (let i = 0; i < count; i++) {
    arts.push(getRandomArt());
  }
  return arts;
}

module.exports = {
  penguins,
  corridors,
  ice,
  glitches,
  fish,
  voids,
  timestamps,
  getRandomPenguin,
  getRandomCorridor,
  getRandomIce,
  getRandomGlitch,
  getRandomFish,
  getRandomVoid,
  getRandomTimestamp,
  getRandomArt,
  getMultipleArts
};
