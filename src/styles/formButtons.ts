import { styled } from "styled-components";

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
`;

export const CancelEditButton = styled(Button)`
  background-color: var(--color-neutral-400);
`;

export const ConfirmEditButton = styled(Button)`
  background-color: var(--color-primary-500);

  color: white;
`;
