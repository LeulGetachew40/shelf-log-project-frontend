import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.div`
  margin-inline: auto;
  width: 100%;
  margin-block: 20px;

  @media (width >= 40rem) {
    max-width: 40rem;
  }
  @media (width >= 48rem) {
    max-width: 48rem;
  }
  @media (width >= 64rem) {
    max-width: 64rem;
  }
  @media (width >= 80rem) {
    max-width: 80rem;
  }
  @media (width >= 96rem) {
    max-width: 96rem;
  }
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
};

export default AppLayout;
