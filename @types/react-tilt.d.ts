declare module 'react-tilt' {
    import { ComponentType } from 'react';
  
    interface TiltProps {
      options?: any;
      className?: string;
      children?: React.ReactNode;
    }
  
    const Tilt: ComponentType<TiltProps>;
    export default Tilt;
  }
  