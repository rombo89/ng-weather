/**
 * Local storage cache model
 */
export interface ILocalStorageCache {
    key: string;
    data: any;
    expirationMins?: number; // Minutes
}