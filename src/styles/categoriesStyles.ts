import { styled } from "styled-components";

export const Categories = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--color-border-grey-300);
  margin-bottom: 10px;
  padding-block: 10px;
`;

export const Category = styled.div`
  border: 1px solid var(--color-border-grey-300);
  border-radius: 5px;
  background-color: var(--color-category-background-grey-300);
  margin-bottom: 5px;
  border-bottom: 2px solid var(--color-border-grey-300);
  padding-inline: 1rem;
  padding-block: 0.25rem;
`;
