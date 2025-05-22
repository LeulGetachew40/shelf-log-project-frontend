import { css } from "styled-components";

export type StatusProps = { readStatus: "toRead" | "reading" | "completed" };
export const statusStyles = {
  toRead: css`
    background-color: var(--color-readStatus-toRead-blue-400);
  `,
  reading: css`
    background-color: var(--color-readStatus-reading-green-400);
  `,
  completed: css`
    background-color: var(--color-readStatus-completed-yellow-400);
  `,
};
export const readStatusMap = {
  toRead: "To Read",
  reading: "Reading",
  completed: "Completed",
};
