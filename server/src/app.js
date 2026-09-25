import express from "express"; import cors from "cors"; import helmet from "helmet"; import morgan from "morgan"; import {env} from "./config/env.js"; import api from "./routes/index.js"; import {apiLimiter} from "./middlewares/rateLimiter.js"; import {notFound,errorHandler} from "./middlewares/errorHandler.js";
const app=express();
app.use(helmet());app.use(cors({origin:env.clientUrl,credentials:true}));app.use(express.json({limit:"1mb"}));app.use(morgan("combined"));app.use("/api",apiLimiter,api);app.use(notFound);app.use(errorHandler);
export default app;
