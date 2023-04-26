import { ChangeEvent, KeyboardEvent, useRef } from 'react';

import { isAllowedElement } from '@/shared/helpers/hasElement';
import { container } from './styles.module.scss';

export const Key = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextInput = event.target.nextElementSibling;

    if (isAllowedElement(nextInput, 'TEXTAREA')) {


      nextInput.focus();
    }
  };

  const handleKeyUp = (event:KeyboardEvent<HTMLInputElement>) => {
    const previousInput = event.currentTarget?.previousElementSibling as HTMLInputElement;
    const lastInput = event.currentTarget.parentNode?.lastElementChild as HTMLInputElement;
    const elementToFocus = previousInput?.tagName === 'INPUT' ? previousInput : lastInput?.tagName === 'INPUT' ? lastInput : null;

    if (event.key === 'Backspace' && elementToFocus && event.currentTarget.value === '') {
      // event.currentTarget.value === "" will not be needed when we ensure that the maximum length of the input value is 1
      elementToFocus.focus();
    }
  };

  return (
    <input
      className={container}
      type='text'
      ref={ref}
      onChange={(event) => { handleChange(event); }}
      onKeyUp={(event) => handleKeyUp(event)}
    />
  );
};
