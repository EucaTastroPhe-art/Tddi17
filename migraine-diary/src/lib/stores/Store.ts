import { writable } from "svelte/store";
import type { Writable, Subscriber } from "svelte/store";
import { get } from 'svelte/store'
import type { IEntry } from '$lib/Entries'
import { DateTimeEntry, NumberEntry, RangeEntry, TallyCounterEntry, TextEntry, Unit } from "$lib/Entries";
import { Tracker } from "$lib/Tracker";
export class TrackerDataStore {
    protected key: string
    protected initial
    protected writable_store: Writable<any>
    constructor(key) {
        this.key = key + 'TrackerData';
        this.initial = [];
        this.writable_store = writable(this.initial)
        if (localStorage.getItem(this.key) !== null) {
            const saved = JSON.parse(localStorage.getItem(this.key))
            this.writable_store.set(saved);
        }
    }

    private toString(value) {
        return JSON.stringify(value, null, 2)
    }
    public subscribe(run: Subscriber<any>) {

        return this.writable_store.subscribe(run)
    }

    public add(tracker_data) {
        if (localStorage.getItem(this.key) === null) {
            localStorage.setItem(this.key, this.toString(this.initial))
        }
        let current_value = JSON.parse(localStorage.getItem(this.key))
        current_value = [...current_value, tracker_data]
        this.writable_store.set(current_value)
        localStorage.setItem(this.key, this.toString(current_value))
    }

    public remove(tracker_data) {
        console.log("key: " + this.key);
        let list = JSON.parse(localStorage.getItem(this.key))
        console.log("list: " + list)
        list = list.filter(list_element => list_element['Created on'] !== tracker_data['Created on'])
        console.log(list)
        localStorage.setItem(this.key, this.toString(list))
        this.writable_store.set(list)
    }

    public replace(tracker_data_index, new_tracker) {
        let list = JSON.parse(localStorage.getItem(this.key))
        list.splice(tracker_data_index, 1, new_tracker);
        localStorage.setItem(this.key, this.toString(list))
        this.writable_store.set(list)
    }
}
export class TrackerStore {
    protected key: string
    protected initial
    protected writable_store: Writable<Tracker[]>
    constructor() {
        this.key = 'Trackers'
        if (localStorage.getItem(this.key) !== null) {
            // Get trackers from localstorage if it is not empty
            const saved = JSON.parse(localStorage.getItem(this.key))
            const trackers: Tracker[] = this.deserializeTrackers(saved);
            this.writable_store = writable(trackers);
        }
        else {
            // Create standard trackers if localstorage is empty.
            this.initial = this.initialTrackers();
            this.writable_store = writable(this.initial)
            // Load localstorage with initial trackers.
            localStorage.setItem(this.key, JSON.stringify(this.initial));
        }
    }

    private toString(value): string {
        return JSON.stringify(value, null, 0)
    }

    private deserializeTrackers(trackersJson): Tracker[] {
        let trackers: Tracker[] = [];
        for (let i = 0; i < trackersJson.length; i++) {
            const trackerJSON = trackersJson[i];
            let entries: IEntry[] = [];
            for (let j = 0; j < trackerJSON.entries.length; j++) {
                const entryJson = trackerJSON.entries[j];
                switch (entryJson.type) {
                    case 'text':
                        entries[j] = TextEntry.fromJson(entryJson)//new TextEntry(entryJSON.label);
                        break;
                    case 'dateTime':
                        entries[j] = DateTimeEntry.fromJson(entryJson);//new DateTimeEntry(entryJSON.label);
                        break;
                    case 'number':
                        entries[j] = NumberEntry.fromJson(entryJson);//new NumberEntry(entryJson.label, entryJson.unit);
                        break;
                    case 'tallyCounter':
                        entries[j] = TallyCounterEntry.fromJson(entryJson);
                        break;
                    case 'range':
                        entries[j] = RangeEntry.fromJson(entryJson);
                        break;
                    default:
                        break;
                }
            }
            let tracker = new Tracker(trackerJSON.label, trackerJSON.picture, entries, trackerJSON.enabled);
            trackers[i] = tracker;
        }
        return trackers;
    }

    public subscribe(run: Subscriber<any>) {

        return this.writable_store.subscribe(run)
    }

    public add(trackerdata): void {
        if (localStorage.getItem(this.key) === null) {
            localStorage.setItem(this.key, this.toString(this.initial))
        }
        let current_value = JSON.parse(localStorage.getItem(this.key))
        current_value = [...current_value, trackerdata]
        this.writable_store.set(current_value)
        localStorage.setItem(this.key, this.toString(current_value))
    }

    // Updates localStorage with whats currently in the store,
    // call this after modifying a tracker in the store.
    public sync(): void {
        localStorage.setItem(this.key, this.toString(get(this.writable_store)))
    }

    public remove(tracker: Tracker): void {
        let list = JSON.parse(localStorage.getItem(this.key))
        list = list.filter(list_element => list_element.label !== tracker.label)
        localStorage.setItem(this.key, this.toString(list))
        this.writable_store.set(list)
    }

    private initialTrackers(): Tracker[] {
        if (localStorage.getItem('Trackers') === null) {

            let migraineTracker = new Tracker('Migraine', "🤕", [
	            new DateTimeEntry("Date and time"),
                new RangeEntry('Migraine intensity', 1, 10),
                new TextEntry('Notes')
            ], true);

            let coffeeTracker = new Tracker('Coffee', "☕", [
	            new DateTimeEntry("Date and time"),
                new TallyCounterEntry('Cups of coffee', Unit.amount, 1, 1),
                new TextEntry('Notes')
            ], true);

            let sleepTracker = new Tracker('Sleep', "😴", [
	            new DateTimeEntry("Date and time"),
                new NumberEntry('Hours of sleep', Unit.hour),
                new RangeEntry('Sleep quality', 1, 10),
                new TextEntry('Notes')
            ], true);

            let alcoholTracker = new Tracker('Alcohol', "🍺", [
	            new DateTimeEntry("Date and time"),
                new NumberEntry('Bottles of beer', Unit.amount)
            ], true)

            let waterTracker = new Tracker('Water', '💧', [
	            new DateTimeEntry("Date and time"),
                new TallyCounterEntry('Water', Unit.deciliter, 1, 0)
            ], true)

            let ibuprofenTracker = new Tracker('Ibuprofen', '💊', [
	            new DateTimeEntry("Date and time"),
                new TallyCounterEntry('Number of pills', Unit.amount, 1, 0)
            ], true)

            let screenTimeTracker = new Tracker('Screen time', '💻', [
	            new DateTimeEntry("Date and time"),
                new NumberEntry('Hours of screen time', Unit.hour)
            ], true)

            let allEntriesTracker = new Tracker('TEST', '🌈', [
	            new DateTimeEntry("Date and time"),
                new DateTimeEntry('Another DateTime'),
                new NumberEntry('Number', Unit.amount),
                new RangeEntry('Range', 0, 10),
                new TallyCounterEntry('TallyCounter', Unit.amount, 1, 0),
                new TextEntry('Text')
            ], true)
            return [migraineTracker, coffeeTracker, sleepTracker, alcoholTracker, waterTracker, ibuprofenTracker, screenTimeTracker, allEntriesTracker];
        }
    }
}
