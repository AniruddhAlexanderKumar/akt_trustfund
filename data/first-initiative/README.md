# First initiative — public ledger data

`ledger.json` is the only source of financial information shown on the website.
It is edited **only** by the adult family member overseeing the funds, and only
after a transaction has been verified against a bank statement, UPI record or
receipt.

Nothing in this file is read by client-side code, and no credentials or private
financial details belong here. Editing the file requires write access to this
repository, which is the access control for the ledger.

## Rules

1. **Verified only.** An entry is published only when it has `"verified": true`
   and a `"verifiedOn"` date. Anything else is ignored by the site.
2. **No personal data.** Never store a donor's full name, phone number, UPI ID,
   bank account number, transaction identifier, address or any student's
   details here. Use an anonymised label such as `"Family Contributor 01"`.
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
  "date": "2026-12-01",
  "verifiedOn": "2026-12-02",
  "kind": "contribution",
  "label": "Family Contributor 01",
  "amount": 10000,
  "note": "Optional, public, no personal detail.",
  "evidence": { "label": "Receipt (redacted)", "href": "/documents/first-initiative-fc-01.pdf" },
  "verified": true
}
```

`kind` is either `contribution` (money in) or `expenditure` (money out).
The running balance, the amount raised and the remaining target are all
calculated by the site, so they are never stored here.

An entry containing an email address, a UPI handle, an eight-digit-or-longer
number or a link is rejected automatically, so personal details cannot slip
into the published table.
