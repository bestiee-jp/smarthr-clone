import Link from 'next/link';
import Image from 'next/image';

export default function BestieeLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.webp"
        alt="bestiee"
        width={180}
        height={50}
        style={{ height: 'auto' }}
        priority
      />
    </Link>
  );
}
