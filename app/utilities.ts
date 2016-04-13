export class Constants
{
  static TOKEN: string = "authToken";
  static USER: string = "user";
}

export function isLoggedIn(): boolean {
  return !!localStorage.getItem(Constants.TOKEN);
}

export function createHashCode(s: string): number {
  return s.split("")
          .reduce((a,b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
          }, 0);
}