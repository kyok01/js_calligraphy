import styled from "styled-components";

export const Input = (props) => {
  const { placeholder, onChange, value } = props;
  return <SInput type="text" placeholder={placeholder} onChange={onChange} value={value} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
