import type { ReactNode } from "react";

export type IconName =
  | "arrow-right"
  | "briefcase"
  | "chart"
  | "check"
  | "graduation"
  | "lightbulb"
  | "mail"
  | "map-pin"
  | "phone"
  | "refresh"
  | "search"
  | "settings"
  | "target"
  | "trend"
  | "users";

const paths: Record<IconName, ReactNode> = {
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  briefcase: (
    <>
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <path d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M4 12h16" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12 15V8" />
      <path d="M16 15v-6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  graduation: (
    <>
      <path d="m3 8 9-4 9 4-9 4Z" />
      <path d="M7 10v5c2.8 2 7.2 2 10 0v-5" />
      <path d="M21 8v6" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-.7.6-1 1.4-1 2H9c0-.6-.3-1.4-1-2Z" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4Z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M7 4h4l1 5-2.5 1.5a12 12 0 0 0 4 4L15 12l5 1v4c0 1.1-.9 2-2 2A14 14 0 0 1 5 6c0-1.1.9-2 2-2Z" />
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M4 12A8 8 0 0 1 17.7 6.4" />
      <path d="M17 2v5h-5" />
      <path d="M7 22v-5h5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </>
  ),
  settings: (
    <>
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      <path d="M4 12h2" />
      <path d="M18 12h2" />
      <path d="M12 4v2" />
      <path d="M12 18v2" />
      <path d="m6.3 6.3 1.4 1.4" />
      <path d="m16.3 16.3 1.4 1.4" />
      <path d="m17.7 6.3-1.4 1.4" />
      <path d="m7.7 16.3-1.4 1.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  trend: (
    <>
      <path d="M4 17 10 11l4 4 6-8" />
      <path d="M15 7h5v5" />
    </>
  ),
  users: (
    <>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="9" r="4" />
      <path d="M4 18a3.5 3.5 0 0 1 4-3.4" />
      <path d="M16 14.6a3.5 3.5 0 0 1 4 3.4" />
      <path d="M6.5 8.5a2.5 2.5 0 1 0 0 5" />
      <path d="M17.5 8.5a2.5 2.5 0 1 1 0 5" />
    </>
  ),
};

export default function Icon({
  name,
  className,
  size = 24,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      {paths[name]}
    </svg>
  );
}
