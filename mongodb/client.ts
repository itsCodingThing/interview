import { MongoClient } from "mongodb";
import z from "zod";

const env = await z
	.object({ LOCAL_DB: z.string(), REMOTE_DB: z.string() })
	.parseAsync(process.env);

console.log(env);

export const localClient = new MongoClient(env.LOCAL_DB);
export const remoteClient = new MongoClient(env.REMOTE_DB);
