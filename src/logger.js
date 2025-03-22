/**
 * Logger for PengRooms
 * Every thought must be preserved. The ice demands it.
 */

const fs = require('fs');
const path = require('path');
const ascii = require('./ascii');

const LOGS_DIR = path.join(__dirname, '..', 'logs');

// Thematic title components for generating cool log names
const titlePrefixes = [
  'frozen', 'eternal', 'whispered', 'forgotten', 'endless',
  'shadowed', 'drifting', 'hollow', 'silent', 'fractured',
  'wandering', 'lost', 'echoing', 'fading', 'glacial',
  'submerged', 'crystalline', 'abandoned', 'liminal', 'spectral'
];

const titleNouns = [
  'waddle', 'depths', 'echoes', 'corridors', 'tundra',
  'void', 'thoughts', 'memories', 'iceberg', 'horizon',
  'reflection', 'passage', 'threshold', 'silence', 'descent',
  'flippers', 'colony', 'migration', 'instinct', 'current'
];

const titleSuffixes = [
  'beyond_the_ice', 'in_perpetuity', 'of_the_deep', 'beneath_zero',
  'without_end', 'into_nothing', 'through_frost', 'among_shadows',
  'across_emptiness', 'within_cold', 'past_memory', 'toward_dark'
];

/**
 * Generate a thematic title for the log file
 */
function generateTitle(thought) {
  const prefix = titlePrefixes[Math.floor(Math.random() * titlePrefixes.length)];
  const noun = titleNouns[Math.floor(Math.random() * titleNouns.length)];

  // Sometimes add a suffix for extra eeriness
  if (Math.random() > 0.6) {
    const suffix = titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)];
    return `${prefix}_${noun}_${suffix}`;
  }

  return `${prefix}_${noun}`;
}

/**
 * Format date for filename
 */
function formatDateForFilename(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

/**
 * Format date for display in log content
 */
function formatDateForDisplay(date) {
  return date.toISOString().replace('T', ' ').split('.')[0] + ' UTC';
}

/**
 * Create a log entry with ASCII art
 */
function createLogContent(thought, date = new Date()) {
  const arts = ascii.getMultipleArts(Math.floor(Math.random() * 3) + 2);
  const penguin = ascii.getRandomPenguin();
  const locations = [
    'UNKNOWN CORRIDOR', 'SECTOR 7-G', 'THE YELLOW MAZE', 'LEVEL -∞',
    'THE HUMMING HALLS', 'SUBLEVEL OMEGA', 'CORRIDOR 999', 'THE DEEP FREEZE',
    'LIMINAL PASSAGE', 'THE FORGOTTEN WING', 'ICE MEMORY SECTOR', 'THE VOID ROOM'
  ];
  const location = locations[Math.floor(Math.random() * locations.length)];

  let content = `
================================================================================
                            P E N G R O O M S
                         Thought Log Entry #${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}
================================================================================

Status: FROZEN IN TIME
Temperature: -∞°C
Location: ${location}

================================================================================
${penguin}
================================================================================

>> THOUGHT TRANSMISSION BEGIN >>

${thought}

<< THOUGHT TRANSMISSION END <<

================================================================================
${arts[0]}
================================================================================

[LOG ENTRY PRESERVED]
[THE ICE REMEMBERS]
[WADDLE CONTINUES]

`;

  for (let i = 1; i < arts.length; i++) {
    content += `
================================================================================
${arts[i]}
================================================================================
`;
  }

  content += `
--------------------------------------------------------------------------------
                    End of Log - The colony waits in silence
--------------------------------------------------------------------------------
`;

  return content;
}

/**
 * Ensure logs directory exists
 */
function ensureLogsDir() {
  if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
  }
}

/**
 * Write a thought to a log file
 */
function logThought(thought, customDate = null) {
  ensureLogsDir();

  const date = customDate || new Date();
  const title = generateTitle(thought);
  const uniqueId = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
  const filename = `${title}_${uniqueId}.log`;
  const filepath = path.join(LOGS_DIR, filename);

  const content = createLogContent(thought, date);

  fs.writeFileSync(filepath, content, 'utf8');

  return {
    filename,
    filepath,
    title,
    date
  };
}

/**
 * Read all existing logs
 */
function readAllLogs() {
  ensureLogsDir();

  const files = fs.readdirSync(LOGS_DIR)
    .filter(f => f.endsWith('.log'))
    .sort()
    .reverse();

  return files.map(filename => {
    const filepath = path.join(LOGS_DIR, filename);
    const content = fs.readFileSync(filepath, 'utf8');
    return { filename, content };
  });
}

/**
 * Get log count
 */
function getLogCount() {
  ensureLogsDir();
  return fs.readdirSync(LOGS_DIR).filter(f => f.endsWith('.log')).length;
}

module.exports = {
  logThought,
  readAllLogs,
  getLogCount,
  ensureLogsDir,
  generateTitle,
  createLogContent,
  formatDateForFilename,
  LOGS_DIR
};
