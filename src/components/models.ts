export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  pubDate: Date;
  src: string;
  bookmark: boolean;
}
