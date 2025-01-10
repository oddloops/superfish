import server from './server';
import Envs from '@common/Envs';

server.listen(Envs.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${Envs.PORT}`);
});