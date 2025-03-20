# Changelog

All notable changes to PengRooms will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-24

### Added
- Initial release of PengRooms
- Claude AI integration for generating penguin thoughts
- Interactive CLI with commands: `status`, `logs`, `think`, `help`, `apikey`, `quit`
- Automatic thought logging with thematic filenames
- ASCII art collection (penguins, corridors, ice, fish, voids, glitches)
- API key configuration via prompt or environment variable
- 30 pre-populated thought logs telling the penguin's story
- Loading animations during thought generation
- Comprehensive README documentation
- MIT License

### Technical
- Node.js CLI application
- Anthropic SDK integration (`@anthropic-ai/sdk`)
- Modular architecture:
  - `index.js` - Main CLI
  - `penguin.js` - LLM persona
  - `logger.js` - File management
  - `config.js` - Configuration
  - `ascii.js` - Art assets

## [Unreleased]

### Planned
- Multiple penguin personalities
- Log browsing and reading from CLI
- Export logs to different formats
- Web interface option
- Conversation history for context-aware responses

---

```
  The waddle continues. The changelog grows.
  ><((('>
```
