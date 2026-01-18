import {Heart} from "lucide-react";

export function Header() {
  return (
      <header
          className="sticky top-0 z-50 w-full border-b border-rose-100/50 backdrop-blur supports-[backdrop-filter]:bg-[#ffd1d9]/60"
          style={{ backgroundColor: '#ffd1d9' }}>
        <div
            className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-rose-500 fill-rose-500"/>
            <h1 className="text-2xl font-bold">JOHANNA <span className="font-mirabella">and</span> JONAS</h1>
          </div>
        </div>
      </header>
  );
}
