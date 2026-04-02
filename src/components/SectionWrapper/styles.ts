import styled from 'styled-components';

export const Container = styled.div`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
