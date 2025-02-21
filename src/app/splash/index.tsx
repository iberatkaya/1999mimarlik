import Image from "next/image";
import { useEffect, useState } from "react";

const SPLASH_TIMEOUT = 2000; // 2 seconds for splash display
const REVISIT_TIMEOUT = 300000; // 5 minutes

interface SplashScreenProps {
  onComplete: () => void;
}

export const shouldShowSplash = (currentTimeInMS?: number) => {
  const lastVisit = localStorage.getItem("lastVisit");
  const muCurrentTime = currentTimeInMS ?? Date.now();
  return !lastVisit || muCurrentTime - parseInt(lastVisit) > REVISIT_TIMEOUT;
};

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTime: number = Date.now();

    if (shouldShowSplash(currentTime)) {
      setShowSplash(true);
      localStorage.setItem("lastVisit", currentTime.toString());

      timer = setTimeout(() => {
        setShowSplash(false);
        onComplete();
      }, SPLASH_TIMEOUT);
    } else {
      onComplete();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-white text-4xl font-serif animate-fade-in">
        <Image
          src="/logo.jpg"
          width={64}
          height={64}
          alt="1999 Architects Logo"
          className="w-36 h-36 animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
