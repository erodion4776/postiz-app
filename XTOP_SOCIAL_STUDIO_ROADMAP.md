# XTOP Social Studio — Product Foundation

XTOP Social Studio is the planned XTOP-branded creator workspace built on this Postiz fork.

## Product direction

**Create once. Edit once. Publish everywhere.**

The product will bring together:
- Social account connections and publishing workflows from this Postiz codebase.
- A creator-friendly content calendar and media library.
- Video editing through a separately integrated OpenCut editor.
- Assisted content creation: scripts, captions, hashtags and subtitles.
- Multi-brand and agency workflows.
- Performance reporting using only metrics made available by each platform's official APIs.

## Implementation principles

1. Preserve the upstream Postiz publishing, scheduling, OAuth and queue workflows until equivalent XTOP functionality is tested.
2. Keep upstream licence and copyright notices. This repository is AGPL-3.0; distribute corresponding source for modified network-served versions as required by the licence.
3. Use official platform APIs and OAuth. Do not scrape platforms or promise publishing features that a provider has not approved.
4. Keep video editing as an integration boundary initially. Do not merge OpenCut source into this repository until its licence, build, runtime and media-transfer design have been reviewed.
5. Never commit secrets, OAuth credentials, API keys, database URLs or production tokens.
6. Build and test in a dedicated XTOP branch before merging to main.

## Delivery phases

### Phase 0 — Safe foundation
- Confirm fork, permissions, upstream branch and licence.
- Keep a dedicated XTOP development branch.
- Document deployment prerequisites and provider approval requirements.

### Phase 1 — XTOP identity
- Audit existing branding, metadata, logos, emails and login screens.
- Replace product-facing Postiz identity with XTOP Social Studio where permitted.
- Preserve third-party attribution and required notices.
- Add XTOP support and legal links only after real destinations exist.

### Phase 2 — Creator workspace
- Add a unified creator home, content library and creation workflow.
- Support drafts, platform-specific captions and per-channel media validation.
- Retain Postiz's existing scheduler and publishing pipeline.

### Phase 3 — Video editor integration
- Integrate OpenCut as a separate editor application/service.
- Pass media through an explicit export/import contract.
- Return rendered assets to the shared publishing library.
- Validate aspect ratio, duration, codecs, file size and platform-specific requirements.

### Phase 4 — Assisted creation
- Add optional provider-based script, caption, hashtag and subtitle tools.
- Make AI integrations opt-in and disclose any third-party usage costs.
- Keep core editing and manual publishing usable without paid AI keys.

### Phase 5 — Commercial readiness
- Add tenant isolation, roles, billing and usage controls only after security review.
- Verify platform app approvals and OAuth scopes for every supported channel.
- Add backups, monitoring, rate limits, abuse prevention and operational documentation.

## Deployment prerequisites

The upstream self-hosted application requires more than a static frontend. Confirm the current upstream deployment guide and environment reference before choosing hosting. Core services include PostgreSQL, Redis, the application services and Temporal workflow infrastructure; public URLs, storage and provider credentials must also be configured. A free static hosting service alone is not sufficient for the complete application.

## Current status

This file records the product direction only. It does not claim that the XTOP UI, OpenCut integration, AI features, platform approvals or production deployment have been implemented.
