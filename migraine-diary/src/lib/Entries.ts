
export interface IEntry {
    readonly type: string
    label: string
}
export class TextEntry implements IEntry {
    readonly type: string
    label: string
    constructor(label: string) {
        this.type = "text"
        this.label = label
    }
    
    public static fromJson(json: any): TextEntry{
        try {
            return new TextEntry(json.label);   
        } catch (error) {
            throw new SyntaxError("TextEntry could not be created from JSON");
        }
    }

}
export class DateTimeEntry implements IEntry {
    readonly type: string
    label: string
    constructor(label: string) {
        this.label = label
        this.type = "dateTime"
    }
    public static fromJson(json: any): DateTimeEntry{
        try {
            return new DateTimeEntry(json.label);   
        } catch (error) {
            throw new SyntaxError("DateTimeEntry could not be created from JSON");
        }
    }
}
export class NumberEntry implements IEntry {
    readonly type: string
    label: string
    unit: Unit

    constructor(label: string, unit: Unit) {
        this.type = "number"
        this.label = label;
        this.unit = unit;
    }
    public static fromJson(json: any): NumberEntry{
        try {
            return new NumberEntry(json.label, json.unit);   
        } catch (error) {
            throw new SyntaxError("NumberEntry could not be created from JSON");
        }
    }
}
export class TallyCounterEntry implements IEntry {
    readonly type: string
    label: string
    unit: Unit
    step_value: number
    initial_value: number

    constructor(label: string, unit: Unit, step_value: number, initial_value: number) {
        this.label = label
        this.unit = unit
        this.type = "tallyCounter"
        this.step_value = step_value
        this.initial_value = initial_value
    }
    public static fromJson(json: any): TallyCounterEntry{
        try {
            return new TallyCounterEntry(json.label, json.unit, json.step_value, json.initial_value);   
        } catch (error) {
            throw new SyntaxError("TallyCounterEntry could not be created from JSON");
        }
    }
}
export class RangeEntry implements IEntry {
    readonly type: string
    label: string
    min: number
    max: number

    constructor(label: string, min: number, max: number) {
        this.label = label
        this.min = min
        this.type = "range"
        this.max = max
    }
    public static fromJson(json: any): RangeEntry{
        try {
            return new RangeEntry(json.label, json.min, json.max);   
        } catch (error) {
            throw new SyntaxError("RangeEntry could not be created from JSON");
        }
    }
}
export enum Unit {
    percentage = "%", celcius = "°C", kilogram = "kg", miligram = "mg", gram = "g", amount = "",
    hour = "h", minute = "m", second = "s", liter = "l", deciliter = "dl", mililiter = "ml"
}
