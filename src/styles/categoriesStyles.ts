import { styled } from "styled-components";

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-neutral-200);
`;

export const Category = styled.div`
  background-color: var(--color-neutral-200);
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  font-size: 0.75rem;
`;
