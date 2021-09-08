import { useState } from 'react';
import Modal  from 'react-modal';
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { NewTransactionModal } from './Components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModelOpen, setIsNewsModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewsModalTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewsModalTransactionOpen(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionOpenModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModelOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
