import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { posts } from "@shared/assets";
import { isError } from "@shared/lib";
import {
  ApiStore,
  Post,
  UpdatePost,
  CreatePost,
  ResponseService,
} from "@shared/misc";

import PostsService from "./PostsService";

class PostsStore implements ApiStore<Post, CreatePost, UpdatePost> {
  private _posts: Post[];
  private _post?: Post;

  private _apiService: PostsService;
  private _responseService: ResponseService;

  constructor() {
    this._posts = posts;
    this._post = undefined;

    this._apiService = new PostsService();
    this._responseService = new ResponseService();

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

  public getAll() {
    return this._posts;
  }

  public getById(id: string) {
    void this._responseService.handleRequest(
      () => {
        return this._apiService.getById(id);
      },
      (result: Post) => {
        this.post = result;
      }
    );

    return this._post;
  }

  public async add(entity: CreatePost) {
    void this._responseService.handleRequest(
      () => {
        return this._apiService.post(entity);
      },
      (result: Post) => {
        this._posts.push(result);
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

  public async update(entity: UpdatePost) {
    const response = await this._apiService.put(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    const index = this._posts.findIndex((item) => item.id === entity.id);
    this._posts[index] = response;

    this._responseService.invokeSuccess();
  }

  public async remove(id: string) {
    const response = await this._apiService.delete(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._posts = this._posts.filter((item) => item.id !== response.id);
    this._responseService.invokeSuccess();
  }
}

export default new PostsStore();
