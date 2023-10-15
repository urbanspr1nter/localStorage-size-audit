/**
 * A quick script to get size of the values of localStorage
 * keys.
 *
 * Helpeful for debugging localStorage capacity issues.
 *
 * Returns a JSON-ified string of the informaiton.
 * @returns string
 */
const localStorageSpace = () => {
  const auditMap = {};
  for (const key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      if (!auditMap[key]) {
        auditMap[key] = 0;
      }
      auditMap[key] += (window.localStorage[key].length * 16) / (8 * 1024);
    }
  }
  return auditMap;
};

// Call th function with prettified formatting.
const auditStr = JSON.stringify(localStorageSpace(), undefined, 2);

// Print it out.
console.log(auditStr);
