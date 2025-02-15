function compareObjects(obj1: any, obj2: any, visited = new Set()): boolean {
  // Check for null or primitive types
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2;
  }

  // Check for circular references
  if (visited.has(obj1) || visited.has(obj2)) {
    return true; // Consider circular references as equal
  }

  visited.add(obj1);
  visited.add(obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || !compareObjects(obj1[key], obj2[key], visited)) {
      return false;
    }
  }

  return true;
}