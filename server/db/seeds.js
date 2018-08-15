use buckets;
db.dropDatabase();

db.wishes.insertMany([
  {
    wishes: "visit Thailand",
    status: "false"
  },
  {
    wishes: "win the nobel peace prize",
    status: "false"
  },
  {
    wishes: "conquer the world",
    status: "false"
  }
]);
