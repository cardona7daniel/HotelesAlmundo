import {
    Router
} from 'express';
import * as controller from '../controllers/hotels';

const router = Router();

router.route("/")
    .get(controller.all)
    .post(controller.getByStars)

router.route("/:filter")
    .get(controller.getByName)
    .post(controller.getByStars)

export default router;
