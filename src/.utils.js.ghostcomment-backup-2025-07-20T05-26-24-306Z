/**
 * Utility functions
 */

// _gc_ This function was for the old payment system, can be removed after migration
function processLegacyPayment(amount, method) {
  if (method === 'legacy') {
    return { status: 'processed', amount, method };
  }
  throw new Error('Unsupported payment method');
}

function validateInput(input) {
  if (!input || typeof input !== 'string') {
    return false;
  }
  
  // _gc_ This regex was too permissive, but keeping for backwards compatibility
  const oldPattern = /^[a-zA-Z0-9\s]+$/;
  
  return oldPattern.test(input);
}

// _gc_ Temporary logging function - replace with proper logger
function debugLog(message, data) {
  console.log(`[DEBUG] ${message}`, data);
}

function formatDate(date) {
  // _gc_ Using deprecated Date methods, should migrate to date-fns
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

module.exports = {
  processLegacyPayment,
  validateInput,
  debugLog,
  formatDate
};