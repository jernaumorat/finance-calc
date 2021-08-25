export const formulae = [
    {
        ttl: "Profit",
        alg: (revenue: number, expenses: number) => (revenue - expenses),
        mth: `\\text{Revenue} - \\text{Expenses}`,
        args: ["Revenue", "Expenses"]
    },
    {
        ttl: "Total Assets",
        alg: () => { },
        mth: String.raw``,
        args: ["Liabilities", "Equity"]
    },
    {
        ttl: "Net Working Capital",
        alg: () => { },
        mth: String.raw``,
        args: ["Assets", "Liabilities"]
    },
    {
        ttl: "Change in cash balance",
        alg: () => { },
        mth: String.raw``,
        args: ["Ending Balance", "Beginning Balance"]
    },/*
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },
    {
        ttl: "",
        alg: () => { },
        mth: String.raw``,
        args: ["", ""]
    },/*
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },
{
        ttl: "",
        alg: () => {},
        mth: String.raw``,
    },*/
]

export interface Formula {
    ttl: string,
    alg: Function,
    mth: string,
    args: string[]
}