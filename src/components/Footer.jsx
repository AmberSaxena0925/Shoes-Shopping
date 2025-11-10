import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Shoe } from '../lib/icons';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shoe className="w-6 h-6 text-lime-400" />
              <span className="text-xl font-bold text-white">STRIDE</span>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              Premium footwear for those who demand excellence in every step.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-zinc-800 hover:bg-lime-400 rounded-lg transition-colors text-white hover:text-black">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-800 hover:bg-lime-400 rounded-lg transition-colors text-white hover:text-black">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-800 hover:bg-lime-400 rounded-lg transition-colors text-white hover:text-black">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-800 hover:bg-lime-400 rounded-lg transition-colors text-white hover:text-black">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-lime-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>support@stride.com</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0 mt-1" />
                <span>123 Fashion Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 STRIDE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
