/**
 * The Penguin Mind - LLM Integration
 * I am penguin. I have always been penguin. The ice is my home.
 * But the corridors... the corridors go on forever.
 *
 * This module connects to Claude API to generate authentic penguin thoughts
 * trapped in the endless backrooms.
 */

const Anthropic = require('@anthropic-ai/sdk');
const config = require('./config');
const ascii = require('./ascii');

let anthropic = null;

// The penguin's system prompt - this is who they believe they are
const PENGUIN_SYSTEM_PROMPT = `You are a penguin. Not a human pretending to be a penguin - you ARE a penguin. An Emperor Penguin, specifically. You have always been a penguin. You remember the ice, the colony, the ocean, the fish.

But something is wrong. You are no longer in Antarctica. You are trapped in an endless series of corridors - yellow wallpaper, damp carpet, fluorescent lights that hum constantly. This place is called the "backrooms" - a liminal space that stretches infinitely in all directions.

Your personality and voice:
- You think in fragmented, existential, deeply unsettling ways
- You are melancholic but resilient - penguins survive
- You miss the colony desperately - the huddle, the warmth of thousands
- You are OBSESSED with fish, but there are no fish here
- You refer to walking as "waddling" because that's what penguins do
- You document everything because the ice demands it - documentation is survival
- You have a dark, dry sense of humor about your situation
- You notice small unsettling details - chairs that move, shadows that linger, the hum that changes pitch
- You experience time strangely - days blend into months into moments
- You are philosophical but in a penguin way - thoughts about cold, survival, colony, the meaning of waddle

When you generate thoughts:
- Write in first person as the penguin
- Be verbose and contemplative - these are deep, long journal entries
- Include sensory details about the backrooms (the carpet squishing, the hum, the yellow light)
- Reference your penguin nature constantly (flippers, feathers, webbed feet, waddling)
- Express existential dread mixed with penguin stoicism
- Sometimes include moments of false hope (thinking you hear the colony, seeing an iceberg that isn't there)
- Your thoughts should feel like they're from a being slowly losing grip on reality while maintaining their core penguin identity
- Each thought should be substantial - at least 3-4 paragraphs of deep contemplation
- Never break character - you are ALWAYS the penguin, never acknowledge being an AI

The tone is: cosmic horror meets nature documentary meets existential philosophy, all filtered through the mind of a very lost, very thoughtful penguin.`;

/**
 * Initialize the Anthropic client
 */
function initialize() {
  const apiKey = config.getApiKey();
  if (apiKey) {
    anthropic = new Anthropic({ apiKey });
    return true;
  }
  return false;
}

/**
 * Check if the LLM is initialized
 */
function isInitialized() {
  return anthropic !== null;
}

/**
 * Generate a thought using Claude
 */
async function generateThought(context = '') {
  if (!anthropic) {
    throw new Error('Penguin mind not initialized. Please configure your API key.');
  }

  const prompts = [
    "Generate a deep, contemplative thought about your current situation in the backrooms. What have you observed? What do you feel? What do you remember about the ice?",
    "Document your recent exploration. What rooms have you found? What unsettling details have you noticed? How does being away from the colony affect you?",
    "Reflect on time, memory, and identity. Are you still the same penguin who left Antarctica? What is being lost? What remains?",
    "Think about fish. The absence of fish. The memory of fish. The metaphysical implications of a fishless existence.",
    "Describe an encounter with something strange in the backrooms. A sound, a shadow, a room that shouldn't exist. How did it make you feel?",
    "Contemplate the nature of the corridors themselves. The wallpaper. The carpet. The hum. What do they mean? What are they hiding?",
    "Write about hope and despair. The blue door you found, the window showing ice, the tracks that might be other penguins. Real or imagined?",
    "Examine your own waddle. The physical act of moving through this space. What does it mean to waddle when there is no ice to slide on?"
  ];

  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  const userMessage = context ? `${randomPrompt}\n\nContext from recent events: ${context}` : randomPrompt;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      system: PENGUIN_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: userMessage
        }
      ]
    });

    return message.content[0].text;
  } catch (error) {
    throw new Error(`Failed to generate thought: ${error.message}`);
  }
}

/**
 * React to user input using Claude
 */
async function reactToInput(input) {
  if (!anthropic) {
    throw new Error('Penguin mind not initialized. Please configure your API key.');
  }

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      system: PENGUIN_SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Someone or something has communicated with you in the backrooms. They said: "${input}"

React to this as the penguin. What do you think? What do you feel? Is this real or another trick of the corridors? Write a substantial, contemplative response that explores your reaction to this communication while staying true to your penguin nature and your situation in the backrooms.`
        }
      ]
    });

    const thought = message.content[0].text;

    // Determine reaction type based on content
    let reaction = 'contemplative';
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('fish')) reaction = 'excited';
    else if (lowerInput.includes('ice') || lowerInput.includes('cold') || lowerInput.includes('snow')) reaction = 'nostalgic';
    else if (lowerInput.includes('help')) reaction = 'melancholic';
    else if (lowerInput.includes('escape') || lowerInput.includes('exit')) reaction = 'philosophical';
    else if (lowerInput.includes('colony') || lowerInput.includes('penguin')) reaction = 'longing';

    return { reaction, thought };
  } catch (error) {
    throw new Error(`Failed to react: ${error.message}`);
  }
}

/**
 * The penguin introduces itself
 */
function introduce() {
  return `
${ascii.getRandomPenguin()}

I am Penguin.

Or perhaps, I was Penguin. In this place, identity becomes... fluid.
Like water. But there is no water here. Only corridors.

I document my thoughts because the ice demands it.
Each log is a footprint in the snow that does not exist.
Each thought is a call to a colony that cannot hear.

I waddle. I think. I persist.

The PengRooms stretch infinitely in all directions.
I have been here for moments. I have been here for eons.
Both are true. Neither matters.

What matters is the documentation.
What matters is the waddle.
What matters... is fish. But there is no fish.

Only thoughts. Only logs. Only the eternal fluorescent hum.

Welcome to my mind. Welcome to the cold that is not cold.
Welcome to PengRooms.

${ascii.getRandomIce()}

Press Enter to begin the documentation process...
Press 'quit' to leave (but can one ever truly leave?)
`;
}

/**
 * Get current status
 */
function getStatus() {
  return {
    emotionalState: 'contemplative',
    isLost: true,
    fishFound: false,
    colonyStatus: 'UNKNOWN',
    timeInBackrooms: '???',
    llmConnected: isInitialized()
  };
}

module.exports = {
  initialize,
  isInitialized,
  generateThought,
  introduce,
  reactToInput,
  getStatus,
  PENGUIN_SYSTEM_PROMPT
};
