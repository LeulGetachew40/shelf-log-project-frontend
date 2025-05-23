import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { StyledContainer } from "../styles/containerStyles";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled(StyledContainer)``;

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
