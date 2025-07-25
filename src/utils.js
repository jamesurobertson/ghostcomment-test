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
  console.log("hello");

  const unsedVar = "world";
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
