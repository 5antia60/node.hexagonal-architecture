import UiUtilsGateway from '../gateway/UiUtilsGateway';

export default class UiUtilsService implements UiUtilsGateway {
  constructor(private readonly ui: UiUtilsGateway) {}

  public title(message: string): void {
    this.ui.title(message);
  }

  public clear(): void {
    this.ui.clear();
  }

  public showValueKey(key: string, value: string | number): void {
    this.ui.showValueKey(key, value);
  }

  public requiredField(label: string, defaultValue?: string): Promise<string> {
    return this.ui.requiredField(label, defaultValue);
  }

  public menu(options: string[]): Promise<[number, string]> {
    return this.ui.menu(options);
  }

  public select(text: string, options: string[]): Promise<[number, string]> {
    return this.ui.select(text, options);
  }

  public confirm(text: string): Promise<boolean> {
    return this.ui.confirm(text);
  }

  public waitEnter(): Promise<void> {
    return this.ui.waitEnter();
  }

  public success(text: string, dropLine?: boolean): void {
    this.ui.success(text, dropLine);
  }

  public error(text: string, dropLine?: boolean): void {
    this.ui.error(text, dropLine);
  }
}
