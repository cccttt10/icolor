import ColorFormat from './ColorFormat';
import ComplexColor from './ComplexColor';
import StarterColor from './StarterColor';

// Work-around to "Cannot re-export a type when the '--isolatedModules' flag is provided"
export * from './ColorIntensity';

export { ColorFormat, ComplexColor, StarterColor };
