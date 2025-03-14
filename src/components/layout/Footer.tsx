
import React from 'react';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Shield className="h-7 w-7 text-scanner-blue-600 dark:text-scanner-blue-400" />
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                SHADOWSCAN
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Advanced AI-powered vulnerability scanner for your applications. Stay secure with automated code analysis.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-scanner-blue-600 dark:text-slate-400 dark:hover:text-scanner-blue-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-slate-500 hover:text-scanner-blue-600 dark:text-slate-400 dark:hover:text-scanner-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-500 hover:text-scanner-blue-600 dark:text-slate-400 dark:hover:text-scanner-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#scanner" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Scanner
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-scanner-blue-600 dark:hover:text-scanner-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-center text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} SHADOWSCAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
