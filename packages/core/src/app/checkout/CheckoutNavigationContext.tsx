import { createContext } from 'react';

import CheckoutStepType from './CheckoutStepType';

export interface CheckoutNavigationContextType {
    goToStep(step: CheckoutStepType, options?: { isDefault?: boolean }): void;
}

export const CheckoutNavigationContext =
    createContext<CheckoutNavigationContextType>({
        goToStep: () => {},
    });