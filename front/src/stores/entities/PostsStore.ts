import { makeAutoObservable, runInAction } from "mobx";

import { posts } from "../../assets/data/posts";
import { Post } from "../../types/entities";

class PostsStore {
  private _posts: Post[];
  private _post: Post | undefined;

  constructor() {
    this._posts = posts;
    this._post = undefined;

    makeAutoObservable(this);
  }

  public get posts() {
    return this._posts;
  }

  public set posts(value: Post[]) {
    this._posts = value;
  }

  public get post() {
    return this._post;
  }

  public set post(post: Post | undefined) {
    this._post = post;
  }

  public async getById(id: string) {
    runInAction(() => {
      this._post = this._posts.find((post) => post.id === id);
    });
  }

  public async add(post: Post) {
    const posts = this._posts.slice();
    posts.push(post);

    runInAction(() => {
      this._posts = posts;
    });
  }

  public async update(post: Post) {
    runInAction(() => {
      this._posts = this.posts.map((item) =>
        item.id === post.id ? post : item
      );
      this._post = post;
    });
  }

  public async remove(id: string) {
    runInAction(() => {
      this._posts = this._posts.filter((post) => post.id !== id);
      this._post = undefined;
    });
  }
}

export default new PostsStore();
