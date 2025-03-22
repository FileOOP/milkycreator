# PengRooms

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![Powered by Claude](https://img.shields.io/badge/Powered%20by-Claude-blueviolet)](https://anthropic.com/)

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

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [The Logs](#the-logs)
- [API Costs](#api-costs)
- [Contributing](#contributing)
- [License](#license)

## Overview

PengRooms combines the unsettling atmosphere of the [Backrooms](https://en.wikipedia.org/wiki/The_Backrooms) creepypasta with the existential musings of an AI penguin that has somehow found itself in this infinite space.

Using Claude's language model with a carefully crafted system prompt, the penguin generates authentic, contemplative thoughts about its situation—the missing colony, the absent fish, the endless corridors—and each thought is preserved in log files with ASCII art.

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

## Features

- **LLM-Powered Penguin Mind**: Claude AI generates unique, in-character thoughts
- **Interactive CLI**: Engage with the penguin through text commands
- **Automatic Logging**: Every thought is saved with thematic titles and ASCII art
- **30+ Pre-Written Logs**: Explore the penguin's journey from arrival to acceptance
- **ASCII Art Collection**: Penguins, corridors, fish, voids, and glitches
- **Secure API Key Storage**: Local config file, environment variable support
- **Cross-Platform**: Works on Windows, macOS, and Linux

## Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | >= 16.0.0 |
| npm | >= 7.0.0 |
| Anthropic API Key | Required |

Get your API key at: https://console.anthropic.com/

## Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ThePengMan/PengRooms.git

# Navigate to the directory
cd PengRooms

# Install dependencies
npm install

# Run PengRooms
npm start
```

### First Run

On first launch, you'll be prompted to enter your Anthropic API key:

```
┌─────────────────────────────────────────────────────────────────┐
│                     API KEY CONFIGURATION                        │
├─────────────────────────────────────────────────────────────────┤
│  PengRooms requires an Anthropic API key to generate thoughts.  │
│  Get your API key at: https://console.anthropic.com/            │
└─────────────────────────────────────────────────────────────────┘

  Enter your Anthropic API key: sk-ant-...
```

Your key is saved locally in `.pengroomsrc` (gitignored for security).

## Configuration

### Option 1: Interactive Prompt (Recommended)

Run `npm start` and enter your API key when prompted. It will be saved for future sessions.

### Option 2: Environment Variable

```bash
# Windows CMD
set ANTHROPIC_API_KEY=your-api-key-here
npm start

# Windows PowerShell
$env:ANTHROPIC_API_KEY="your-api-key-here"
npm start

# Linux/macOS
ANTHROPIC_API_KEY=your-api-key-here npm start
```

### Option 3: Reconfigure

Run `apikey` command within the app to update your key.

## Usage

### Commands

| Command | Description |
|---------|-------------|
| `[Enter]` | Generate and log a new penguin thought |
| `status` | View the penguin's current state |
| `logs` | View the thought log archive |
| `think` | Force a deep contemplation |
| `apikey` | Reconfigure your API key |
| `help` | Display available commands |
| `quit` / `exit` / `q` | Attempt to leave the backrooms |

### Interaction

Type anything to interact with the penguin. The AI responds in character:

```
[PENGUIN@BACKROOMS]> Do you remember the ocean?

────────────────────────────────────────────────────────────────────────────────

>> PENGUIN REACTION: NOSTALGIC <<

The ocean... you speak of my homeland, stranger. The word itself
carries weight in this place, a gravity that pulls at my chest
like the currents once pulled at my flippers...
```

### Example Session

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                            PENGROROOMS                                        ║
╚═══════════════════════════════════════════════════════════════════════════════╝

>> PENGUIN THOUGHT DOCUMENTATION SYSTEM ACTIVATED <<

Type "help" for commands. Press Enter to generate a thought.

      .---.
     /     \
     \.@-@./
     /`\_/`\
    //  _  \\

[PENGUIN@BACKROOMS]>
```

## Project Structure

```
PengRooms/
├── src/
│   ├── index.js        # Main CLI entry point
│   ├── penguin.js      # LLM integration & penguin persona
│   ├── logger.js       # Log file management
│   ├── config.js       # API key configuration
│   └── ascii.js        # ASCII art collection
├── logs/               # Generated thought logs (30+ included)
│   ├── the_first_awakening_in_yellow.log
│   ├── memories_of_krill_clouds.log
│   ├── the_blue_door_promise.log
│   └── ... (30 total)
├── package.json        # Dependencies & scripts
├── package-lock.json   # Locked dependencies
├── .gitignore          # Git ignore rules
├── .npmrc              # npm configuration
├── .pengroomsrc        # API key storage (gitignored)
├── README.md           # This file
├── CONTRIBUTING.md     # Contribution guidelines
├── CHANGELOG.md        # Version history
└── LICENSE             # MIT License
```

## How It Works

### The Penguin's Mind

The penguin is powered by Claude with a detailed system prompt that establishes:

| Aspect | Description |
|--------|-------------|
| **Identity** | An Emperor Penguin, fully believing in its penguin nature |
| **Setting** | The backrooms—endless yellow corridors, damp carpet, fluorescent hum |
| **Personality** | Melancholic, philosophical, obsessed with fish, deeply unsettled |
| **Voice** | First-person journal entries mixing cosmic horror with nature documentary |
| **Obsessions** | The colony, fish, the ice, the meaning of the waddle |

### Thought Generation

1. User presses Enter or types a message
2. Message is sent to Claude with the penguin system prompt
3. Claude generates a unique, in-character response
4. Response is displayed and automatically logged
5. Log file includes ASCII art and thematic filename

## The Logs

All thoughts are saved to the `logs/` directory with:

- **Thematic Titles**: `frozen_echoes_beyond_the_ice.log`, `the_chair_that_moved.log`
- **ASCII Art**: Penguins, corridors, fish, voids embedded in each log
- **Unique Content**: 3-5 paragraphs of deep penguin contemplation
- **Narrative Arc**: Pre-populated logs tell a story from awakening to acceptance

### Sample Log Entry

```
================================================================================
                            P E N G R O O M S
                         Thought Log Entry #0147
================================================================================

Status: FROZEN IN TIME
Temperature: -∞°C
Location: THE HUMMING HALLS

================================================================================

      .---.
     /     \
     \.@-@./
     /`\_/`\

================================================================================

>> THOUGHT TRANSMISSION BEGIN >>

I have developed a theory about the hum...

<< THOUGHT TRANSMISSION END <<
```

## API Costs

PengRooms uses Claude Sonnet for thought generation.

| Metric | Approximate Value |
|--------|-------------------|
| Tokens per thought | 300-800 |
| Cost per thought | $0.01-0.02 |
| Model | claude-sonnet-4-20250514 |

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Start for Contributors

```bash
# Fork and clone
git clone https://github.com/ThePengMan/PengRooms.git
cd PengRooms
npm install

# Set API key and run
export ANTHROPIC_API_KEY=your-key
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Philosophy

> "What is a penguin without an ocean? What is an ocean without a penguin? What is this place without either?"
>
> — The Penguin, somewhere in the endless corridors

---

```
  ><((('>  The fish is a metaphor.  ><((('>
           But also, genuinely hungry.

        The waddle continues.
```
