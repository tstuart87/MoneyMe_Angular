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

export interface Expense {
    OwnerId: number;
    Company: string;
    Description: string;
    Amount: number;
    Year: number;
    ExpenseId: number;
    Month: Months;
    // not sure if I need the 'public virtual Monthly Monthly' from Expenses.cs
}