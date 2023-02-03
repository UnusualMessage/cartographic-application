import { AccessToken, AuthenticateUser } from "../../../shared/api/types/entities/User";
import { get, post } from "../../../shared/lib/utils/requests";
import { Error } from "../../../shared/api/types/api";
import { baseUrl } from "../../../shared/assets/api/config";

class AuthService {
  protected readonly url: string;

  constructor() {
    this.url = `${baseUrl}/auth`;
  }

  public access = async (): Promise<AccessToken | Error> => {
    return await get(this.url, "access", "");
  };

  public authenticate = async (
    model: AuthenticateUser
  ): Promise<AccessToken | Error> => {
    return await post(model, this.url, "authenticate", "");
  };

  public refresh = async (): Promise<AccessToken | Error> => {
    return await post({}, this.url, "refresh", "");
  };
}

export default AuthService;
