import { styled } from "styled-components";
import { statusStyles, type StatusProps } from "../styles/statusStyles";

const FormStatusButtons = ({
  setStatus,
}: {
  setStatus: (readStatus: "toRead" | "reading" | "completed") => void;
}) => {
  const StyledFormStatusButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `;

  const StatusButton = styled.button<StatusProps>`
    border-radius: 5px;
    border: 0px;
    font-weight: 500;
    padding: 0.5rem;
    cursor: pointer;

    ${({ readStatus }) => statusStyles[readStatus]}
  `;

  return (
    <StyledFormStatusButtons>
      <StatusButton readStatus="toRead" onClick={() => setStatus("toRead")}>
        To Read
      </StatusButton>
      <StatusButton readStatus="reading" onClick={() => setStatus("reading")}>
        Reading
      </StatusButton>
      <StatusButton
        readStatus="completed"
        onClick={() => setStatus("completed")}
      >
        Completed
      </StatusButton>
    </StyledFormStatusButtons>
  );
};

export default FormStatusButtons;
