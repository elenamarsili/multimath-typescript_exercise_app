export function getInputValue(elementID: string): string {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  return inputElement.value;
}

export function logger(message:string): void {
  console.log(message);
}
