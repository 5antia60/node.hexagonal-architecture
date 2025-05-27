import UiUtilsGateway from '@/core/shared/gateway/UiUtilsGateway';
import { terminal } from 'terminal-kit';

export default class TerminalUtilService implements UiUtilsGateway {
  public title(text: string): void {
    terminal.clear();
    terminal.magenta(`${text}\n`);
    terminal.magenta('-'.repeat(text.length) + '\n');
  }

  public clear(): void {
    terminal.clear();
  }

  public showValueKey(key: string, value: string | number): void {
    terminal.yellow(key).green(value).white('\n');
  }

  public async requiredField(label: string, defaultValue: string = ''): Promise<string> {
    terminal.yellow(`\n${label}`);

    const value = await terminal.inputField({
      default: defaultValue
    }).promise;

    if (value) return value;

    return this.requiredField(label);
  }

  public async menu(options: string[]): Promise<[number, string]> {
    const result = await terminal.singleColumnMenu(options).promise;
    return [result.selectedIndex, result.selectedText];
  }

  public async select(text: string, options: string[]): Promise<[number, string]> {
    terminal.yellow('\n' + text);

    const result = await terminal.singleLineMenu(options).promise;
    return [result.selectedIndex, result.selectedText];
  }

  public async confirm(text: string): Promise<boolean> {
    terminal.yellow('\n' + text);

    const result = await terminal.singleLineMenu(['Sim', 'Não']).promise;
    return result.selectedIndex === 0;
  }

  public async waitEnter(): Promise<void> {
    terminal.white('\nPressione ENTER para continuar...');
    await terminal.inputField({ echo: false }).promise;
  }

  public success(text: string, dropLine: boolean = true): void {
    terminal.green((dropLine ? '\n' : '') + text);
  }

  public error(text: string, dropLine: boolean = true): void {
    terminal.red((dropLine ? '\n' : '') + text);
  }
}
