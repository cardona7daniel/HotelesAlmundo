import {
    Router
} from 'express';
import * as controller from '../controllers/hotels';

const router = Router();

router.route("/")
    .get(controller.all)

router.route("/:filter")
    .get(controller.getByStars)
    .post(controller.getByName)

export default router;