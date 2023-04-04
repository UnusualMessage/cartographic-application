import { baseUrl } from "@shared/constants";
import {
  EntitiesService,
  ApiService,
  Post,
  CreatePost,
  UpdatePost,
} from "@shared/misc";

class PostsService
  extends EntitiesService<Post, CreatePost, UpdatePost>
  implements ApiService<Post, CreatePost, UpdatePost>
{
  constructor() {
    super(`${baseUrl}/Posts`);
  }
}

export default PostsService;
