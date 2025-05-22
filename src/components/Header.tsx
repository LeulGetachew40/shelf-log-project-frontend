import { styled } from "styled-components";
import Logo from "./Logo";

const Header = () => {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 10rem;
    background-color: var(--color-theme-lime-400);
  `;
  return (
    <StyledHeader>
      <Logo />
      <div>Track your reading habit</div>
    </StyledHeader>
  );
};

export default Header;
