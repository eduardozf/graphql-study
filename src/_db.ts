interface Game {
  id: string;
  title: string;
  platform: string[];
}

interface Review {
  id: string;
  rating: number;
  content: string;
  game_id: string;
  author_id: string;
}

interface Author {
  id: string;
  name: string;
  verified: boolean;
}

export const games: Game[] = [
  {
    id: "1",
    title: "The Witcher 3: Wild Hunt",
    platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
  },
  {
    id: "2",
    title: "The Last of Us Part II",
    platform: ["PS4", "PS5"],
  },
  {
    id: "3",
    title: "Valorant",
    platform: ["PC"],
  },
  {
    id: "4",
    title: "Apex Legends",
    platform: [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
  },
  {
    id: "5",
    title: "PUBG: Battlegrounds",
    platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
  },
  {
    id: "6",
    title: "Overwatch 2",
    platform: [
      "PC",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
  },
  {
    id: "7",
    title: "Cyberpunk 2077",
    platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
  },
  {
    id: "8",
    title: "Red Dead Redemption 2",
    platform: ["PS4", "Xbox One", "PC"],
  },
];

export const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Doe",
    verified: false,
  },
  {
    id: "3",
    name: "John Smith",
    verified: true,
  },
  {
    id: "4",
    name: "Emily Johnson",
    verified: true,
  },
  {
    id: "5",
    name: "Michael Brown",
    verified: false,
  },
  {
    id: "6",
    name: "Jessica Davis",
    verified: true,
  },
  {
    id: "7",
    name: "David Wilson",
    verified: false,
  },
  {
    id: "8",
    name: "Ashley Rodriguez",
    verified: true,
  },
  {
    id: "9",
    name: "Christopher Garcia",
    verified: false,
  },
  {
    id: "10",
    name: "Amanda Martinez",
    verified: true,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    rating: 5,
    content:
      "An absolute masterpiece! The story, the characters, the world - everything is perfect.",
    game_id: "1",
    author_id: "1",
  },
  {
    id: "2",
    rating: 4,
    content:
      "A very strong sequel with compelling characters and a gripping narrative.",
    game_id: "2",
    author_id: "2",
  },
  {
    id: "3",
    rating: 3,
    content:
      "A fun and engaging tactical shooter that's easy to pick up but difficult to master.",
    game_id: "3",
    author_id: "3",
  },
  {
    id: "4",
    rating: 4,
    content:
      "Fast-paced and exciting battle royale with a unique character-based twist.",
    game_id: "4",
    author_id: "4",
  },
  {
    id: "5",
    rating: 2,
    content:
      "A decent battle royale experience, but it suffers from performance issues and a lack of innovation.",
    game_id: "5",
    author_id: "5",
  },
  {
    id: "6",
    rating: 5,
    content:
      "A fantastic hero shooter with a diverse cast of characters and engaging gameplay.",
    game_id: "6",
    author_id: "6",
  },
  {
    id: "7",
    rating: 3,
    content:
      "A visually stunning game with a compelling story, but it's plagued by bugs and performance issues.",
    game_id: "7",
    author_id: "7",
  },
  {
    id: "8",
    rating: 5,
    content:
      "An epic open-world adventure with a rich story, memorable characters, and stunning visuals.",
    game_id: "8",
    author_id: "8",
  },
  {
    id: "9",
    rating: 4,
    content: "A great game!",
    game_id: "1",
    author_id: "9",
  },
  {
    id: "10",
    rating: 1,
    content: "A bad game!",
    game_id: "2",
    author_id: "10",
  },
];
