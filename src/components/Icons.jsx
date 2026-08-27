import React from "react";

const IconBase = ({ children, size = 22, className = "", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const ArrowRight = (props) => <IconBase {...props}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></IconBase>;
export const MapPin = (props) => <IconBase {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></IconBase>;
export const Phone = (props) => <IconBase {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></IconBase>;
export const Instagram = (props) => <IconBase {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></IconBase>;
export const Building = (props) => <IconBase {...props}><path d="M4 21h16"/><path d="M6 21V7l6-4 6 4v14"/><path d="M9 9h.01"/><path d="M12 9h.01"/><path d="M15 9h.01"/><path d="M9 13h.01"/><path d="M12 13h.01"/><path d="M15 13h.01"/><path d="M10 21v-4h4v4"/></IconBase>;
export const Wrench = (props) => <IconBase {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-3-3 2.5-2.5Z"/></IconBase>;
export const Users = (props) => <IconBase {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></IconBase>;
export const Clipboard = (props) => <IconBase {...props}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2"/><path d="m9 13 2 2 4-4"/></IconBase>;
export const Menu = (props) => <IconBase {...props}><path d="M4 7h16M4 12h16M4 17h16"/></IconBase>;
export const X = (props) => <IconBase {...props}><path d="m6 6 12 12M18 6 6 18"/></IconBase>;
export const ChevronLeft = (props) => <IconBase {...props}><path d="m15 18-6-6 6-6"/></IconBase>;
export const ChevronRight = (props) => <IconBase {...props}><path d="m9 18 6-6-6-6"/></IconBase>;
