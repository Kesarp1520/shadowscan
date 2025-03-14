
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, Book, Server, Shield, Terminal, 
  Database, FileJson, Lock, Users, Layout 
} from 'lucide-react';

const Documentation = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Documentation
                </h1>
                <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
                  Comprehensive guides and API references for using SHADOWSCAN in your projects.
                </p>
              </div>
              
              <div className="mt-8">
                <Tabs defaultValue="getting-started" className="w-full">
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                    <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                    <TabsTrigger value="api-reference">API Reference</TabsTrigger>
                    <TabsTrigger value="integrations">Integrations</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="getting-started" className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <Book className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Introduction</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          SHADOWSCAN is an advanced AI-powered vulnerability scanner that helps you identify and fix security issues in your codebase. This guide will walk you through the basics of setting up and using SHADOWSCAN.
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <Terminal className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Installation</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          Install SHADOWSCAN CLI using npm:
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-4 font-mono text-sm">
                          npm install -g shadowscan-cli
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <Layout className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Basic Usage</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          Run a basic scan on your project:
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-4 font-mono text-sm">
                          shadowscan scan ./my-project
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mt-4">
                          This will analyze your codebase and generate a report of potential vulnerabilities.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="api-reference" className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <Server className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">REST API</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          SHADOWSCAN provides a comprehensive REST API for integration with your existing tools and workflows.
                        </p>
                        <div className="border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
                          <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                            <code className="text-slate-900 dark:text-slate-300">POST /api/v1/scan</code>
                          </div>
                          <div className="p-4">
                            <p className="text-slate-700 dark:text-slate-300 mb-2">
                              Initiates a security scan on the provided codebase.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Requires authentication token in the Authorization header.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <FileJson className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Response Format</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          All API responses follow a standard JSON format:
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-4 font-mono text-sm">
                          {`{
  "status": "success",
  "data": { ... },
  "meta": {
    "timestamp": "2023-07-15T08:30:00Z",
    "version": "1.0.0"
  }
}`}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="integrations" className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <Code className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">CI/CD Integration</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          SHADOWSCAN can be easily integrated into your CI/CD pipeline to automatically scan your code for vulnerabilities on every commit or pull request.
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">GitHub Actions</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Integrate SHADOWSCAN into your GitHub workflow to scan code automatically.
                            </p>
                          </div>
                          <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Jenkins</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Add SHADOWSCAN as a step in your Jenkins pipeline for continuous security scanning.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <Database className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Third-Party Integrations</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          SHADOWSCAN integrates with popular development and security tools:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                          <li>Jira for issue tracking</li>
                          <li>Slack for notifications</li>
                          <li>VS Code and IntelliJ IDEA plugins</li>
                          <li>Docker and Kubernetes for container scanning</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="security" className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <Shield className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Security Standards</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          SHADOWSCAN evaluates your code against industry-standard security frameworks and best practices:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                          <li>OWASP Top 10</li>
                          <li>CWE/SANS Top 25</li>
                          <li>NIST Cybersecurity Framework</li>
                          <li>SOC 2 Compliance</li>
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <Lock className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Data Privacy</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          We take data privacy seriously. Your code is processed securely, and we do not store your source code after analysis. All communications are encrypted using TLS 1.3, and our systems comply with GDPR and CCPA requirements.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="examples" className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <Users className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Use Cases</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                              Pre-Deployment Scanning
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Scan your application before deploying to production to catch vulnerabilities early.
                            </p>
                          </div>
                          <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                              Continuous Monitoring
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Set up regular scans to continuously monitor your application for new security issues.
                            </p>
                          </div>
                          <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                              Open Source Audit
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Audit your dependencies for known vulnerabilities and security risks.
                            </p>
                          </div>
                          <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                              Security Compliance
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Generate reports for security compliance audits and certifications.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-4">
                          <Code className="mr-2 h-5 w-5 text-scanner-blue-600" />
                          <h3 className="text-xl font-medium text-slate-900 dark:text-white">Code Examples</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          Example of using the SHADOWSCAN JavaScript SDK:
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-4 font-mono text-sm">
                          {`import { Scanner } from 'shadowscan';

const scanner = new Scanner({
  apiKey: 'your-api-key',
  project: 'my-project'
});

// Start a scan
scanner.scan('./src')
  .then(result => {
    console.log(\`Found \${result.vulnerabilities.length} vulnerabilities\`);
    
    // Process results
    result.vulnerabilities.forEach(vuln => {
      console.log(\`[\${vuln.severity}] \${vuln.title} in \${vuln.location}\`);
    });
  })
  .catch(error => {
    console.error('Scan failed:', error);
  });`}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Documentation;
