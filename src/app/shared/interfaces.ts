export interface appState {
    countR: CountReducer,
    npcsR: NpcsReducer
}

export interface CountReducer {
    count: number
}

export interface NpcsReducer {
    npcs: any[],
    messageError: string
}