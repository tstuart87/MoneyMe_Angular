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

export interface FutureFun {
    FunId: number;
    OwnerId: string;
    Description: string;
    Amount: number;
}

export interface MonthlyBasicInfo {
    MonthId?: number;
    Year?: number;
    Month?: Months;
    Percent?: number;
    Excess?: number;
    TotalIncome?: number;
    TotalDebt?: number;
    TotalFun?: number;
    TotalExpenses?: number;
    Income?: IncomeModel;
    Debt?: DebtModel;
    Expense?: ExpenseModel;
    Fun?: FunModel;
}

export interface IncomeModel {
    IncomeId?: number;
    OwnerId?: number;
    Description: string;
    Amount: number;
    Monthly: MonthlyDataLayer;
}
export interface DebtModel {
    DebtId?: number;
    OwnerId?: number;
    Company: string;
    Description: string;
    Amount: number;
    Year: number;
    Monthly: MonthlyDataLayer;
}
export interface ExpenseModel {
    ExpenseId?: number;
    OwnerId?: number;
    Company: string;
    Description: string;
    Amount: number;
    Year: number;
    Monthly: MonthlyDataLayer;
}
export interface FunModel {
    FunId?: number;
    OwnerId?: number;
    Description: string;
    Amount: number;
    Monthly: MonthlyDataLayer;
}
export interface MonthlyDataLayer {
    MonthId?: number;
    OwnerId?: number;
    Year: number;
    Month: Months;
    Percent: number;
    Excess: number;
    Income: IncomeModel;
    Debt: DebtModel;
    Expense: ExpenseModel;
    Fun: FunModel;
}