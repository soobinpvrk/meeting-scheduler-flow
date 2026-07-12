export function StatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div className="flex h-[44px] w-full items-center justify-between px-[27px] text-white">
      <span
        className="w-[54px] text-[15px] font-semibold tracking-[-0.24px]"
        style={{ fontFeatureSettings: '"tnum"' }}
      >
        {time}
      </span>
      <div className="flex items-center gap-[6px]">
        {/* Cellular */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          <rect x="0" y="8" width="3" height="4" rx="1" fill="white" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="white" />
          <rect x="10" y="3" width="3" height="9" rx="1" fill="white" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="white" />
        </svg>
        {/* Wi-Fi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
          <path
            d="M8 2.2c2.6 0 5 1 6.8 2.7l1.2-1.4C13.9 1.4 11.05.25 8 .25S2.1 1.4 0 3.5l1.2 1.4C3 3.2 5.4 2.2 8 2.2Z"
            fill="white"
          />
          <path
            d="M8 5.9c1.5 0 2.9.6 3.95 1.55l1.2-1.4A8.1 8.1 0 0 0 8 3.9a8.1 8.1 0 0 0-5.15 2.15l1.2 1.4A5.85 5.85 0 0 1 8 5.9Z"
            fill="white"
          />
          <path
            d="M8 9.5 10.15 7.3A3.2 3.2 0 0 0 8 6.5a3.2 3.2 0 0 0-2.15.8L8 9.5Z"
            fill="white"
          />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
          <rect
            x="0.5"
            y="0.83"
            width="21"
            height="10.33"
            rx="2.7"
            stroke="white"
            strokeOpacity="0.35"
          />
          <rect x="2" y="2.33" width="18" height="7.33" rx="1.5" fill="white" />
          <path
            d="M23 4v4a1.8 1.8 0 0 0 1-1.6V5.6A1.8 1.8 0 0 0 23 4Z"
            fill="white"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}
