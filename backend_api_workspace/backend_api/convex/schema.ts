/**
 * Convex schema definition for Neuronote-Nexus.
 * Defines users, notes/documents, and permissions.
 */

import { defineSchema, defineTable, s } from "convex/schema";

// User table: one per Clerk or custom auth ID
export const users = defineTable({
  userId: s.string(), // Clerk ID or unique userId
  email: s.string(),
  displayName: s.optional(s.string()),
  createdAt: s.number(),
  updatedAt: s.number(),
});

// Notes/documents table
export const notes = defineTable({
  ownerId: s.string(), // corresponds to users.userId
  title: s.string(),
  content: s.string(), // Blocknote doc as serialized string/markdown
  backlinks: s.optional(s.array(s.id("notes"))), // Graph links
  createdAt: s.number(),
  updatedAt: s.number(),
  isDeleted: s.optional(s.boolean()),
});

// Permissions table: sharing/collab support
export const permissions = defineTable({
  noteId: s.id("notes"),
  userId: s.string(), // user who has permission
  level: s.string(), // 'owner' | 'editor' | 'viewer'
  grantedBy: s.string(),
  grantedAt: s.number(),
});

export default defineSchema({
  users,
  notes,
  permissions,
});
