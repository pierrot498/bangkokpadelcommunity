import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bangkok Padel Community",
    short_name: "BPC",
    description:
      "Bangkok's #1 padel community. Find players, courts, tournaments and events.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080a",
    theme_color: "#06080a",
    categories: ["sports", "social", "lifestyle"],
    lang: "en-US",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
