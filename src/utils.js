/**
 * Utility functions
 */

function processLegacyPayment(amount, method) {
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
  // _gc_ testing gc
  console.log("testing");
  console.log("hello");

  // _gc_ unused var
}

function formatDate(date) {
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

module.exports = {
  processLegacyPayment,
  validateInput,
  debugLog,
  formatDate,
};
