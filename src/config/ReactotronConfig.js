import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect({
    host: 'http://localhost:3000',
  });

  tron.clear();

  console.tron = tron;
}
