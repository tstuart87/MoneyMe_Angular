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

export interface Expenses {
    OwnerId: string;
    Company: string;
    Description: string;
    Amount: number;
    Year: number;
    Month: Months;
    ExpenseId: number;
}