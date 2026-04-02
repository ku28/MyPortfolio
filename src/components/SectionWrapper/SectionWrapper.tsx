import { ReactNode } from 'react';
import { Container } from './styles';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
}

export function SectionWrapper({ children, id }: SectionWrapperProps) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <Container ref={ref} id={id}>
      {children}
    </Container>
  );
}
