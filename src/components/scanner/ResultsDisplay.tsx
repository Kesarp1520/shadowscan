
import React, { useState } from 'react';
import { AlertTriangle, ArrowDown, ArrowUp, Filter, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useScan, Vulnerability, SeverityLevel } from '../../context/ScanContext';
import { AISuggestions } from './AISuggestions';

export const ResultsDisplay: React.FC = () => {
  const { vulnerabilities, filteredSeverity, setSeverityFilter, viewingCode } = useScan();
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({ 
    key: 'severity', 
    direction: 'desc' 
  });
  const [expandedVul, setExpandedVul] = useState<string | null>(null);

  if (vulnerabilities.length === 0) {
    return null;
  }

  const filteredVulnerabilities = filteredSeverity === 'all'
    ? vulnerabilities
    : vulnerabilities.filter(vul => vul.severity === filteredSeverity);

  const sortedVulnerabilities = [...filteredVulnerabilities].sort((a, b) => {
    if (sortConfig.key === 'severity') {
      const severityOrder = { high: 3, medium: 2, low: 1 };
      const aValue = severityOrder[a.severity as SeverityLevel];
      const bValue = severityOrder[b.severity as SeverityLevel];
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    if (sortConfig.key === 'name') {
      return sortConfig.direction === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    
    if (sortConfig.key === 'fileName') {
      return sortConfig.direction === 'asc'
        ? a.fileName.localeCompare(b.fileName)
        : b.fileName.localeCompare(a.fileName);
    }
    
    if (sortConfig.key === 'lineNumber') {
      return sortConfig.direction === 'asc'
        ? a.lineNumber - b.lineNumber
        : b.lineNumber - a.lineNumber;
    }
    
    return 0;
  });

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSeverityBadge = (severity: SeverityLevel) => {
    switch (severity) {
      case 'high':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300">
            <AlertCircle className="h-3 w-3 mr-1" />
            High
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Medium
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300">
            <Info className="h-3 w-3 mr-1" />
            Low
          </span>
        );
      default:
        return null;
    }
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
    }
    return null;
  };

  const toggleVulnerability = (id: string) => {
    setExpandedVul(expandedVul === id ? null : id);
  };

  return (
    <div className="mt-8 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
              Scan Results
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300">
                {vulnerabilities.length} {vulnerabilities.length === 1 ? 'issue' : 'issues'} found
              </span>
            </h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Filter className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                </div>
                <select
                  value={filteredSeverity}
                  onChange={(e) => setSeverityFilter(e.target.value as SeverityLevel | 'all')}
                  className="bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-scanner-blue-500 focus:border-scanner-blue-500 block w-full pl-10 p-2.5"
                >
                  <option value="all">All Severities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table view of vulnerabilities */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('severity')}>
                  <div className="flex items-center space-x-1">
                    <span>Severity</span>
                    {getSortIcon('severity')}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('name')}>
                  <div className="flex items-center space-x-1">
                    <span>Vulnerability</span>
                    {getSortIcon('name')}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('fileName')}>
                  <div className="flex items-center space-x-1">
                    <span>File</span>
                    {getSortIcon('fileName')}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('lineNumber')}>
                  <div className="flex items-center space-x-1">
                    <span>Line</span>
                    {getSortIcon('lineNumber')}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
              {sortedVulnerabilities.map((vul) => (
                <React.Fragment key={vul.id}>
                  <tr className={`hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${expandedVul === vul.id ? 'bg-slate-50 dark:bg-slate-700/50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getSeverityBadge(vul.severity)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">{vul.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-700 dark:text-slate-300 font-mono">{vul.fileName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-700 dark:text-slate-300">{vul.lineNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => toggleVulnerability(vul.id)}
                        className="text-scanner-blue-600 dark:text-scanner-blue-400 hover:text-scanner-blue-800 dark:hover:text-scanner-blue-300"
                      >
                        {expandedVul === vul.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </td>
                  </tr>
                  
                  {expandedVul === vul.id && (
                    <tr className="bg-slate-50 dark:bg-slate-700/20">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Description</h3>
                          <p className="text-slate-700 dark:text-slate-300">{vul.description}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Vulnerable Code</h3>
                          <div className="code-block">
                            <pre className="text-slate-800 dark:text-slate-200">{vul.code}</pre>
                          </div>
                        </div>
                        
                        <AISuggestions vulnerability={vul} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
