/**
 * Configuration Manager for PengRooms
 * Handles API key storage and retrieval
 */

const fs = require('fs');
const path = require('path');

const CONFIG_DIR = path.join(__dirname, '..');
const CONFIG_FILE = path.join(CONFIG_DIR, '.pengroomsrc');

/**
 * Load configuration from file
 */
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = fs.readFileSync(CONFIG_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    // Config file doesn't exist or is invalid
  }
  return {};
}

/**
 * Save configuration to file
 */
function saveConfig(config) {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Failed to save configuration:', error.message);
    return false;
  }
}

/**
 * Get API key from config or environment
 */
function getApiKey() {
  // First check environment variable
  if (process.env.ANTHROPIC_API_KEY) {
    return process.env.ANTHROPIC_API_KEY;
  }

  // Then check config file
  const config = loadConfig();
  return config.apiKey || null;
}

/**
 * Set API key in config
 */
function setApiKey(apiKey) {
  const config = loadConfig();
  config.apiKey = apiKey;
  return saveConfig(config);
}

/**
 * Check if API key is configured
 */
function hasApiKey() {
  return !!getApiKey();
}

/**
 * Clear API key from config
 */
function clearApiKey() {
  const config = loadConfig();
  delete config.apiKey;
  return saveConfig(config);
}

module.exports = {
  loadConfig,
  saveConfig,
  getApiKey,
  setApiKey,
  hasApiKey,
  clearApiKey,
  CONFIG_FILE
};
