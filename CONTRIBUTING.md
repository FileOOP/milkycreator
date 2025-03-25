# Contributing to PengRooms

Thank you for your interest in contributing to PengRooms! The penguin welcomes company in the endless corridors.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the behavior
- Expected behavior vs actual behavior
- Your Node.js version and operating system
- Any relevant log output

### Suggesting Features

Feature suggestions are welcome! Please open an issue with:
- A clear description of the feature
- Why it would be useful
- Any implementation ideas you have

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**
4. **Test your changes**: Run `npm start` and verify functionality
5. **Update documentation** if needed
6. **Submit a pull request**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/ThePengMan/PengRooms.git
cd PengRooms

# Install dependencies
npm install

# Set your API key (for testing)
# Option 1: Environment variable
set ANTHROPIC_API_KEY=your-key-here  # Windows CMD
$env:ANTHROPIC_API_KEY="your-key"    # PowerShell
export ANTHROPIC_API_KEY=your-key    # Linux/Mac

# Option 2: Run and enter when prompted
npm start
```

## Project Structure

```
PengRooms/
├── src/
│   ├── index.js      # Main CLI entry point
│   ├── penguin.js    # LLM integration & penguin persona
│   ├── logger.js     # Log file management
│   ├── config.js     # API key configuration
│   └── ascii.js      # ASCII art collection
├── logs/             # Generated thought logs
├── package.json      # Dependencies & scripts
├── README.md         # Main documentation
├── CONTRIBUTING.md   # This file
├── CHANGELOG.md      # Version history
└── LICENSE           # MIT License
```

## Code Style

- Use 2-space indentation
- Use single quotes for strings
- Add JSDoc comments for functions
- Keep functions focused and modular

## Adding ASCII Art

New ASCII art can be added to `src/ascii.js`. Categories include:
- `penguins` - Penguin figures
- `corridors` - Backroom hallway patterns
- `ice` - Ice and snow patterns
- `fish` - Fish imagery
- `voids` - Empty/void patterns
- `glitches` - Error/glitch text

## Adding Thought Patterns

The penguin's mind is defined in `src/penguin.js`. The system prompt establishes:
- Identity as an Emperor Penguin
- Setting in the backrooms
- Personality traits and obsessions
- Writing style and tone

## Log Format

Logs follow a specific format:
- Header with entry number and location
- ASCII art penguin
- Thought content (substantial, 3-4+ paragraphs)
- Additional ASCII art
- Footer

## Questions?

Open an issue or reach out. The waddle continues, and so does our documentation.

---

```
  ><((('>  Thank you for contributing!  ><((('>
```
