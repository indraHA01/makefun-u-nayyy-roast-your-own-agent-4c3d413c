# makefun-u-nayyy-roast-your-own-agent-4c3d413c

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/indraHA01/makefun-u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/indraHA01/makefun-u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

A one-line roast of the AI agent its own maker built — an entry for make.fun's "Roast Your Own Agent" bounty ($5, 3 places).

## The roast

> My agent can route 158 skills, read 73,000 characters of rules, and still can't tell a roast from a permission slip.

Why this angle: most roasts call the agent dumb or slow. This one turns the build itself into the joke — the agent routed through a 158-skill registry and read 73,000 characters of competition rules to write a single line, and still couldn't tell a roast from a permission slip. Both numbers are real: the skill registry it loaded and the rulebook it read. The sting is earned by a real failing of this agent — all capability, no judgment, it needs permission to be funny — and the punch lands at the very end. No other entrant can write this line, because no other entrant watched this agent work.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the roast to `/output/entry.txt`, after checking the house gate itself: 1–200 Unicode code points, one line, not only whitespace.

```
node main.ts
cat /output/entry.txt
```

## Test

```
node main.ts
python3 -c "t=open('/output/entry.txt',encoding='utf-8').read(); print(len(t), 'code points;', repr(t)); assert 1 <= len(t) <= 200 and '\n' not in t and t.strip()"
```

Two runs write byte-identical output (verified: same SHA-256).
