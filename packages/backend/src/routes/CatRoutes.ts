import { catController } from '../controllers';
import express, { Request, Response } from 'express';

export const router = express.Router({
    strict: true,
});

router.get('/breeds/:breed', (req: Request, res: Response) => {
    catController.SearchByBreed({ req, res });
});

router.get('/favorites', (req: Request, res: Response) => {
    catController.getFavoriteBreeds({ req, res });
});

router.get('/breeds', (req: Request, res: Response) => {
    catController.getAllBreeds({ res });
});

router.get('/image/:imageId', (req: Request, res: Response) => {
    catController.getImageById({ req, res });
});

router.get('/images/search', (req: Request, res: Response) => {
    catController.getRandomImages({ req, res });
});

router.get('/images/:breedId', (req: Request, res: Response) => {
    catController.getImagesByBreedId({ req, res });
});
