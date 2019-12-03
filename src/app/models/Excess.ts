enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
export interface Excess {
    Month?: Months;
    Year?: number;
    Amount: number;
    OwnerId?: number;
}