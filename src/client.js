import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "vnt9ik6d",
  dataset: "production",
  apiVersion: "2023-09-29",
  useCdn: true,
});
