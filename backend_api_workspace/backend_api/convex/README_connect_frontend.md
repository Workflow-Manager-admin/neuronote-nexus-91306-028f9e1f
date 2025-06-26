# Connecting Your Frontend to Convex

1. Install Convex npm package in your frontend workspace:
   ```bash
   npm install convex
   ```

2. Initialize Convex in the frontend:
   ```bash
   npx convex dev # in your backend folder, keep it running
   npx convex codegen # in frontend, after you link project
   ```

3. Set the Convex deployment URL in your frontend environment (see Convex dashboard).

4. Use the generated types/functions in your Next.js app:
   - Import mutations/queries from `_generated/` (codegen).
   - See: [Convex React quickstart](https://docs.convex.dev/quickstart/react)

5. Enable authentication in the backend and frontend (e.g., Clerk provider).

6. For more, see:
   - [Convex docs: https://docs.convex.dev/](https://docs.convex.dev/)
   - Example connect code:
     ```js
     import { useMutation, useQuery } from "convex/react";
     ```

> When ready, you can create and call mutations/queries from your React/Next.js components!
