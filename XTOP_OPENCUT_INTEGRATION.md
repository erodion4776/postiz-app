# XTOP Social Studio — OpenCut Editor Integration

## Goal

Provide a video-editing workspace inside the XTOP creator journey while keeping the editor and publishing system independently deployable. Postiz remains the publishing, scheduling, account-connection and analytics foundation. The OpenCut fork supplies the browser-based video-editing experience.

## Verified starting repositories

- Publisher: `erodion4776/postiz-app` (Postiz-derived; AGPL-3.0).
- Editor: `erodion4776/opencut-classic` (OpenCut; MIT license in its current LICENSE file).
- OpenCut is a Bun/Turborepo workspace with a Next.js web app and Rust/WebAssembly media components. It is not a drop-in React component for the publisher.

Preserve both upstream license notices. The publisher's AGPL obligations remain applicable to the combined network-served product; obtain appropriate legal review before offering a proprietary hosted service.

## MVP integration: export/import bridge

1. Deploy the editor as a separate web application on an XTOP-controlled HTTPS subdomain.
2. Add an XTOP-branded entry point in the publisher labelled **Video Editor**.
3. Let a creator open the editor and import a local video or image from their device.
4. The creator edits and exports a finished MP4 from OpenCut.
5. The creator returns to the publisher and uploads that MP4 to the existing media library.
6. The exported media is then selected in the existing post composer and scheduled/published through supported social integrations.

This first version deliberately uses a user-mediated file handoff. It avoids coupling the two applications' authentication systems or making unsupported assumptions about OpenCut's internal project format.

## Later seamless handoff

After the standalone export/import journey is tested, implement a server-mediated bridge:

- Publisher creates a short-lived, single-use editor launch grant for the authenticated user and organization.
- Editor validates the grant server-side; never trust an organization ID or user ID supplied only by browser query parameters.
- Editor uploads the rendered output to a controlled upload endpoint using a scoped, expiring upload grant.
- Publisher verifies ownership, file type, size, and upload completion before adding the asset to that organization's media library.
- Use opaque IDs; never share publisher session cookies, API keys, or service credentials with the editor.
- Apply rate limits, upload limits, malware scanning where available, and audit logging.

The bridge must be designed and implemented against the actual authentication, storage, and upload APIs in both repositories before it is enabled.

## Export contract

The minimum interoperable output is a playable MP4 file. Store the following metadata with the uploaded media where available:

- `filename`
- `mimeType` (must identify MP4 video)
- `sizeBytes`
- `durationMs` (optional)
- `width` and `height` (optional)
- `source` = `xtop-video-editor`
- `editorProjectId` (optional opaque reference; not the project contents)

Do not assume that a native OpenCut project can be imported into the publisher. The MP4 export is the compatibility boundary for the MVP.

## Acceptance checks

- Editor opens on mobile Chrome and desktop browsers.
- A local video can be imported, edited, and exported as MP4.
- Exported MP4 can be uploaded to the publisher's media library.
- Uploaded video can be selected in the post composer.
- The publisher's normal validation and per-platform media restrictions still apply.
- No user can access another organization's media through the editor bridge.
- Failed or interrupted exports do not create a falsely completed media asset.

## Not implemented yet

This document is an integration contract and work plan only. It does not claim that the editor has been embedded, deployed, connected to publisher authentication, or tested end to end.
