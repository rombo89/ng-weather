/**
 * Location state model to notificate the changes
 * - Use the index to remove because the user can add multiple identical locations/zipcode
 */
export interface ILocationState {
    locations: string[];
    action?: LocationAction;
    zipcodeAdded?: string;
    zipcodeIndexRemoved?: number; 
};

export enum LocationAction { ADD, REMOVE };
