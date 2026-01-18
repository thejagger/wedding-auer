export function Footer() {
  return (
      <footer className="border-t border-rose-100/50" style={{ backgroundColor: '#ef6235' }}>
        <div className="max-w-5xl mx-auto">
          <div
              className="flex flex-col items-center justify-center gap-4 px-4 py-8 md:flex-row">
            <p className="text-sm text-white">
              © 2026 Jakob Auer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}
