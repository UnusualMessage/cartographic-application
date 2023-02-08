import { makeAutoObservable, runInAction } from "mobx";
import { v4 as uuid } from "uuid";

import { ApiStore } from "@shared/api/types/api";
import { Post } from "@shared/api/types/entities";
import { CreatePost, UpdatePost } from "@shared/api/types/entities/Post";
import { organizations } from "@shared/assets/samples";
import { posts } from "@shared/assets/samples/posts";

class PostsStore implements ApiStore<Post, CreatePost, UpdatePost> {
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

    return this._post;
  }

  public async add(post: CreatePost) {
    const posts = this._posts.slice();

    const organization = organizations.find(
      (organization) => post.organizationId === organization.id
    );

    if (organization) {
      const newPost: Post = {
        id: uuid(),
        title: post.title,
        organization: organization,
      };

      posts.push(newPost);
    }

    runInAction(() => {
      this._posts = posts;
    });
  }

  public async duplicate(id: string) {
    const post = this.posts.find((post) => post.id === id);
    const posts = this._posts.slice();

    if (post) {
      const copy = { ...post };
      copy.id = uuid();

      posts.push(copy);

      runInAction(() => {
        this._posts = posts;
      });
    }
  }

  public async update(post: UpdatePost) {
    const posts = this._posts.slice();

    const updatedPost = this.posts.find((item) => item.id === post.id);

    if (updatedPost) {
      const organization = organizations.find(
        (organization) => organization.id === post.organizationId
      );

      if (organization) {
        updatedPost.title = post.title;
        updatedPost.organization = organization;

        runInAction(() => {
          this._posts = posts;
        });
      }
    }
  }

  public async remove(id: string) {
    runInAction(() => {
      this._posts = this._posts.filter((post) => post.id !== id);
      this._post = undefined;
    });
  }
}

export default new PostsStore();
