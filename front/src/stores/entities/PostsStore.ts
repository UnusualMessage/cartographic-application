import { makeAutoObservable } from "mobx";

import { posts } from "../../assets/data/posts";
import { Post } from "../../types/entities";

class PostsStore {
  private _posts: Post[];

  constructor() {
    this._posts = posts;

    makeAutoObservable(this);
  }

  public get posts() {
    return this._posts;
  }

  public set posts(value: Post[]) {
    this._posts = value;
  }

  public async add(post: Post) {
    const posts = this._posts.slice();
    posts.push(post);

    this._posts = posts;
  }

  public async remove(id: string) {
    this._posts = this._posts.filter((post) => post.id !== id);
  }
}

export default new PostsStore();
