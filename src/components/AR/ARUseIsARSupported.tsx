import {useEffect, useState} from 'react';
import {isARSupportedOnDevice} from '@viro-community/react-viro';

export default function useIsARSupported(): boolean | undefined {
  const [isARSupported, setIsARSupported] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(checkARSupport, [isARSupported]);

  function checkARSupport(): void {
    if (typeof isARSupported === 'boolean') {
      return;
    }

    isARSupportedOnDevice(onARUnsupported, onARSupported);
  }

  function onARSupported(): void {
    setIsARSupported(true);
  }

  function onARUnsupported(status?: string | Error): void {
    console.log(status);
    if (status === 'TRANSIENT') {
      checkARSupport();

      return;
    }

    setIsARSupported(false);
  }

  return isARSupported;
}
