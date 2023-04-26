type ElementsAllowed = {
  INPUT: HTMLInputElement,
  TEXTAREA: HTMLTextAreaElement,
};
type KeysAllowd = keyof ElementsAllowed;

export const isElement = <T extends KeysAllowd>
  (element: Element | null, type: T): element is ElementsAllowed[T] => element?.tagName === type;
