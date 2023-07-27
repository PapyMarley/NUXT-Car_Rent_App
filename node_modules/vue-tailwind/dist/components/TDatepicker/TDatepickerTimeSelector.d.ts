import Vue from 'vue';
declare const TDatepickerTimeSelector: import("vue/types/vue").ExtendedVue<Vue, {
    localActiveDate: Date;
    alreadyTriedAnInvalidValue: boolean;
    lastValidValue: string;
    timeInputKeys: string[];
}, {
    handleFullTimeBlur(e: FocusEvent): void;
    focusNextElementFullTimeSelector(): void;
    focusOkButton(): void;
    handleTimeInputFocus(e: FocusEvent): void;
    handleTimeInput(e: InputEvent, maxValue: number, minValue: number, valueHandler: (numericValue: number) => void): void;
    setHours(hours: number): void;
    setMinutes(minutes: number): void;
    setSeconds(seconds: number): void;
    updateSecondsInput(): void;
    updateMinutesInput(): void;
    updateHoursInput(): void;
    focus(): void;
}, {
    amPmFormatted: string | null;
    minutesFormatted: string;
    hoursFormatted: string;
    secondsFormatted: string;
}, {
    parse: Function;
    format: Function;
    amPm: boolean;
    showSeconds: boolean;
    activeDate: string;
    locale: any;
    getElementCssClass: Function;
}>;
export default TDatepickerTimeSelector;
