export const formulae = [
    {
        ttl: "Profit",
        alg: (rev, exp) => (rev - exp),
        mth: `\\text{Revenue} - \\text{Expenses}`,
        args: ["Revenue", "Expenses"],
        unit: "$"
    },
    {
        ttl: "Total Assets",
        alg: (lia, eq) => (lia + eq),
        mth: `\\text{Liabilities} + \\text{Equity}`,
        args: ["Liabilities", "Equity"],
        unit: "$"
    },
    {
        ttl: "Net Working Capital",
        alg: (ass, lia) => (ass - lia),
        mth: `\\text{Assets} - \\text{Liabilities}`,
        args: ["Assets", "Liabilities"],
        unit: "$"
    },
    {
        ttl: "Change in Cash Balance",
        alg: (end, beg) => (end - beg),
        mth: `\\text{Ending Balance} - \\text{Beginning Balance}`,
        args: ["Ending", "Beginning"],
        unit: "$"
    },
    {
        ttl: "Simple Interest for One Period",
        alg: (pv, i) => (pv * i),
        mth: `PV_0 \\times i`,
        args: ["Present Value", "Interest Rate"],
        unit: "$"
    },
    {
        ttl: "Future Value using Simple Interest",
        alg: (pv, i, n) => (pv * (1 + (i * n))),
        mth: `PV\\left(1+in\\right)`,
        args: ["Present Value", "Interest Rate", "Periods"],
        unit: "$"
    },
    {
        ttl: "Present Value using Simple Interest",
        alg: (fv, i, n) => (fv * (1 / (1 + (i * n)))),
        mth: `FV_n \\times \\frac{1}{1+in}`,
        args: ["Future Value", "Interest Rate", "Periods"],
        unit: "$"
    },
    {
        ttl: "Future Value using Compound Interest",
        alg: (pv, i, m, n) => (pv * ((1 + (i / m)) ** (m * n))),
        mth: `PV \\left(1+\\frac{i}{m} \\right) ^{m \\times n}`,
        args: ["Present Value", "Annual Interest Rate", "Compounding Periods per Year", "Years"],
        unit: "$"
    },
    {
        ttl: "Present Value using Compound Interest",
        alg: (fv, i, m, n) => (fv * (1 / ((1 + (i / m))**m))),
        mth: `FV_n \\times \\frac{1}{\\left(1+\\frac{i}{m}\\right)^{m\\times n}}`,
        args: ["Future Value", "Annual Interest Rate", "Compounding Periods per Year", "Years"],
        unit: "$"
    },
    {
        ttl: "Effective Annual Rate of Interest (EAR)",
        alg: (i, m) => (((1 + (i / m)) ** m) - 1),
        mth: `\\left(1+\\frac{i}{m}\\right)-1`,
        args: ["Interest Rate per Period", "Compounding Periods per Year"],
        unit: "%"
    },
    {
        ttl: "EAR with Continuous Compounding",
        alg: (i) => (Math.exp(i) - 1),
        mth: `e^i - 1`,
        args: ["Annual Interest Rate"],
        unit: "%"
    },
    {
        ttl: "72 Rule",
        alg: (i) => (72 / (i*100)),
        mth: `\\frac{72}{100i}`,
        args: ["Annual Interest Rate"],
        unit: "years"
    },
    {
        ttl: "Promissory Note Interest Rate",
        alg: (v, p, n) => (((v-p)/p) * (1/(n/365))),
        mth: `\\frac{V-P}{P} \\times \\frac{1}{n \\div 365}`,
        args: ["Present Value", "Principle", "Periods"],
        unit: "%"
    },
    {
        ttl: "Cash Conversion Cycle",
        alg: (inv, ard, apd) => (inv + ard - ard),
        mth: `\\text{Inventory} + \\text{AR} - \\text{AP}`,
        args: ["Inventory Days", "Accounts Recievable Days", "Accounts Payable Days"],
        unit: "days"
    },
    {
        ttl: "Current Ratio",
        alg: (ass, lia) => (ass / lia),
        mth: `\\frac{\\text{Current Assets}}{\\text{Current Liability}}`,
        args: ["Current Assets", "Current Liability"],
        unit: "%"
    },
    {
        ttl: "Acid-test Ratio",
        alg: (ass, inv, lia) => ((ass - inv) / lia),
        mth: `\\frac{\\text{Current Assets} - \\text{Inventory}}{\\text{Current Liability}}`,
        args: ["Current Assets", "Inventory", "Current Liability"],
        unit: "%"
    },/*
    {
        ttl: "Accounts Recievable Days",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "days"
    },
    {
        ttl: "Accounts Receivable Turnover",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "Inventory Days",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "days"
    },
    {
        ttl: "Inventory Turnover",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "Accounts Payable Days Outstanding",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "days"
    },
    {
        ttl: "Debt Ratio",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Debt-to-Equity Ratio",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Interest Coverage Ratio",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Total Asset Turnover",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "Fixed Asset Turnover",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "Gross Profit Margin",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Operating Profit Margin",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Net Profit Margin",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Return on Assets",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Return on Equity",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Return on Equity (DuPont Analysis)",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Price-Earnings ratio",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },
    {
        ttl: "Market-to-Book ratio",
        alg: () => (),
        mth: ``,
        args: ["", ""],
        unit: "%"
    },/*
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },
{
        ttl: "",
        alg: () => {},
        mth: ``,
    },*/
]