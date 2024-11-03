interface Book {
  title1: string;
  author1: string;
  publicationYear1: number;
}

interface Magazine {
  title2: string;
  author2: string;
  publicationYear2: number;
  issueNumber: number;
}

type UnionOfBookAndMagazine = Book | Magazine;

type intersectionOfBookAndMagazine = Book & Magazine;

const book: Book = {
  title1: "The Great Gatsby",
  author1: "F. Scott Fitzgerald",
  publicationYear1: 1925,
};

const magazine: Magazine = {
  title2: "The Wall Street Journal",
  author2: "John Steinbeck",
  publicationYear2: 1927,
  issueNumber: 1,
};

const unionBookAndMagazine: UnionOfBookAndMagazine = {
  title1: "The Great Gatsby",
  author1: "F. Scott Fitzgerald",
  publicationYear1: 1925,
};

const intersectionBookAndMagazine: intersectionOfBookAndMagazine = {
  title1: "The Great Gatsby",
  title2: "The Great Gatsby",
  author1: "F. Scott Fitzgerald",
  author2: "F. Scott Fitzgerald",
  publicationYear1: 1925,
  publicationYear2: 1925,
  issueNumber: 1,
};
console.log(intersectionBookAndMagazine);
