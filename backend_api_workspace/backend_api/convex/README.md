# Convex Backend for Neuronote-Nexus

This folder contains the Convex backend logic for the Neuronote-Nexus application.

## Structure

- `_generated/` – Convex-generated code for type safety and codegen.
- `schema.ts` – Convex schema definitions (documents, users, permissions).
- `documents.ts` – Documents/note data model, basic mutators/queries.
- `auth.config.js` – Auth integration (Clerk or custom).
- `ai_proxy.ts` – Placeholder: Gemini 1.5 AI proxy logic (to be implemented).
- `dropbox_sync.ts` – Placeholder: Dropbox sync/backup/restore logic (to be implemented).
- `media.ts` – Placeholder: Media/upload logic (to be implemented).

> For instructions on connecting Convex to your frontend, see [`README_connect_frontend.md`](README_connect_frontend.md).

## Features (to be built)
- Rich note CRUD, per-user permission control.
- AI-powered actions (Gemini 1.5 proxy).
- Dropbox sync, media/file upload support.

## Note
Run `npx convex dev` from this folder to start Convex locally and `npx convex deploy` to push to production.
