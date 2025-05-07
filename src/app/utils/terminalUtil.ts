import { terminal } from 'terminal-kit';

export default class TerminalUtil {

  static title(text: string): void {
    terminal.clear();
    terminal.magenta(`${ text }\n`);
    terminal.magenta('-'.repeat(text.length) + '\n');
  }

  static clear(): void {
    terminal.clear();
  }

  static showValueKey(key: string, value: string|number): void {
    terminal.yellow(key).green(value).white('\n');
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const result = await terminal.singleColumnMenu(options).promise;
    return [result.selectedIndex, result.selectedText];
  }

  static async select(text: string, options: string[]): Promise<[number, string]> {
    terminal.yellow('\n' + text);

    const result = await terminal.singleLineMenu(options).promise;
    return [result.selectedIndex, result.selectedText];
  }

  static async confirm(text: string): Promise<boolean> {
    terminal.yellow('\n' + text);

    const result = await terminal.singleLineMenu(['Sim', 'Não']).promise;
    return result.selectedIndex === 0;
  }
}