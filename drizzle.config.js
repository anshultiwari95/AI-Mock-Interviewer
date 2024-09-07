/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://accounts:sqtz4mOMkC3Z@ep-cold-feather-a5mf37h3.us-east-2.aws.neon.tech/ai-mock-interviewer?sslmode=require",
  },
};
