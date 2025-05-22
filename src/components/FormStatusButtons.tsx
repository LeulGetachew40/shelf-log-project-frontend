import { styled } from "styled-components";
import { statusStyles, type StatusProps } from "../styles/statusStyles";

const FormStatusButtons = ({
  setStatus,
}: {
  setStatus: (readStatus: "toRead" | "reading" | "completed") => void;
}) => {
  const StatusButton = styled.button<StatusProps>`
    border-radius: 5px;
    border: 0px;
    color: #333333;
    font-weight: 500;
    padding: 0.5rem;
    cursor: pointer;

    ${({ readStatus }) => statusStyles[readStatus]}
  `;

  return (
    <>
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
    </>
  );
};

export default FormStatusButtons;
