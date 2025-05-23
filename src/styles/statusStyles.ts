import { css } from "styled-components";

export type StatusProps = { readStatus: "toRead" | "reading" | "completed" };

export const statusStyles = {
  toRead: css`
    background-color: var(--color-reading-status-to-read);
    color: white;
  `,
  reading: css`
    background-color: var(--color-reading-status-reading);
    color: white;
  `,
  completed: css`
    background-color: var(--color-reading-status-completed);
    color: var(--color-neutral-900);
  `,
};
export const readStatusMap = {
  toRead: "To Read",
  reading: "Reading",
  completed: "Completed",
};
