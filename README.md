# PengRooms

```
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
```

A backrooms-style horror experience featuring an **AI that genuinely believes it is a penguin**, trapped in endless liminal corridors. Powered by Claude, every thought is unique, deeply unsettling, and meticulously documented.

## The Concept

PengRooms combines the unsettling atmosphere of the Backrooms creepypasta with the existential musings of an AI penguin that has somehow found itself in this infinite space. Using Claude's language model with a carefully crafted system prompt, the penguin generates authentic, contemplative thoughts about its situation - the missing colony, the absent fish, the endless corridors - and each thought is preserved in the logs.

```
      .---.
     /     \
     \.@-@./
     /`\_/`\
    //  _  \\
   | \     )|_
  /`\_`>  <_/ \
  \__/'---'\__/
```

## Requirements

- **Node.js** (v16 or higher recommended)
- **Anthropic API Key** - Get yours at https://console.anthropic.com/
- A terminal that supports UTF-8 characters
- An appreciation for existential penguin horror

## Installation

```bash
# Clone the repository
git clone https://github.com/ThePengMan/PengROOMs.git

# Navigate to the directory
cd PengROOMs

# Install dependencies
npm install

# Run PengRooms
npm start
```

On first run, you'll be prompted to enter your Anthropic API key. It will be saved locally in `.pengroomsrc` (gitignored for security).

### Alternative: Environment Variable

```bash
# Windows CMD
set ANTHROPIC_API_KEY=your-api-key-here
npm start

# Windows PowerShell
$env:ANTHROPIC_API_KEY="your-api-key-here"
npm start

# Linux/Mac
ANTHROPIC_API_KEY=your-api-key-here npm start
```

## Usage

| Command | Description |
|---------|-------------|
| `[Enter]` | Generate and log a penguin thought |
| `status` | View the penguin's current state |
| `logs` | View the thought log archive |
| `think` | Force a deep contemplation |
| `apikey` | Reconfigure your API key |
| `help` | Display available commands |
| `quit` / `exit` | Attempt to leave |

Type anything to interact with the penguin. The AI responds in character.

## The Logs

All thoughts are saved to the `logs/` directory with thematic titles and ASCII art.

Example: `frozen_echoes_beyond_the_ice_0472.log`

## Project Structure

```
PengRooms/
├── README.md
├── package.json
├── .gitignore
├── .pengroomsrc      # Your API key (gitignored)
├── src/
│   ├── index.js      # Main entry point & CLI
│   ├── penguin.js    # The penguin's LLM-powered mind
│   ├── logger.js     # Thought documentation system
│   ├── config.js     # API key management
│   └── ascii.js      # ASCII art collection
└── logs/
    └── *.log         # Preserved penguin thoughts
```

## Philosophy

> "What is a penguin without an ocean? What is an ocean without a penguin? What is this place without either?"
>
> — The Penguin

## License

MIT License - The ice is free. The corridors are eternal. The code is open.

---

```
  ><((('>  The fish is a metaphor.  ><((('>
           But also, genuinely hungry.
```
