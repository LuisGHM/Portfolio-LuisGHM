"use client"
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (window.navigator as any).standalone === true;

    if (isStandalone || isIOSStandalone) {
      setIsInstalled(true);
      return;
    }

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registered successfully:', registration);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  console.log('🔄 New version available! Please refresh.');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('❌ Service Worker registration failed:', error);
        });
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      console.log('💾 beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('✅ PWA was installed');
      setShowInstallButton(false);
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      console.log(`User response to the install prompt: ${outcome}`);

      if (outcome === 'accepted') {
        console.log('✅ User accepted the install prompt');
      } else {
        console.log('❌ User dismissed the install prompt');
      }

      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {
      console.error('❌ Error during PWA installation:', error);
    }
  };

  // Don't render if already installed
  if (isInstalled) {
    return null;
  }

  return (
    <>
      {showInstallButton && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-[#1a1a1d] rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#212529] dark:text-[#F8F9FA] text-sm">
                  Install Portfolio
                </h3>
                <p className="text-[#495057] dark:text-[#868E96] text-xs">
                  Add to home screen for quick access
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-[#5C63ED] dark:bg-[#623CEA] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#4C51BF] dark:hover:bg-[#311E75] transition-colors"
              >
                Install
              </button>
              <button
                onClick={() => setShowInstallButton(false)}
                className="px-3 py-2 text-[#495057] dark:text-[#868E96] text-sm hover:text-[#212529] dark:hover:text-[#F8F9FA] transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstaller;