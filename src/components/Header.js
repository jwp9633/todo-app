import styled from 'styled-components';

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 16px;
`;

const Header = () => {
  return (
    <Wrapper>
      <H1>Todo</H1>
    </Wrapper>
  );
};

export default Header;
