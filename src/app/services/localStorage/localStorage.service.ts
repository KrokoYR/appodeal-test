declare var localStorage: any;

class LocalStorageService {
  private readonly _available: boolean;

  // сделано для случая с SSR
  public static get available() {
    const key = `_check.${Date.now()}`;
    const value = `_value.${Date.now()}`;
    try {
      localStorage.setItem(key, value);
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor() {
    this._available = LocalStorageService.available;
  }

  public set<T>(key: string, item: T): void {
    if (!this._available) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(item));
  }

  public get<T, D = T>(key: string, def?: D): T | D | undefined {
    if (!this._available) {
      return def;
    }

    const data = localStorage.getItem(key);

    try {
      return data ? (JSON.parse(data) as T) : def;
    } catch (e) {
      console.error(e);
    }

    return def;
  }

  removeItem(key: string) {
    if (!this._available) {
      return;
    }

    localStorage.removeItem(key);
  }
}

export const localStorageService = new LocalStorageService();
