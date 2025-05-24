import { css, styled } from "styled-components";
import { statusStyles, type StatusProps } from "../styles/statusStyles";

const FormStatusButtons = ({
  readStatus,
  setStatus,
}: {
  readStatus: "toRead" | "reading" | "completed";
  setStatus: (readStatus: "toRead" | "reading" | "completed") => void;
}) => {
  console.log(readStatus);

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
    ${({ readStatus: readStatusOnButton }) =>
      readStatus === readStatusOnButton
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0.7;
          `}
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
