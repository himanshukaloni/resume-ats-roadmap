import app from "./src/app.js";
import {connectDB} from "./src/config/db.js";
import {env} from "./src/config/env.js";

try {
  await connectDB();
  app.listen(env.port,()=>console.log(`ResumePilot API running on port ${env.port}`));
} catch (error) {
  console.error("\n[ResumePilot] MongoDB connection failed.");
  console.error("Check that MongoDB is running and MONGO_URI in server/.env is correct.");
  console.error(error.message);
  process.exit(1);
}
