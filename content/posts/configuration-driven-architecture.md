---
title: "The Architecture Decision Behind Uber Safari, Ski, and Bubbles"
date: "2024-10-15"
category: "Technology"
excerpt: "How one platform shipped a Champagne tour in France, a safari in Cape Town, and ski resort rides in Colorado — without rebuilding anything."
---

In October 2024, Uber launched Uber Safari in Cape Town. Game drives, bookable directly through the Uber app.

In November 2025, we launched Uber Ski with Vail Resorts — on-demand and advance rides to ski mountains, with Epic Pass purchases built in.

Earlier that year, we put Champagne tours in France on Uber Reserve — Tesla pickup from Paris, tastings at Perrier-Jouët and G.H. Mumm, back in the city by evening.

Three wildly different experiences. Three different continents. Three different partners. One platform.

This is what configuration-driven architecture looks like in practice.

## The Underlying Principle

Every time I introduce a new experience, people expect a long engineering timeline. A new workstream. A big kickoff. The reality is much quieter: a configuration file, a partner integration, and a focused team who knows exactly what they're building on top of.

The insight behind Uber Reserve — and everything it's powered since — is that the *rules* of a mobility experience vary far more than the *mechanics* of one.

The mechanics: advance booking, driver coordination, real-time status updates, dynamic pricing support, push notifications, receipts.

The rules: time windows, market availability, special driver requirements, partner branding, pricing structures, cancellation policies.

Separate those two cleanly enough, and you can configure the rules without touching the mechanics. That's the system we built.

## Why Most Teams Don't Do This

Configuration-driven architecture sounds obvious. It's not easy.

The failure mode is building a system that's *technically* configurable but practically impossible to reason about. Configuration that isn't versioned, tested, or reviewed with the same rigor as code is just debt with extra steps.

Getting it right required:

**Strong abstractions.** The seams between experience logic and execution logic have to be clean and well-defined. Leaky abstractions create coupling, and coupling kills flexibility.

**Internal tooling investment.** We built tools to define, validate, and deploy experience configurations safely — with full visibility into what's live and what's in flight. Without this, configurations become tribal knowledge and debugging becomes archaeology.

**A culture of discipline.** Every configuration change goes through review. Every new experience is modeled before it's built. The team has to believe in the system for it to work.

## What It Unlocks

The real payoff isn't launching Uber Safari or Uber Ski. It's the compound effect.

Every new experience makes the platform more capable. Every partner integration adds patterns that the next integration can borrow from. The team gets faster over time, not slower — which is the opposite of what usually happens as a codebase grows.

The eleven engineers who shipped Uber Bubbles did it in weeks, not quarters. That's not because they worked harder. It's because the architecture did the heavy lifting.

---

Good architecture isn't about elegance for its own sake. It's about what it enables. The best compliment you can give a system is: *look at everything we shipped on top of it.*
