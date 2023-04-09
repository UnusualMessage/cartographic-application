import { get, remove, put, post } from "../../../lib";
import {
  ApiService,
  Out,
  GetRequestOptions,
  PostRequestOptions,
  PutRequestOptions,
  DeleteRequestOptions,
} from "../../types";

class EntitiesService<T, CreateT, UpdateT>
  implements ApiService<T, CreateT, UpdateT>
{
  protected readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public async getAll(): Out<T[]> {
    const options: GetRequestOptions = {
      url: this.url,
    };

    return await get(options);
  }

  public async getById(id: string): Out<T> {
    const options: GetRequestOptions = {
      url: this.url,
      route: id,
    };

    return await get(options);
  }

  public async post(data: CreateT): Out<T> {
    const options: PostRequestOptions = {
      url: this.url,
      model: data,
    };

    return await post(options);
  }

  public async put(data: UpdateT): Out<T> {
    const options: PutRequestOptions = {
      url: this.url,
      model: data,
    };

    return await put(options);
  }

  public async delete(id: string): Out<T> {
    const options: DeleteRequestOptions = {
      url: this.url,
      route: id,
    };

    return await remove(options);
  }
}

export default EntitiesService;
