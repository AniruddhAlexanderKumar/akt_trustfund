# Pilot 001 — public ledger data

`ledger.json` is the only source of financial information shown on
`/pilot-001`. It is edited **only** by the adult family administrator
responsible for Pilot 001, and only after a transaction has been verified
against a bank statement, UPI record or receipt.

Nothing in this file is rendered by client-side code, and no credentials or
private financial details belong here. Editing the file requires write access
to this repository, which is the access control for the ledger.

## Rules

1. **Verified only.** An entry is published only when it has `"verified": true`
   and a `"verifiedOn"` date. Anything else is ignored by the site.
2. **No personal data.** Never store a donor's full name, phone number, UPI ID,
   bank account number, transaction ID, address or any student's details here.
   Use an anonymised label such as `"Family Contributor 01"`.
3. **References are codes.** `reference` must match `XX-00`
   (two to five uppercase letters, a hyphen, two to four digits), for example
   `FC-01` for a contribution or `EXP-01` for an expenditure.
4. **Amounts are whole rupees.** Integers only, greater than zero.
5. **Evidence is redacted.** Supporting documents go in `public/documents/`,
   with account numbers, names, UPI handles and addresses removed. Link them as
   `/documents/<file>.pdf`. `..` and external URLs are rejected.

## Entry shape

```json
{
  "reference": "FC-01",
  "date": "2026-11-20",
  "verifiedOn": "2026-11-21",
  "kind": "contribution",
  "label": "Family Contributor 01",
  "amount": 1000,
  "note": "Optional, public, no personal detail.",
  "evidence": { "label": "Receipt (redacted)", "href": "/documents/pilot-001-fc-01.pdf" },
  "verified": true
}
```

`kind` is either `contribution` (money in) or `expenditure` (money out).
The running balance is calculated by the site, so it is never stored here.

## Award record

Until the scholarship has actually been paid and verified, `award` stays
`null`. Once a payment has been made, set:

```json
"award": {
  "paymentDate": "2026-12-15",
  "amountUsed": 5000,
  "expenseSupported": "One year of school fees.",
  "account": "An anonymised account of the outcome, with no personal detail.",
  "evidence": [{ "label": "Payment record (redacted)", "href": "/documents/pilot-001-award.pdf" }]
}
```

The site refuses to render an award whose `paymentDate` is not a valid date or
whose `amountUsed` is not a whole number of rupees.
