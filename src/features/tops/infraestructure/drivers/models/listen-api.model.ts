import {
  isIntegerNumber,
  minNumber,
  notUndefinedOrNull,
} from "@core/domain/services";

export class ListenApi {
  private static readonly MIN_LISTEN = 0;

  private listen: number;

  constructor(listen: number) {
    notUndefinedOrNull(listen);
    isIntegerNumber(listen);
    this.listen = minNumber(listen, ListenApi.MIN_LISTEN);
  }

  public getListen(): number {
    return this.listen;
  }
}
