import { styled } from "styled-components";
export const StyledContainer = styled.div`
  width: 100%;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    & {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    & {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    & {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    & {
      max-width: 1140px;
    }
  }
`;
