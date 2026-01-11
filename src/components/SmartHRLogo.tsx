import Link from 'next/link';

export default function SmartHRLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* S icon in circle */}
      <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#00C4CC"/>
        <path
          d="M20.5 10C16.5 10 14 12 14 14.8C14 17.8 16.5 19 20 19.8C23 20.5 24 21.2 24 22.5C24 24 22.5 25 20 25C17 25 15.5 23.5 15.2 21.5H11.5C11.8 25.5 15 28.5 20 28.5C24.5 28.5 27.5 26 27.5 22.3C27.5 19 25 17.5 21 16.7C18.2 16.1 17 15.5 17 14.3C17 13 18.3 12 20.3 12C22.5 12 24 13.2 24.3 15H28C27.5 11.5 24.5 10 20.5 10Z"
          fill="white"
        />
      </svg>
      {/* SmartHR text */}
      <span className="text-[#00C4CC] font-bold text-[28px] tracking-tight">SmartHR</span>
    </Link>
  );
}
