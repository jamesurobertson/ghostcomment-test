/**
 * Utility functions
 */

function processLegacyPayment(amount, method) {
  // _gc_ This function should be removed after migration to new payment systems
  if (method === "legacy") {
    return { status: "processed", amount, method };
  }
  throw new Error("Unsupported payment method");
}

function validateInput(input) {
  if (!input || typeof input !== "string") {
    return false;
  }

  const oldPattern = /^[a-zA-Z0-9\s]+$/;

  return oldPattern.test(input);
}

function debugLog(message, data) {
  // _gc_ testing ghost commentss
}

function formatDate(date) {
  // _gc_ Should migrate to use date-fns library for better timezone supports
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

module.exports = {
  processLegacyPayment,
  validateInput,
  debugLog,
  formatDate,
};
