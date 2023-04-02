import { posts } from "@shared/assets";
import { baseUrl } from "@shared/constants";
import {
  EntitiesService,
  ApiService,
  Post,
  CreatePost,
  UpdatePost,
  Out,
} from "@shared/misc";

class PostsService
  extends EntitiesService<Post, CreatePost, UpdatePost>
  implements ApiService<Post, CreatePost, UpdatePost>
{
  constructor() {
    super(`${baseUrl}/Posts`);
  }

  public override async getById(id: string): Out<Post> {
    return posts.find((item) => item.id === id)!;
  }
}

export default PostsService;
