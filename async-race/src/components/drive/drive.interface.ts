export type EngineMode = 'started' | 'stopped' | 'drive';

export interface IEngine {
    velocity: number;
    distance: number;
    success: boolean;
}
