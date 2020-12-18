import { Request, Response } from 'express';
import { Favorite } from '../entity/Favorite';
import { CatService, FavoriteService } from '../services';

export class CatController {
    catService: CatService;
    favService: FavoriteService;
    constructor() {
        this.catService = new CatService();
        this.favService = new FavoriteService();
    }
    /**
     * SearchByBreed
     */
    public async SearchByBreed({ req, res }: { req: Request; res: Response }) {
        const searchTerm = req.params['breed'];

        if (!searchTerm || typeof searchTerm !== 'string') {
            return res.status(400).json({
                error: 'Bad Request',
            });
        }

        try {
            const breed = await this.catService.searchBreedByName(searchTerm);
            const image = await this.catService.getImageByImageId(
                breed[0].reference_image_id
            );
            this.favService.AddOrUpdateFavorite(
                breed[0].id,
                breed[0].name,
                breed[0].description,
                image.url
            );
            return res.status(200).json(breed);
        } catch (err) {
            return res.status(500).json({
                error: err,
            });
        }
    }

    public async getFavoriteBreeds({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }) {
        const limit = req.query['limit'] ? req.query['limit'] : 10;
        try {
            const mostSearched = await this.favService.getMostSearchedBreeds(
                Number(limit)
            );
            return res.status(200).json(mostSearched);
        } catch (error) {
            return res.status(500).json({
                error: error,
            });
        }
    }

    public async getRandomImages({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }) {
        const limit = req.query['limit'] ? req.query['limit'] : 3;
        try {
            const images = await this.catService.getRandomImages(Number(limit));
            return res.status(200).json(images);
        } catch (error) {
            return res.status(500).json({
                error: error,
            });
        }
    }

    public async getAllBreeds({ res }: { res: Response }) {
        try {
            const breeds = await this.catService.getAllBreeds();
            return res.status(200).json(breeds);
        } catch (error) {
            return res.status(500).json({
                error: error,
            });
        }
    }

    public async getImagesByBreedId({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }) {
        const breedId = req.params['breedId'];
        const limit = req.query['limit'] ? req.query['limit'] : 1;

        if (!breedId || typeof breedId !== 'string') {
            return res.status(400).json({
                error: 'Bad Request',
            });
        }

        try {
            const breeds = await this.catService.getImagesByBreedId(
                breedId,
                Number(limit)
            );
            return res.status(200).json(breeds);
        } catch (error) {
            return res.status(500).json({
                error: error,
            });
        }
    }

    public async getImageById({ req, res }: { req: Request; res: Response }) {
        const imageId = req.params['imageId'];

        if (!imageId || typeof imageId !== 'string') {
            return res.status(400).json({
                error: 'Bad Request',
            });
        }

        try {
            const refImage = await this.catService.getImageByImageId(imageId);
            return res.status(200).json(refImage);
        } catch (error) {
            return res.status(500).json({
                error: error,
            });
        }
    }
}
