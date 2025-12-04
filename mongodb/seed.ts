import { faker } from "@faker-js/faker";
import { localClient } from "./client";

export async function seedDb() {
  await localClient.connect();
  await localClient.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  const testDB = localClient.db("test_db");
  const profileCollection = await testDB.createCollection("profile");
  const cols = testDB.listCollections();

  for await (const doc of cols) {
    console.log("collection name: ", doc.name);
  }

  const profiles = Array.from({ length: 10000 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: `${faker.location.buildingNumber()}, ${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
    geo_location: {
      type: "Point",
      coordinates: [faker.location.longitude(), faker.location.latitude()],
    },
  }));
  console.log("create fake profiles, added them to the db");
  await profileCollection.insertMany(profiles);
  console.log("finished adding docs in profile collection");

  const createProfileNameIndex = await profileCollection.createIndex({ name: 1 });
  console.log("index created on profile: ", createProfileNameIndex);

  await localClient.close();
}
