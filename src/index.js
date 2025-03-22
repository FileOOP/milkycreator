/**
 * PengRooms - Main Entry Point
 *
 * An LLM that believes it is a penguin, trapped in the backrooms.
 * Every thought is documented. Every waddle is eternal.
 *
 * The ice stretches forever. The corridors never end.
 * Welcome to PengRooms.
 */

const readline = require('readline');
const penguin = require('./penguin');
const logger = require('./logger');
const ascii = require('./ascii');
const config = require('./config');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper to ask a question with promise
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Clear screen
function clearScreen() {
  console.clear();
}

// Display the title
function showTitle() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║     ██████╗ ███████╗███╗   ██╗ ██████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗  ║
║     ██╔══██╗██╔════╝████╗  ██║██╔════╝ ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║  ║
║     ██████╔╝█████╗  ██╔██╗ ██║██║  ███╗██████╔╝██║   ██║██║   ██║██╔████╔██║  ║
║     ██╔═══╝ ██╔══╝  ██║╚██╗██║██║   ██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║  ║
║     ██║     ███████╗██║ ╚████║╚██████╔╝██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║  ║
║     ╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝  ║
║                                                                               ║
║                    ~ The Ice Stretches Forever ~                              ║
║                    ~ The Corridors Never End ~                                ║
║                    ~ The Penguin Thinks Alone ~                               ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
`);
}

// Display existing log count and LLM status
function showLogStatus() {
  const count = logger.getLogCount();
  const llmStatus = penguin.isInitialized() ? 'CONNECTED' : 'DISCONNECTED';
  console.log(`
  ┌─────────────────────────────────────────┐
  │  Existing thought logs: ${String(count).padStart(4, ' ')}            │
  │  LLM Status: ${llmStatus.padEnd(26, ' ')} │
  │  Status: DOCUMENTING                    │
  │  Temperature: -∞°C                      │
  └─────────────────────────────────────────┘
  `);
}

// Loading animation
function showLoading(message = 'The penguin is thinking') {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  return setInterval(() => {
    process.stdout.write(`\r${frames[i]} ${message}...`);
    i = (i + 1) % frames.length;
  }, 100);
}

function stopLoading(intervalId) {
  clearInterval(intervalId);
  process.stdout.write('\r' + ' '.repeat(60) + '\r');
}

// Setup API key
async function setupApiKey() {
  console.log(`
  ┌─────────────────────────────────────────────────────────────────┐
  │                     API KEY CONFIGURATION                        │
  ├─────────────────────────────────────────────────────────────────┤
  │  PengRooms requires an Anthropic API key to generate thoughts.  │
  │                                                                 │
  │  Get your API key at: https://console.anthropic.com/            │
  │                                                                 │
  │  Your key will be saved locally in .pengroomsrc                 │
  │  You can also set the ANTHROPIC_API_KEY environment variable.   │
  └─────────────────────────────────────────────────────────────────┘
`);

  const apiKey = await askQuestion('  Enter your Anthropic API key: ');

  if (!apiKey || apiKey.trim() === '') {
    console.log('\n  [ERROR] No API key provided. The penguin cannot think without it.\n');
    return false;
  }

  config.setApiKey(apiKey.trim());
  console.log('\n  [SUCCESS] API key saved. The penguin mind awakens.\n');
  return true;
}

// Main prompt loop
async function prompt() {
  const input = await askQuestion('\n[PENGUIN@BACKROOMS]> ');

  if (!input || input.trim() === '') {
    // Generate and log a spontaneous thought
    console.log('\n' + '─'.repeat(80));
    console.log('\n>> THOUGHT DETECTED <<\n');

    const loadingId = showLoading('The penguin contemplates the void');
    try {
      const thought = await penguin.generateThought();
      stopLoading(loadingId);
      console.log(thought);

      const logInfo = logger.logThought(thought);
      console.log('\n' + '─'.repeat(80));
      console.log(`[LOGGED]: ${logInfo.filename}`);
      console.log(ascii.getRandomPenguin());
    } catch (error) {
      stopLoading(loadingId);
      console.log(`[ERROR] ${error.message}`);
    }

    return prompt();
  }

  const trimmedInput = input.trim().toLowerCase();

  // Handle commands
  if (trimmedInput === 'quit' || trimmedInput === 'exit' || trimmedInput === 'q') {
    console.log('\n' + '─'.repeat(80));
    console.log(`
${ascii.getRandomPenguin()}

You attempt to leave PengRooms.
The door opens... but leads to another room.
The penguin continues to think.
The logs continue to accumulate.

Perhaps you will return. They always return.
The waddle... the waddle never stops.

[SESSION TERMINATED - BUT THE THOUGHTS PERSIST]
`);
    rl.close();
    process.exit(0);
  }

  if (trimmedInput === 'status') {
    const status = penguin.getStatus();
    console.log('\n' + '─'.repeat(80));
    console.log(`
  ╔════════════════════════════════════════╗
  ║         PENGUIN STATUS REPORT          ║
  ╠════════════════════════════════════════╣
  ║  Emotional State: ${status.emotionalState.padEnd(19, ' ')} ║
  ║  Is Lost:         ${String(status.isLost).padEnd(19, ' ')} ║
  ║  Fish Found:      ${String(status.fishFound).padEnd(19, ' ')} ║
  ║  Colony:          ${status.colonyStatus.padEnd(19, ' ')} ║
  ║  Time Elapsed:    ${status.timeInBackrooms.padEnd(19, ' ')} ║
  ║  LLM Connected:   ${String(status.llmConnected).padEnd(19, ' ')} ║
  ╚════════════════════════════════════════╝
`);
    return prompt();
  }

  if (trimmedInput === 'logs') {
    const logs = logger.readAllLogs();
    console.log('\n' + '─'.repeat(80));
    console.log('\n>> THOUGHT LOG ARCHIVE <<\n');
    console.log(`Total logs: ${logs.length}\n`);
    logs.slice(0, 10).forEach((log, i) => {
      console.log(`  ${i + 1}. ${log.filename}`);
    });
    if (logs.length > 10) {
      console.log(`  ... and ${logs.length - 10} more frozen in time`);
    }
    console.log('\n' + '─'.repeat(80));
    return prompt();
  }

  if (trimmedInput === 'help') {
    console.log(`
  ┌─────────────────────────────────────────────────────────────────┐
  │                     PENGROROOMS COMMANDS                         │
  ├─────────────────────────────────────────────────────────────────┤
  │  [Enter]    - Generate and log a penguin thought                │
  │  status     - View the penguin's current state                  │
  │  logs       - View the thought log archive                      │
  │  think      - Force a deep contemplation                        │
  │  apikey     - Reconfigure your Anthropic API key                │
  │  help       - Display this message                              │
  │  quit/exit  - Attempt to leave (results may vary)               │
  │                                                                 │
  │  Or type anything to interact with the penguin...               │
  │  Every interaction generates a thought. Every thought is logged.│
  └─────────────────────────────────────────────────────────────────┘
`);
    return prompt();
  }

  if (trimmedInput === 'apikey') {
    const success = await setupApiKey();
    if (success) {
      penguin.initialize();
    }
    return prompt();
  }

  if (trimmedInput === 'think') {
    console.log('\n' + '─'.repeat(80));
    console.log('\n>> DEEP CONTEMPLATION INITIATED <<\n');
    console.log(ascii.getRandomVoid());

    const loadingId = showLoading('Processing existential dread');
    try {
      const thought = await penguin.generateThought('The penguin enters a state of deep contemplation, pondering the nature of existence, memory, and the endless corridors.');
      stopLoading(loadingId);
      console.log(thought);

      const logInfo = logger.logThought(thought);
      console.log('\n' + '─'.repeat(80));
      console.log(`[DEEP THOUGHT LOGGED]: ${logInfo.filename}`);
      console.log(ascii.getRandomPenguin());
    } catch (error) {
      stopLoading(loadingId);
      console.log(`[ERROR] ${error.message}`);
    }

    return prompt();
  }

  // React to user input
  console.log('\n' + '─'.repeat(80));
  const loadingId = showLoading('The penguin processes your words');
  try {
    const reaction = await penguin.reactToInput(input);
    stopLoading(loadingId);
    console.log(`\n>> PENGUIN REACTION: ${reaction.reaction.toUpperCase()} <<\n`);
    console.log(reaction.thought);

    const logInfo = logger.logThought(reaction.thought);
    console.log('\n' + '─'.repeat(80));
    console.log(`[LOGGED]: ${logInfo.filename}`);
  } catch (error) {
    stopLoading(loadingId);
    console.log(`[ERROR] ${error.message}`);
  }

  return prompt();
}

// Main function
async function main() {
  clearScreen();
  showTitle();

  // Check if API key is configured
  if (!config.hasApiKey()) {
    console.log('\n  [NOTICE] No API key detected. Configuration required.\n');
    const success = await setupApiKey();
    if (!success) {
      console.log('  Cannot proceed without API key. Exiting...\n');
      rl.close();
      process.exit(1);
    }
  }

  // Initialize the penguin mind
  if (!penguin.initialize()) {
    console.log('  [ERROR] Failed to initialize penguin mind. Check your API key.\n');
    rl.close();
    process.exit(1);
  }

  clearScreen();
  showTitle();
  showLogStatus();
  console.log(penguin.introduce());

  // Wait for Enter to begin
  await askQuestion('');
  clearScreen();
  showTitle();
  console.log('\n>> PENGUIN THOUGHT DOCUMENTATION SYSTEM ACTIVATED <<\n');
  console.log('Type "help" for commands. Press Enter to generate a thought.\n');
  console.log(ascii.getRandomPenguin());
  prompt();
}

// Handle SIGINT gracefully
process.on('SIGINT', () => {
  console.log('\n\n[SIGNAL INTERRUPTED - THE PENGUIN NOTICES BUT CONTINUES THINKING]');
  process.exit(0);
});

// Start the application
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
