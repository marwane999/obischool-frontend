import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-6 text-[150px] font-bold text-[#D4A843] leading-none md:text-[200px]">404</div>
        <h1 className="mb-4 text-3xl font-bold text-[#1B3A5C] md:text-4xl">الصفحة غير موجودة</h1>
        <p className="mb-8 text-lg text-[#6B7280]">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#1B3A5C] px-8 py-4 font-semibold text-white transition-all hover:bg-[#0F2440] hover:shadow-lg"
        >
          <Home className="h-5 w-5" />
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}
