import UiUtilsGateway from '@/core/shared/gateway/UiUtilsGateway';
import { confirm, input, select } from '@inquirer/prompts';

export default class TerminalUtilService implements UiUtilsGateway {
  static #instance: TerminalUtilService;

  public static get instance(): TerminalUtilService {
    if (!TerminalUtilService.#instance)
      TerminalUtilService.#instance = new TerminalUtilService();

    return TerminalUtilService.#instance;
  }

  private static readonly colors = {
    reset: '\x1b[0m',
    magenta: '\x1b[35m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    white: '\x1b[37m'
  };

  private write(text: string): void {
    process.stdout.write(text);
  }

  private color(text: string, color: keyof typeof TerminalUtilService.colors): string {
    return `${TerminalUtilService.colors[color]}${text}${TerminalUtilService.colors.reset}\n`;
  }

  public title(text: string): void {
    this.clear();
    this.write(this.color(`${text}\n`, 'magenta'));
    this.write(this.color(`${'-'.repeat(text.length)}`, 'magenta'));
  }

  public clear(): void {
    process.stdout.write('\x1b[2J\x1b[H');
  }

  public showValueKey(key: string, value: string | number): void {
    this.write(this.color(key, 'yellow') + this.color(String(value), 'green') + this.color('\n', 'white'));
  }

  public async requiredField(label: string, defaultValue: string = ''): Promise<string> {
    const value = await input({
      message: label,
      default: defaultValue
    });

    if (value) return value;

    return this.requiredField(label, defaultValue);
  }

  public async menu(options: string[]): Promise<[number, string]> {
    const selected = await select({
      message: '',
      choices: options.map((option, index) => ({
        name: option,
        value: { index, text: option }
      }))
    });

    return [selected.index, selected.text];
  }

  public async select(text: string, options: string[]): Promise<[number, string]> {
    const selected = await select({
      message: text,
      choices: options.map((option, index) => ({
        name: option,
        value: { index, text: option }
      }))
    });

    return [selected.index, selected.text];
  }

  public async confirm(text: string): Promise<boolean> {
    return confirm({
      message: text,
      default: true
    });
  }

  public async waitEnter(): Promise<void> {
    await input({
      message: '\nPressione ENTER para continuar...',
      default: '',
      transformer: () => ''
    });
  }

  public success(text: string, dropLine: boolean = true): void {
    this.write(this.color((dropLine ? '\n' : '') + text, 'green'));
  }

  public error(text: string, dropLine: boolean = true): void {
    this.write(this.color((dropLine ? '\n' : '') + text, 'red'));
  }
}
