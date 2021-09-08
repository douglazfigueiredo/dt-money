import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionOpenModal: () => void;
}

export function Header({ onOpenNewTransactionOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}