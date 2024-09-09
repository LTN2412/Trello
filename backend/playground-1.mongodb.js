use("TrelloApp");
// db.boards.aggregate([
//   {
//     $match: {
//       _destroy: false,
//       _id: new ObjectId("66297216a502c904db80d942"),
//     },
//   },
//   {
//     $lookup: {
//       from: "columns",
//       localField: "_id",
//       foreignField: "boardId",
//       as: "columns",
//     },
//   },
//   {
//     $unwind: {
//       path: "$columns",
//       preserveNullAndEmptyArrays: true,
//     },
//   },
//   {
//     $lookup: {
//       from: "cards",
//       localField: "columns._id",
//       foreignField: "columnId",
//       as: "columns.cards",
//     },
//   },
//   {
//     $group: {
//       _id: "$_id",
//       title: { $first: "$title" },
//       description: { $first: "$description" },
//       slug: { $first: "$slug" },
//       columnOrderIds: { $first: "$columnOrderIds" },
//       createAt: { $first: "$createAt" },
//       updateAt: { $first: "$updateAt" },
//       columns: {
//         $push: "$columns",
//       },
//     },
//   },
// ]);
db.Board.find();
