type ElementsAllowed = {
  INPUT: HTMLInputElement,
  TEXTAREA: HTMLTextAreaElement,
};
type AllowedKeys = keyof ElementsAllowed;

export const isAllowedElement = <T extends AllowedKeys>
  (element: Element | null, type: T): element is ElementsAllowed[T] => element?.tagName === type;
