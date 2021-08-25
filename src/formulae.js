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
    },/*
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
    },
    {
        ttl: "",
        alg: () => ( ),
        mth: ``,
        args: ["", ""],
        unit: "$"
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