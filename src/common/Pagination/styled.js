import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 335px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  margin: 0 18px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: 720px) {
    margin: 0 9px;
  }
`;

export const Link = styled.a`
  padding: 8px 16px;
  margin: 0 6px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  color: ${({ theme }) => theme.colors.woodSmoke};
  text-decoration: none;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.pattensBlue};
    `};

  @media (max-width: 720px) {
    padding: 8px 12px;
  }
`;

export const Text = styled.span`
  margin: 0 4px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Number = styled.span`
  margin: 0 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: 720px) {
    margin: 0 1px;
  } ;
`;
