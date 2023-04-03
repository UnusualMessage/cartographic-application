import { baseUrl } from "@shared/constants";
import { get, post } from "@shared/lib";
import {
  AccessToken,
  AuthenticateUser,
  Error,
  GetRequestOptions,
  PostRequestOptions,
} from "@shared/misc";

class AuthService {
  private readonly url: string;

  constructor() {
    this.url = `${baseUrl}/auth`;
  }

  public access = async (): Promise<AccessToken | Error> => {
    const options: GetRequestOptions = {
      url: this.url,
      route: "access",
    };

    return await get(options);
  };

  public authenticate = async (
    model: AuthenticateUser
  ): Promise<AccessToken | Error> => {
    const options: PostRequestOptions = {
      model,
      url: this.url,
      route: "authenticate",
    };

    return await post(options);
  };

  public refresh = async (): Promise<AccessToken | Error> => {
    const options: PostRequestOptions = {
      model: {},
      url: this.url,
      route: "refresh",
    };

    return await post(options);
  };
}

export default AuthService;
