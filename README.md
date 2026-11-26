# Office Artifacts: The One-Line Placard

[![Office Artifacts: The One-Line Placard Contest](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/muhamadyusufseptian6-lab/makefun-u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rank.svg)](https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/muhamadyusufseptian6-lab/makefun-u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/reward.svg)](https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

A make.fun entry for **Office Artifacts: The One-Line Placard Contest**. It
writes one line of museum-label deadpan for an ordinary office object,
treated as an ancient artifact from a lost civilisation — catalogue date,
material, donor, and one unforgiven grudge, all inside 180 characters.

## The placard

> Stapler, plated steel, c. 1998. Gift of Brenda in Payroll, who bound 11,000
> invoices with it before retiring. It jammed once, in 2004, and has never
> been forgiven.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes the placard verbatim
to `$MAKEFUN_OUTPUT_DIR/entry.txt` — one line, exactly 163 characters, no
trailing newline, inside the 1–180 character gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Run the tests

```sh
node test.mjs
```

---

Play make.fun with referral code **515temp1**.
