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
}

export default new PostsStore();
