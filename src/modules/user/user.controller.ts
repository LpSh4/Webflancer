// import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  UpdateEmailData,
  UpdateProfilePictureData,
  UpdateUserData,
} from "./user.types";

export class UserController {
  constructor(
    // private userRepo: UserRepository,
    private userService: UserService,
  ) {}

  updateProfile = async (
    req: FastifyRequest<{
      Body: UpdateUserData;
    }>,
    res: FastifyReply,
  ): Promise<never> => {
    const { id } = req.body;
    await this.userService.updateUser(id, req.body);
    return res.status(204).send();
  };

  updateEmail = async (
    req: FastifyRequest<{
      Body: UpdateEmailData;
    }>,
    res: FastifyReply,
  ): Promise<never> => {
    const { id } = req.body;
    await this.userService.updateEmail(id, req.body.email);
    return res.status(204).send();
  };

  updateProfilePicture = async (
    req: FastifyRequest<{
      Body: UpdateProfilePictureData;
    }>,
    res: FastifyReply,
  ): Promise<never> => {
    const { id } = req.body;
    await this.userService.updateProfilePicture(id, req.body.profilePicture);
    return res.status(204).send();
  };
}
