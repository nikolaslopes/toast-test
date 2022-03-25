import { Button } from '../../components/Button';
import { Container } from './styles';
import { toast } from 'react-toastify';

export function Home() {
  function showToastify() {
    toast.success('Toast success', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Container>
      <h1>Aperte o botão</h1>
      <Button label='Click me!' onClick={showToastify} />
    </Container>
  );
}
