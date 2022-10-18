import styled from 'styled-components';

const Wrapper = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 16px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <ul>
        <li>오늘</li>
        <li>예정</li>
        <li>전체</li>
        <li>중요</li>
        <li>완료됨</li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
