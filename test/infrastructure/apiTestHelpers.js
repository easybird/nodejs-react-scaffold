function loopItems(text, items) {
  items.forEach((item) => {
    if (item instanceof Array) {
      loopItems(text, item);
    } else if (text.indexOf(item) === -1) {
      throw new Error(`Does not contain substring: ${item}. But instead contains ${JSON.stringify(text)}`);
    }
  });
}

export function containsAllSubstrings(text, expectedSubstrings) {
  loopItems(text, expectedSubstrings);
}
