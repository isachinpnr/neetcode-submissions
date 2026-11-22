class TimeMap {
  constructor() {
    this.store = new Map();
  }

  set(key, value, timestamp) {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    if (!this.store.has(key)) {
      return "";
    }

    const entries = this.store.get(key);
    let low = 0;
    let high = entries.length - 1;
    let result = "";

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (entries[mid][0] <= timestamp) {
        result = entries[mid][1];
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return result;
  }
}