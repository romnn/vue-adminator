import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import router from "@/router";
import Vue from "vue";

export interface UserLoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface AuthenticationToken {
  token: string;
  userID: number;
  expiration: number;
}

export interface TokenValidationRequest {
  token: string;
}

export interface AuthState {
  authenticationAPI: string;
  signupAPI: string;
  authToken: string;
  userID: number | null;
  authState: AuthenticationState | null;
  appAllowsRegister: boolean;
}

enum AuthenticationState {
  Loading,
  Failed,
  Authenticated
}

@Module({ dynamic: true, store, name: "auth" })
class Auth extends VuexModule implements AuthState {
  public authenticationAPI = "http://192.168.1.7:5000/api/admin/v1/auth/login";
  public signupAPI = "http://192.168.1.7:5000/api/admin/v1/auth/signup";
  public appAllowsRegister = false;
  public authToken = "";
  public userID: number | null = null;
  public authState: AuthenticationState | null = null;

  get isAuthenticated(): boolean {
    return !!this.authToken;
  }

  get authHeader(): { Authorization: string } {
    return { Authorization: `Bearer ${this.authToken}` };
  }

  @Mutation
  private setAuthState(status: AuthenticationState | null): void {
    this.authState = status;
  }

  @Mutation
  public setAuthToken(token: string): void {
    this.authToken = token;
  }

  @Mutation
  public setUserID(userID: number | null): void {
    this.userID = userID;
  }

  @Action({ rawError: true })
  public async authRequest(
    request: UserLoginRequest
  ): Promise<AuthenticationToken> {
    return new Promise<AuthenticationToken>((resolve, reject) => {
      this.setAuthState(AuthenticationState.Loading);
      Vue.axios.post(this.authenticationAPI, request).then(
        response => {
          const token = response.data.token;
          const userID = response.data.userID;
          this.setAuthToken(token);
          this.setUserID(userID?.getId() ?? "");
          this.setAuthState(AuthenticationState.Authenticated);
          Vue.cookies.set("user-token", token, {
            expires: response.data.expiration
          });
          Vue.cookies.set("user-id", userID, {
            expires: response.data.expiration
          });
          Vue.axios.defaults.headers.common["Authorization"] = token;
          resolve(response.data);
        },
        err => {
          this.setAuthState(AuthenticationState.Failed);
          Vue.cookies.remove("user-token");
          reject(err);
        }
      );
    });
  }

  @Action({ rawError: true })
  public async checkToken(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const request: TokenValidationRequest = {
        token: this.authToken
      };
      Vue.axios.post(this.authenticationAPI, request).then(
        () => resolve(true),
        () => {
          this.logout();
          router.push("/").catch(() => {
            // Ignore
          });
          reject(false);
        }
      );
    });
  }

  /*
  @Action({ rawError: true })
  public async checkUnauthenticated(error: Error): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (error != undefined) {
        if (error.code == StatusCode.UNAUTHENTICATED) this.checkToken();
      }
    });
  }
  */

  @Action({ rawError: true })
  public logout() {
    Vue.cookies.remove("user-token");
    Vue.cookies.remove("user-id");
    delete Vue.axios.defaults.headers.common["Authorization"];
    this.setAuthToken("");
    this.setUserID(null);
    this.setAuthState(null);
    router.push({ name: "login" }).catch(() => {
      // Ignore
    });
  }
}

export const AuthModule = getModule(Auth);
