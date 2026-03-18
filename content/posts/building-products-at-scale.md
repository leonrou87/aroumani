---
title: "Building Products That Move the World"
date: "2025-11-20"
category: "Engineering Leadership"
excerpt: "Seven years of lessons from shipping mobility products to hundreds of millions of people — and the one architectural decision that changed everything."
---

When I joined Uber's Mobility Verticals group in 2018, my team had launched one product. Today we've shipped nine. The same engineers. The same codebase. Orders of magnitude more impact.

This isn't a story about hiring faster or working harder. It's about a single architectural decision that made everything else possible.

## The Problem With One-Off Products

The early approach to building vertical products at Uber looked like most organizations: a product team identified an opportunity, engineers built a solution for it specifically, and we shipped. Uber Reserve launched as its own feature. Uber Connect was another. Each with its own rules, its own edge cases, its own operational surface.

It worked — but it didn't scale. Every new product was a new project. New engineering effort. New QA surface. New on-call burden.

> The question wasn't "how do we build the next product." It was "how do we build a platform that makes the next product almost free."

## The Configuration-Driven Shift

The insight was deceptively simple: most of what makes Uber Reserve different from Uber Safari from Uber Ski is *configuration*, not code.

A safari in Cape Town and a champagne tour in Paris have the same underlying structure: advance booking, driver coordination, special instructions, time-bounded experiences. What differs is the market, the partner, the experience details, and the rules around it.

When we rebuilt with this in mind — designing the system to be configuration-driven at every layer — something clicked. Launching Uber Safari didn't require a new engineering workstream. It required a configuration file, partner integration, and a team of eleven focused engineers who shipped it in weeks.

The same for Uber Bubbles. The same for Uber Ski.

## What "Configuration-Driven" Actually Means

It's easy to say "make it configurable." It's harder to actually do it.

For us, it meant:

- **Separating experience logic from execution logic.** The core engine handles booking, scheduling, driver assignment, and communication. The experience layer (what users see, what partners need, what rules apply) lives in configuration.
- **Investing deeply in the tooling.** You can't maintain a configuration-driven system with spreadsheets. We built internal tooling to define, test, and deploy experience configurations safely.
- **Treating configuration as code.** Review processes. Version control. Rollback capabilities. Configuration changes go through the same rigor as software changes.

## The Human Side

None of this matters without the people who build it.

I've been lucky to lead teams that deeply believe in the mission — not just the technical problem, but what it unlocks. When your engineers know that the architecture they design today will be what powers a safari drive *and* a ski resort trip *and* a champagne tour in France, they make different decisions. Better decisions.

Building at scale isn't just about systems. It's about teams that understand why the systems exist.

---

The next time I'm asked "how do you launch nine products in seven years," the honest answer is: we didn't build nine products. We built one platform, and we configured it nine times.

That distinction is everything.
