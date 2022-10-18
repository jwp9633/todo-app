import styled from 'styled-components';

const Wrapper = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <a
        href="https://github.com/jwp9633/todo-app"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </a>
    </Wrapper>
  );
};

export default Footer;
