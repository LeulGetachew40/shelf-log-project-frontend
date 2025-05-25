import axios from "axios";
import { backendUrl } from "./backend";

export type noteType = {
  id: number;
  content: string;
  bookId: number;
  createdAt: string;
};

export async function createNote({
  bookId,
  content,
}: {
  bookId: number;
  content: string;
}) {
  const response = await axios.post(`${backendUrl}/books/${bookId}/notes`, {
    bookId,
    content,
  });

  return response.data;
}

export async function deleteNote({
  bookId,
  noteId,
}: {
  noteId: number;
  bookId: number;
}) {
  const response = await axios.delete(
    `${backendUrl}/books/${bookId}/notes/${noteId}`
  );

  return response.data;
}

export async function editNote({
  bookId,
  content,
  noteId,
}: {
  content: string;
  bookId: number;
  noteId: number;
}) {
  const response = await axios.patch(
    `${backendUrl}/books/${bookId}/notes/${noteId}`,
    { content }
  );

  return response.data;
}

export async function getNotesByBookId(bookId: number) {
  const response = await axios.get(`${backendUrl}/books/${bookId}/notes`);

  return response.data as noteType[];
}
