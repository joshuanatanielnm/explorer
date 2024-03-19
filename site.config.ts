/* #__PURE__ */
const domain =
  process.env.APP_URL?.replace(/https?:\/\//, "").split("/")[0] ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  `${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/* #__PURE__ */
const protocol =
  domain.includes("localhost") ||
  domain.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
    ? "http"
    : "https";

const url = `${protocol}://${domain}`;

export const defaultMetadata = {
  title: "Cosmos Explorer",
  description: "Simple explorer dashboard for Cosmos-based Blockchains.",
  email: "joshuanmanuputty@gmail.com",
  github: {
    username: "joshuanatanielnm",
    repository: "explorer",
  },
  x: {
    username: "@joshuanatanielm",
  },
  url,
};

export const customMetadata = {
  githubUrl: "https://github.com/joshuanatanielnm",
  twitterUrl: "https://twitter.com/joshuanatanielm",
  emailUrl: `mailto:${defaultMetadata.email}`,
  resumeUrl: "https://resume.io/r/fyzF2RrFm",
  linkedInUrl: "https://www.linkedin.com/in/joshuanathanielm",
  calUrl: "https://cal.com/joshuanatanielm",
};
