import { GiBookshelf } from "react-icons/gi";
import styled from "styled-components";
const Logo = () => {
  const StyledLogo = styled.div`
    font-weight: 600;
    font-size: 2rem;

    & svg {
      height: 3rem;
      width: 5rem;
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
