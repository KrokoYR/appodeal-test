class LocalStorageService {
  set<T>(key: string, value: T): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any | null {
    const result = localStorage.getItem(key);
    return result && JSON.parse(result);
  }
}

export const localStorageService = new LocalStorageService();
