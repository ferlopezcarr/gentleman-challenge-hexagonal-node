import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class SingerNameApi {
  private name: string;

  constructor(name: string) {
    notUndefinedOrNull(name);
    this.name = notEmptyString(name);
  }

  public getName(): string {
    return this.name;
  }
}
