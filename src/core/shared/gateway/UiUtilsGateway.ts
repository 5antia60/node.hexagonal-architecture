export default interface UiUtilsGateway {
  title(message: string): void;
  clear(): void;
  showValueKey(key: string, value: string|number): void;
  requiredField(label: string, defaultValue?: string): Promise<string>;
  menu(options: string[]): Promise<[number, string]>;
  select(text: string, options: string[]): Promise<[number, string]>;
  confirm(text: string): Promise<boolean>;
  waitEnter(): Promise<void>;
  success(text: string, dropLine?: boolean): void;
  error(text: string, dropLine?: boolean): void;
}
