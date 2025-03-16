import * as db from "./_db";

export const resolvers = {
  Query: {
    games: () => db.games,
    game: (_, { id }) => db.games.find((game) => game.id === id),
    reviews: () => db.reviews,
    review: (_, { id }) => db.reviews.find((review) => review.id === id),
    authors: () => db.authors,
    author: (_, { id }) => db.authors.find((author) => author.id === id),
  },
  Game: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.game_id === parent.id),
  },
  Review: {
    game: (parent) => db.games.find((game) => game.id === parent.game_id),
    author: (parent) =>
      db.authors.find((author) => author.id === parent.author_id),
  },
  Author: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.author_id === parent.id),
  },
};
