import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { posts } from "@shared/assets";
import {
  ApiStore,
  Post,
  UpdatePost,
  CreatePost,
  FetchService,
} from "@shared/misc";

import PostsService from "./PostsService";

class PostsStore implements ApiStore<Post, CreatePost, UpdatePost> {
  private _posts: Post[];
  private _post?: Post;

  private _api: PostsService;
  private _fetch: FetchService;

  constructor() {
    this._posts = posts;
    this._post = undefined;

    this._api = new PostsService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get posts() {
    return this._posts;
  }

  public set posts(value) {
    this._posts = value;
  }

  public get post() {
    return this._post;
  }

  public set post(post) {
    this._post = post;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.posts = result;
      }
    );

    return this._posts;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.post = result;
      }
    );

    return this._post;
  }

  public async add(entity: CreatePost) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this._posts.push(result);
      }
    );
  }

  public async update(entity: UpdatePost) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this._posts.findIndex((item) => item.id === entity.id);
        this._posts[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this._posts = this._posts.filter((item) => item.id !== result.id);
      }
    );
  }

  public async duplicate(id: string) {
    const record = this._posts.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._posts.push(copy);
    }
  }
}

export default new PostsStore();
