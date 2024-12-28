import logger from 'jet-logger';

import Env from '@src/common/Env';
import server from './server';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + Env.Port.toString());

server.listen(Env.Port, () => {
    console.log(`Running Express server on port: http://localhost:${Env.Port}/`)
    logger.info(SERVER_START_MSG)
  }
);
