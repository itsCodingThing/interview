import { localClient } from "./client";

const db = localClient.db("sample_mflix");
const moviesCollection = db.collection("movies");

// Group movies by decade and count how many movies exist per decade.
const result = await moviesCollection
	.aggregate()
	.match({
		year: { $type: "number" },
	})
	.project({
		decade: {
			$subtract: ["$year", { $mod: ["$year", 10] }],
		},
	})
	.group({
		_id: "$decade",
		movies: { $sum: 1 },
	})
	.toArray();
console.log(result);

// List all movies where the award text contains the word 'winner'
// const result = await moviesCollection
// 	.aggregate()
// 	.match({ "awards.text": { $regex: "/win/i" } })
// 	.toArray();
// console.log(result);

// for each country, calculate average movie rating and total movies
// const result = await moviesCollection
// 	.aggregate([
// 		{
// 			$unwind: "$countries",
// 		},
// 		{
// 			$group: {
// 				_id: "$countries",
// 				avg_time: { $avg: "$runtime" },
// 				avg_rating: { $avg: "$imdb.rating" },
// 			},
// 		},
// 	])
// 	.toArray();
// console.log(result);

// get the top 5 movies with the highest number of cast members.
// const result = await moviesCollection
// 	.aggregate([
// 		{
// 			$match: {
// 				cast: { $type: "array" },
// 			},
// 		},
// 		{
// 			$project: {
// 				title: 1,
// 				cast: { $size: "$cast" },
// 			},
// 		},
// 		{
// 			$sort: {
// 				cast: -1,
// 			},
// 		},
// 		{
// 			$limit: 5,
// 		},
// 	])
// 	.toArray();
// console.log(result);

// find movies with at least 3 languages.
// const result = await moviesCollection
// 	.aggregate()
// 	.match({
// 		$expr: {
// 			$and: [{ $isArray: "$languages" }, { $gt: [{ $size: "$languages" }, 3] }],
// 		},
// 	})
// 	.project({ title: 1, languages: 1 })
// 	.toArray();
// console.log(result);

// for each director, get the total number of movies and average runtime.
// const result = await moviesCollection
// 	.aggregate([
// 		{ $unwind: "$directors" },
// 		{
// 			$group: {
// 				_id: "$directors",
// 				movies: { $sum: 1 },
// 				avg_runtime: { $avg: "$runtime" },
// 			},
// 		},
// 		{
// 			$project: {
// 				_id: 0,
// 				director: "$_id",
// 				movies: 1,
// 				avg_runtime: { $round: ["$avg_runtime", 2] },
// 			},
// 		},
// 	])
// 	.toArray();
// for (const doc of result) {
// 	console.log(doc);
// }

// find the year with the highest number of movie releases.
// const result = await moviesCollection
// 		.aggregate()
// 		.group({ _id: "$year", movies: { $sum: 1 } })
// 		.sort({ movies: -1 })
// 		.limit(1)
// 		.project({ year: "$_id", movies: 1, _id: 0 })
// 		.toArray();
// }

// list movies where Tom Hanks acted and show the number of awards won for each.
// const result = await moviesCollection
// 		.aggregate()
// 		.match({ cast: name, "awards.wins": { $gt: 1 } })
// 		.project({ title: 1, wins: "$awards.wins" })
// 		.toArray();
// }

// for each genre, find the average IMDb rating.
// const result = await moviesCollection
// 		.aggregate()
// 		.unwind("$genres")
// 		.group({ _id: "$genres", avg_rating: { $avg: "$imdb.rating" } })
// 		.toArray();
// }

// find the top 5 highest-rated movies released after 2000.
// const result = await moviesCollection
// 		.aggregate()
// 		.match({ released: { $gt: new Date(2000) } })
// 		.sort({ "imdb.rating": -1 })
// 		.limit(5)
// 		.project({ title: 1, released: 1, rating: "$imdb.rating" })
// 		.toArray();
// }
