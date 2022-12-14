import styled from "styled-components";

export const ContainerMovie = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  grid-gap: 24px;
`;

export const ContainerPerson = styled.section`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
`;
