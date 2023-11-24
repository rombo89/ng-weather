import { Inject, Injectable } from '@angular/core'
import { CACHE_TIME_MINUTES } from './app.module';

@Injectable()
export class CacheService {

    constructor(@Inject(CACHE_TIME_MINUTES) private cacheMinutes: number) { }

    /**
     * Get cached data from local storage
     * @param key 
     * @returns data if exists and if it isn't expired, null otherwise
     */
    get(key: string): any {
        const item = localStorage.getItem(key);
        if (item !== null) {
            const record = JSON.parse(item);
            const now = new Date().getTime();
            if (record.hasExpiration && record.expiration > now) {
                return JSON.parse(record.value);
            }
        }
        return null;
    }

    /**
     * Save on the local storage the data
     * - Set the expiration time if presents
     * @param opts 
     */
    put(opts: ILocalStorageCache): void {
        const expirationMins = opts.expirationMins ?? this.cacheMinutes;
        const expirationMS = expirationMins !== 0 ? (expirationMins * 60 * 1000) : 0; // Convert in miliseconds 
        const record = {
            value: typeof opts.data === 'string' ? opts.data : JSON.stringify(opts.data),
            expiration: expirationMS !== 0 ? new Date().getTime() + expirationMS : null,
            hasExpiration: expirationMS !== 0 ? true : false
        }
        localStorage.setItem(opts.key, JSON.stringify(record));
    }

    /**
     * Remove a record from local storage
     * @param key 
     */
    remove(key: string) {
        localStorage.removeItem(key)
    }

    /**
     * Clean local storage
     */
    cleanLocalStorage() {
        localStorage.clear()
    }
}

/**
 * Local storage cache model
 */
export interface ILocalStorageCache {
    key: string;
    data: any;
    expirationMins?: number; // Minutes
}