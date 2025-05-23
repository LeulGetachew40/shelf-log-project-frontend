import { GiBookshelf } from "react-icons/gi";
import styled from "styled-components";
const Logo = () => {
  const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.75rem;
    gap: var(--space-2);

    & svg {
      width: 2rem;
      height: 2rem;
      transition: transform var(--transition-normal);
    }

    &:hover svg {
      transform: rotate(5deg);
    }

    @media (min-width: 992px) {
      & {
        font-size: 2rem;
      }
      & svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  `;
  return (
    <StyledLogo>
      <GiBookshelf />
      Shelf Log
    </StyledLogo>
  );
};

export default Logo;
