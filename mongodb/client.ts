import { MongoClient } from "mongodb";

const uri = "mongodb://root:password@localhost:27021/";
export const localClient = new MongoClient(uri);

const remoteUri = "mongodb+srv://itscodingthing:kWh5XGGsXzZtcZbk@cluster0.bkuijyq.mongodb.net/"
export const remoteClient = new MongoClient(remoteUri);
