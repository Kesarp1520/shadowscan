
import React, { useState } from 'react';
import { FileJson, FileText, Share, Download, Mail } from 'lucide-react';
import { useScan } from '../../context/ScanContext';
import { Button } from '../ui/button';

export const ReportSection: React.FC = () => {
  const { vulnerabilities, selectedFile } = useScan();
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportFormat, setReportFormat] = useState<'pdf' | 'json'>('pdf');
  const [reportReady, setReportReady] = useState(false);

  if (vulnerabilities.length === 0) {
    return null;
  }

  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      setReportReady(true);
    }, 1500);
  };

  const handleDownload = () => {
    // In a real app, this would trigger the download of the generated report
    console.log(`Downloading ${reportFormat} report`);
    // Show success toast
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog or copy a link
    console.log('Sharing report');
    // Show success toast
  };

  const handleEmailReport = () => {
    // In a real app, this would open an email dialog or form
    console.log('Emailing report');
    // Show success toast
  };

  return (
    <div className="mt-12 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
            Report Generation
          </h2>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-2/3 space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Generate a comprehensive report of all vulnerabilities found in {selectedFile?.name}. You can download the report or share it directly.
              </p>
              
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reportFormat"
                    className="form-radio text-scanner-blue-600"
                    checked={reportFormat === 'pdf'}
                    onChange={() => setReportFormat('pdf')}
                  />
                  <span className="text-slate-700 dark:text-slate-300 flex items-center">
                    <FileText className="mr-1 h-4 w-4" /> PDF
                  </span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reportFormat"
                    className="form-radio text-scanner-blue-600"
                    checked={reportFormat === 'json'}
                    onChange={() => setReportFormat('json')}
                  />
                  <span className="text-slate-700 dark:text-slate-300 flex items-center">
                    <FileJson className="mr-1 h-4 w-4" /> JSON
                  </span>
                </label>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              {!reportReady ? (
                <Button
                  onClick={handleGenerateReport}
                  disabled={isGenerating}
                  className="w-full md:w-auto"
                >
                  {isGenerating ? (
                    <>
                      <div className="loading-dots">
                        <span className="animate-loading-dots"></span>
                        <span className="animate-loading-dots-2"></span>
                        <span className="animate-loading-dots-3"></span>
                      </div>
                      <span className="ml-2">Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Generate Report
                    </>
                  )}
                </Button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleDownload} variant="default">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button onClick={handleShare} variant="outline">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button onClick={handleEmailReport} variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
