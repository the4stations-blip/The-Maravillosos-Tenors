// SVG Icons as React components - Fallback for Material Symbols
import React from 'react';

interface IconProps {
    className?: string;
}

export const ArrowBackIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
);

export const ArrowForwardIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
);

export const PlayArrowIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

export const TouchAppIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.79 9.24V5.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v3.74c1.21-.81 2-2.18 2-3.74 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.56.79 2.93 2 3.74zm5.5 2.47c-.28-.14-.58-.21-.89-.21h-.61v-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.74l-3.44-.72c-.37-.08-.76.04-1.03.31-.43.44-.43 1.14 0 1.58l4.01 4.01c.38.37.89.58 1.42.58h6.1c1 0 1.84-.73 1.98-1.72l.63-4.47c.12-.85-.32-1.69-1.09-2.07l-4.08-2.03z" />
    </svg>
);

export const ArrowUpwardIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

export const PhotoCameraIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </svg>
);

export const TheaterComedyIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 16.5C2 19.54 4.46 22 7.5 22s5.5-2.46 5.5-5.5V10H2v6.5zm5.5 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM11 3v6h2V3h9v13c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1h-1.42c.24-.78.4-1.59.42-2.43L17 12.57v-.57c0-.55-.45-1-1-1h-.42c-.17-.25-.37-.48-.58-.69V8H9V3h2z" />
    </svg>
);

export const SchoolIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.537 2.14.86 3.037.86h.001c3.181 0 5.768-2.586 5.768-5.766 0-1.298-.38-2.27-1.019-3.287l.711-2.592-2.654.696c-1.006-.537-2.14-.86-3.037-.86h-.001zm0 13c-2.348 0-4.341-.837-5.918-2.215l-4.56.974 1.205-4.481c-1.077-1.558-1.577-3.228-1.577-5.228 0-4.962 4.038-9 9-9 4.963 0 9 4.038 9 9 0 4.962-4.037 9-9 9zm2.5-4.5c-.328-.152-1.93-1.01-2.228-1.125-.3-.114-.52-.172-.74.172-.22.344-.852 1.01-1.042 1.22-.19.21-.38.232-.71.08-.33-.152-1.398-.515-2.664-1.644-.986-.878-1.651-1.963-1.841-2.293-.19-.328-.02-.505.145-.668.148-.147.33-.38.495-.572.164-.192.22-.328.33-.548.11-.22.055-.41-.027-.572-.083-.162-.74-1.782-1.013-2.44-.264-.634-.537-.55-.74-.56l-.63-.016c-.22 0-.575.08-.875.404-.3.324-1.145 1.119-1.145 2.729 0 1.61 1.173 3.165 1.334 3.385.161.22 2.308 3.525 5.592 4.942.782.337 1.392.539 1.868.69.79.252 1.512.216 2.085.131.636-.094 1.93-1.01 2.203-1.986.273-.976.273-1.812.192-1.986-.081-.174-.3-.274-.628-.426z" />
    </svg>
);
