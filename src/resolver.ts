import * as db from "./_db";

const gameResolvers = {
  games: () => db.games,
  game: (_parent, { id }) => db.games.find((game) => game.id === id),
};

const reviewResolvers = {
  reviews: () => db.reviews,
  review: (_parent, { id }) => db.reviews.find((review) => review.id === id),
};

const authorResolvers = {
  authors: () => db.authors,
  author: (_parent, { id }) => db.authors.find((author) => author.id === id),
};

export const resolvers = {
  Query: {
    ...gameResolvers,
    ...reviewResolvers,
    ...authorResolvers,
  },
};
