import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Shoe } from '../lib/icons';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
}

export function Header({ onSearchChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange?.(e.target.value);
  };

  return (
    <header className="sticky top-0 z-40 bg-black border-b border-zinc-800 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Shoe className="w-8 h-8 text-lime-400" />
            <span className="text-2xl font-bold text-white tracking-tight">STRIDE</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors">
                Men
              </a>
              <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors">
                Women
              </a>
              <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors">
                Collections
              </a>
              <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors">
                Sale
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search shoes, brands..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 pl-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-900">
          <nav className="flex flex-col gap-3 px-4 py-4">
            <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors py-2">
              Men
            </a>
            <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors py-2">
              Women
            </a>
            <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors py-2">
              Collections
            </a>
            <a href="#" className="text-sm text-zinc-300 hover:text-lime-400 transition-colors py-2">
              Sale
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
