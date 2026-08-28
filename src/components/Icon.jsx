// Minimal line-icon set (24x24, stroke-based) — replaces emoji across the UI.

function Base({ size = 16, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export const IconSearch = (p) => (
  <Base {...p}>
    <circle cx="10" cy="10" r="6" />
    <line x1="20" y1="20" x2="14.5" y2="14.5" />
  </Base>
)

export const IconBell = (p) => (
  <Base {...p}>
    <path d="M12 3a5 5 0 0 0-5 5v3.2c0 .8-.3 1.6-.9 2.1L5 15h14l-1.1-1.7c-.6-.5-.9-1.3-.9-2.1V8a5 5 0 0 0-5-5z" />
    <path d="M9.5 18a2.5 2.5 0 0 0 5 0" />
  </Base>
)

export const IconGitFork = (p) => (
  <Base {...p}>
    <circle cx="7" cy="5" r="2" />
    <circle cx="17" cy="5" r="2" />
    <circle cx="12" cy="19" r="2" />
    <path d="M7 7v2a5 5 0 0 0 5 5" />
    <path d="M17 7v2a5 5 0 0 1-5 5v2" />
  </Base>
)

export const IconFolder = (p) => (
  <Base {...p}>
    <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
  </Base>
)

export const IconFileText = (p) => (
  <Base {...p}>
    <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v4h4" />
    <line x1="8.5" y1="12.5" x2="15.5" y2="12.5" />
    <line x1="8.5" y1="16" x2="15.5" y2="16" />
  </Base>
)

export const IconStar = (p) => (
  <Base {...p}>
    <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
  </Base>
)

export const IconEye = (p) => (
  <Base {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
)

export const IconTag = (p) => (
  <Base {...p}>
    <path d="M12 2h6a2 2 0 0 1 2 2v6l-9.5 9.5a2 2 0 0 1-2.8 0L3 15.3a2 2 0 0 1 0-2.8L12 2z" />
    <circle cx="16.5" cy="7.5" r="1.3" />
  </Base>
)

export const IconActivity = (p) => (
  <Base {...p}>
    <polyline points="3,13 8,13 10,7 14,18 16,13 21,13" />
  </Base>
)

export const IconGlobe = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </Base>
)

export const IconUser = (p) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </Base>
)

export const IconCompass = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <polygon points="15,9 13,13 9,15 11,11" />
  </Base>
)

export const IconBox = (p) => (
  <Base {...p}>
    <path d="M3 8l9-5 9 5-9 5-9-5z" />
    <path d="M3 8v8l9 5 9-5V8" />
    <line x1="12" y1="13" x2="12" y2="21" />
  </Base>
)

export const IconMail = (p) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </Base>
)

export const IconMessageCircle = (p) => (
  <Base {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.6 8.6 0 0 1-3.7-.8L3 21l1.9-5.7A8.3 8.3 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" />
  </Base>
)

export const IconMapPin = (p) => (
  <Base {...p}>
    <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
)

export const IconGraduationCap = (p) => (
  <Base {...p}>
    <path d="M2 9l10-5 10 5-10 5-10-5z" />
    <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </Base>
)

export const IconBook = (p) => (
  <Base {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2V5z" />
    <path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2V5z" />
  </Base>
)

export const IconCode = (p) => (
  <Base {...p}>
    <polyline points="9,7 4,12 9,17" />
    <polyline points="15,7 20,12 15,17" />
  </Base>
)
