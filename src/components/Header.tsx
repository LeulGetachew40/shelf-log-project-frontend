import { styled } from "styled-components";
import Logo from "./Logo";
import { StyledContainer } from "../styles/containerStyles";

const Header = () => {
  const StyledHeader = styled.header`
    background-color: var(--color-primary-500);
    color: white;
    padding: var(--space-4);
    box-shadow: var(--shadow-md);
    transition: padding var(--transition-normal);

    @media (min-width: 768px) {
      & {
        padding: var(--space-5) 0;
      }
    }
  `;

  const StyledHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);

    &:last-child {
      font-size: 1rem;
      font-weight: 500;
      opacity: 0.9;
    }

    @media (min-width: 576px) {
      & {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  `;
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledHeaderContent>
          <Logo />
          <div>Track your reading habit</div>
        </StyledHeaderContent>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
