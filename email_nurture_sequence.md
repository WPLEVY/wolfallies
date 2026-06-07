# Wolf Allies — Email Nurture Sequence
## 3 Emails Over 7 Days
### Triggered by: Trustee Checklist Download

---

## EMAIL 1 — Immediate (send on submit)

**Subject:** Your California Trustee Checklist + what to expect next

**From:** William Plevy | Wolf Allies <hello@wolfallies.com>

---

Hi [First Name],

Your California Successor Trustee Checklist is attached to this email.

It covers the 12 steps every California successor trustee needs to complete — in the right order, with the California-specific deadlines that matter most. Print it, bookmark it, or keep it wherever you track your progress.

**A few things worth knowing as you get started:**

The most common mistake trustees make is waiting too long before contacting a real estate agent. If trust property needs to be sold, you can list it — and should list it — as soon as you have your Certification of Trust in hand. Every month of delay is carrying costs: insurance, property taxes, maintenance. Move early.

The second most common mistake: accepting the first investor offer that arrives. Cash offers on trust and inherited property are almost always 20-30% below fair market value. You have a fiduciary obligation to do better. The right agent, properly marketing the property, consistently achieves significantly more.

**If you're ready to connect with a specialist:**

Wolf Allies connects trustees with agents who handle trust and probate sales specifically — in your city, for your situation. It costs you nothing. Submit your information at wolfallies.com and a specialist will call you within hours.

Wishing you clarity in a complicated time.

William B. Plevy
California Attorney · California Real Estate Broker, DRE #01956776
Founder, Wolf Allies
wolfallies.com

*Wolf Allies is a real estate referral platform. This email does not constitute legal advice. For legal advice, consult a qualified California attorney.*

---

## EMAIL 2 — Day 3

**Subject:** The 3 most expensive trustee mistakes in California

**From:** William Plevy | Wolf Allies <hello@wolfallies.com>

---

Hi [First Name],

A few days ago you downloaded our California Trustee Checklist. I wanted to follow up with something that might save you significant money.

After working at the intersection of California law and real estate, I've seen three mistakes that cost trustees — and ultimately the beneficiaries they serve — the most.

**Mistake 1: Taking the first cash offer**

Investors target inherited and trust properties specifically because families are under stress and often unaware of the property's real market value. A cash offer arriving within days of listing is almost never fair market value. It's an opening position from a buyer whose profit depends on how much below market they can buy.

Before accepting any cash offer, get a comparative market analysis from a licensed agent and a professional appraisal. The cost ($500-$1,000 combined) is trivial compared to the potential difference in proceeds.

**Mistake 2: Using an agent without trust sale experience**

A good residential agent is not automatically equipped for a trust sale. The Certification of Trust documentation, the fiduciary pricing obligation, the disclosure requirements for a trustee who never occupied the property — these are specific to trust transactions. Using the wrong agent doesn't just create delays. It creates legal exposure.

**Mistake 3: Skipping the professional appraisal**

The stepped-up basis is your most powerful tax tool as an heir or trustee. Your cost basis was reset to fair market value on the date of death — meaning you only pay capital gains on appreciation since then, not lifetime appreciation. To claim this, you need a professional appraisal dated as close to the date of death as possible. Don't skip it.

**If you're ready to connect with a trust sale specialist:**

Wolf Allies is free and never affects your commission. Submit at wolfallies.com — a specialist in your city will call within hours.

William B. Plevy
California Attorney · Real Estate Broker, DRE #01956776
Wolf Allies · wolfallies.com

---

## EMAIL 3 — Day 7

**Subject:** Still figuring out your trust property situation?

**From:** William Plevy | Wolf Allies <hello@wolfallies.com>

---

Hi [First Name],

A week ago you downloaded our California Trustee Checklist. I want to check in — not to push, but because this process has real timelines attached to it and I want to make sure you have what you need.

**If you're in the early stages:**

The most useful thing you can do right now is understand how the property is titled. Pull the deed — your county assessor's website usually has it free. If it names the trust as owner, you have a trust administration and can move without court involvement. If it names the deceased individually, probate may be required. That one piece of information shapes everything that comes next.

**If you're ready to sell:**

You don't need to have everything figured out before talking to a specialist. In fact, the earlier you connect, the better. A specialist who understands trust and probate sales will help you understand your timeline, your obligations as trustee, and what the property is likely worth — before you make any decisions.

**If you're still not sure:**

That's completely normal. Most people in this situation have never done it before. There's no wrong time to ask questions.

Wolf Allies connects trustees, executors, and families with agents who handle these transactions every day. Free. No obligation. Just the right introduction at the right time.

Submit at wolfallies.com whenever you're ready.

William B. Plevy
California Attorney · Real Estate Broker, DRE #01956776
Wolf Allies · wolfallies.com

*To unsubscribe, reply with "unsubscribe" and we'll remove you immediately.*
*Wolf Allies does not provide legal advice. Consult a qualified California attorney for your specific situation.*

---

## SETUP INSTRUCTIONS FOR MAKE.COM

1. In Make.com — create a new scenario
2. Trigger: Webhook (your existing Wolf Allies webhook)
3. Filter: source = "trustee-checklist-download" OR type = "email-capture"
4. Module 1: Send Email (Gmail) — Email 1 immediately
5. Add a "Sleep" module — 3 days (259,200 seconds)
6. Module 2: Send Email — Email 2
7. Add a "Sleep" module — 4 days (345,600 seconds)
8. Module 3: Send Email — Email 3

Use the `name` and `email` fields from the webhook payload to personalize.

