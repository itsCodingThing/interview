import { remoteClient } from "./client";

const db = remoteClient.db("sample_mflix");

const moviesCollection = db.collection("movies");
const documentCounts = await moviesCollection.estimatedDocumentCount();

console.log(documentCounts);

const aggr = moviesCollection.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "movie_id",
      pipeline: [
        {
          $project: {
            name: 1,
            email: 1,
            _id: 0,
          },
        },
      ],
      as: "comments",
    },
  },
  {
    $project: {
      title: 1,
      runtime: 1,
    },
  },
  {
    $group: {
      _id: "runtime",
      movies: { $push: "$$ROOT" },
    },
  },
]);

for await (const doc of aggr) {
  console.log(doc);
}
