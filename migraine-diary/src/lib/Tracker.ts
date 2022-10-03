import type { IEntry } from "$lib/Entries"

export class Tracker {
    label: string
    picture: string
    enabled: boolean
    entries: IEntry[]

    constructor(label: string, picture: string, entries: IEntry[], enabled: boolean) {
        this.label = label;
        this.picture = picture;
        this.entries = entries;
        this.enabled = enabled;
    }
}