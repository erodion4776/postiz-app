# XTOP Social Studio brand implementation

## Product identity
- Product name: XTOP Social Studio
- Short name: XTOP Social
- Tagline: Create once. Edit once. Publish everywhere.
- Primary palette: violet-to-blue gradient, deep slate surfaces, white text.
- Product promise: create, plan, schedule and publish content across connected social channels.

## Brand assets
- `apps/frontend/public/logo.svg`: square XTOP mark used by existing app logo references.
- `apps/frontend/public/xtop-mark.svg`: standalone browser/app icon.
- `apps/frontend/public/xtop-wordmark.svg`: horizontal XTOP Social Studio wordmark for future header/login integration.

## Changes in this milestone
- Added XTOP Social Studio page metadata for the authenticated application layout.
- Switched the application favicon to the XTOP mark while retaining the upstream favicon as fallback.
- Removed hardcoded Postiz/Gitroom analytics domains from this layout. Set `NEXT_PUBLIC_ANALYTICS_DOMAIN` to the actual deployed hostname before enabling analytics.
- Replaced the old Postiz logo asset with the XTOP mark.

## Not yet implemented
This milestone does not yet replace every Postiz text string, login screen, sidebar label, email template, OAuth provider identity, or marketing page. Those require a full repository-wide branding audit and testing. The social publishing engine remains the upstream Postiz implementation.
