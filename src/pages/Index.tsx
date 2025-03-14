
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { UploadSection } from '../components/scanner/UploadSection';
import { ResultsDisplay } from '../components/scanner/ResultsDisplay';
import { ReportSection } from '../components/scanner/ReportSection';
import { ScanProvider } from '../context/ScanContext';
import { ThemeProvider } from '../context/ThemeContext';
import { ToggleTheme } from '../components/ui/ToggleTheme';
import { Shield, Scan, Code, BrainCircuit, FileCode, Database } from 'lucide-react';

const Index = () => {
  return (
    <ThemeProvider>
      <ScanProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          
          <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-scanner-blue-100 dark:bg-scanner-blue-900/30 p-4 rounded-full inline-flex items-center justify-center mb-6">
                    <Shield className="h-10 w-10 text-scanner-blue-600 dark:text-scanner-blue-400" />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                    <span className="blue-gradient-text">SHADOWSCAN</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl max-w-3xl text-slate-700 dark:text-slate-300 mb-8">
                    Powerful AI-driven vulnerability scanning to keep your code secure. Upload your code and get instant security analysis.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <a href="#upload" className="px-6 py-3 bg-scanner-blue-600 hover:bg-scanner-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center">
                      <Scan className="mr-2 h-5 w-5" />
                      Start Scanning
                    </a>
                    <button className="px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium rounded-lg transition-colors duration-200 flex items-center">
                      <Code className="mr-2 h-5 w-5" />
                      Start Demo
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-scanner-blue-100 dark:bg-scanner-blue-900/20 rounded-full filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-scanner-blue-50 dark:bg-scanner-blue-900/10 rounded-full filter blur-3xl opacity-40"></div>
              </div>
            </section>
            
            {/* Features Section */}
            <section className="py-12 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-card transition-all duration-300">
                    <div className="p-3 bg-scanner-blue-50 dark:bg-scanner-blue-900/20 rounded-full mb-4">
                      <FileCode className="h-7 w-7 text-scanner-blue-600 dark:text-scanner-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Easy Code Upload</h3>
                    <p className="text-slate-600 dark:text-slate-400">Drag-and-drop your code files for instant vulnerability scanning.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-card transition-all duration-300">
                    <div className="p-3 bg-scanner-blue-50 dark:bg-scanner-blue-900/20 rounded-full mb-4">
                      <Scan className="h-7 w-7 text-scanner-blue-600 dark:text-scanner-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Detailed Analysis</h3>
                    <p className="text-slate-600 dark:text-slate-400">Get comprehensive reports with line-by-line vulnerability detection.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-card transition-all duration-300">
                    <div className="p-3 bg-scanner-blue-50 dark:bg-scanner-blue-900/20 rounded-full mb-4">
                      <BrainCircuit className="h-7 w-7 text-scanner-blue-600 dark:text-scanner-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">AI-Powered Fixes</h3>
                    <p className="text-slate-600 dark:text-slate-400">Receive intelligent suggestions to patch vulnerabilities immediately.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Scanner Section */}
            <section id="upload" className="py-16 sm:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Scan Your Code
                  </h2>
                  <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
                    Upload your files to identify vulnerabilities and get AI-powered solutions.
                  </p>
                </div>
                
                <UploadSection />
                <ResultsDisplay />
                <ReportSection />
              </div>
            </section>
            
            {/* FAQ/Help Section */}
            <section className="py-16 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
                    Learn how to get the most out of SHADOWSCAN
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      What file types can I scan?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      SHADOWSCAN supports a wide range of file types including JavaScript, TypeScript, Python, Java, Go, Ruby, PHP, HTML, CSS, and more.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      How accurate are the AI suggestions?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Our AI suggestions are highly accurate and based on the latest security best practices. However, we recommend reviewing them before implementation.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      Is my code secure when uploaded?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Yes! Your code is processed securely and not stored permanently. We use encryption to protect your intellectual property.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      What is the maximum file size?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      The maximum file size is 10MB per file. For larger codebases, we recommend scanning files individually or contacting us for enterprise solutions.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <a href="#" className="text-scanner-blue-600 dark:text-scanner-blue-400 hover:underline flex items-center justify-center">
                    View all FAQs
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </main>
          
          <Footer />
          
          {/* Theme Toggle - Fixed Position */}
          <div className="fixed bottom-6 right-6 z-50">
            <ToggleTheme />
          </div>
        </div>
      </ScanProvider>
    </ThemeProvider>
  );
};

export default Index;
