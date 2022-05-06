if (!('__reanimatedWorkletInit' in global)) {
    Object.assign(global, { __reanimatedWorkletInit: () => {} });
}

export type { TCarouselProps, ICarouselInstance } from './types';
import Carousel from './Carousel';

// @ts-ignore
global.__reanimatedWorkletInit = () => {};

export default Carousel;
