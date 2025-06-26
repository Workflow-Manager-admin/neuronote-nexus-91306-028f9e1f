/**
 * PUBLIC_INTERFACE
 * Convex functions for notes/documents CRUD logic.
 * Extend with AI, media, sharing logic in later steps.
 */

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// PUBLIC_INTERFACE
export const createNote = mutation({
  args: {
    ownerId: v.string(),
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const note = {
      ownerId: args.ownerId,
      title: args.title,
      content: args.content,
      createdAt: now,
      updatedAt: now,
      isDeleted: false,
    };
    const noteId = await ctx.db.insert("notes", note);
    // Optionally auto-create owner permission
    await ctx.db.insert("permissions", {
      noteId,
      userId: args.ownerId,
      level: "owner",
      grantedBy: args.ownerId,
      grantedAt: now,
    });
    return noteId;
  },
});

// PUBLIC_INTERFACE
export const getNotesForUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    // TODO: Make permission-aware
    return await ctx.db
      .query("notes")
      .withIndex("by_ownerId", (q) => q.eq("ownerId", args.userId))
      .collect();
  },
});
