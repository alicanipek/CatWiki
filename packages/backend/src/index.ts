import 'reflect-metadata';
import express from 'express';
import { createConnection, ConnectionOptions } from 'typeorm';
import { Favorite } from './entity/Favorite';
import { CatRouter } from './routes';
import * as ormconfig from '../ormconfig.json';
import cors from 'cors';

const app = express();
const port = 3000;

async function main() {
    createConnection(ormconfig as ConnectionOptions).then(
        async (connection) => {
            app.use(express.json());
            app.use(cors());
            app.use('/api', CatRouter);

            app.listen(port, () => {
                console.log(
                    `Example app listening at http://localhost:${port}`
                );
            });
        }
    );
}

main().catch((err) => console.error(err));
