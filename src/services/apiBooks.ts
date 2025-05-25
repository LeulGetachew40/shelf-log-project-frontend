import { backendUrl } from "./backend";
import axios from "axios";

export type singleBook = {
  id: number;
  title: string;
  author: string;
  readStatus: "toRead" | "reading" | "completed";
  categories: string[];
  description?: string;
};

export type books = {
  id: number;
  title: string;
  author: string;
  readStatus: "toRead" | "reading" | "completed";
  categories: string[];
}[];

export type BookSubmitData = {
  title: string;
  author: string;
  categories: string;
  description?: string;
  publishDate?: string | Date;
  readStatus: "toRead" | "reading" | "completed";
};

export async function getAllBooks() {
  const response = await axios.get(`${backendUrl}/books`);
  return response.data.data as books;
}

export async function getBookById(id: number) {
  return handleError(async () => {
    const response = await axios.get(`${backendUrl}/books/${id}`);
    return response.data.data[0] as singleBook;
  });
}

async function handleError(cb: () => Promise<singleBook>) {
  try {
    return await cb();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status) {
        throw new Error(error.response.data.message);
      }
    }
  }
}

export async function updateBookStatus({
  bookId,
  readStatus,
}: {
  bookId: number;
  readStatus: "toRead" | "reading" | "completed";
}) {
  const response = await axios.patch(`${backendUrl}/books/${bookId}`, {
    readStatus,
  });
  return response.data;
}

export async function deleteBook(bookId: number) {
  const response = await axios.delete(`${backendUrl}/books/${bookId}`);

  return response.data;
}

export async function createBook(
  book: Omit<BookSubmitData, "categories"> & { categories: string[] }
) {
  const response = await axios.post(`${backendUrl}/books`, { ...book });

  return response.data;
}
