
import React, { createContext, useContext, useState } from 'react';

// Types for our vulnerability scanning
export type SeverityLevel = 'high' | 'medium' | 'low';

export interface Vulnerability {
  id: string;
  name: string;
  description: string;
  fileName: string;
  lineNumber: number;
  severity: SeverityLevel;
  code: string;
  aiSuggestion?: string;
  aiSuggestionLoading?: boolean;
}

interface ScanContextType {
  isScanning: boolean;
  scanProgress: number;
  vulnerabilities: Vulnerability[];
  selectedFile: File | null;
  viewingCode: boolean;
  filteredSeverity: SeverityLevel | 'all';
  startScan: (file: File) => void;
  resetScan: () => void;
  toggleViewCode: () => void;
  setSeverityFilter: (severity: SeverityLevel | 'all') => void;
  generateAISuggestion: (vulId: string) => void;
  provideFeedback: (vulId: string, helpful: boolean) => void;
}

const ScanContext = createContext<ScanContextType | undefined>(undefined);

// Mock data for demo purposes
const mockVulnerabilities: Vulnerability[] = [
  {
    id: 'vul-1',
    name: 'SQL Injection',
    description: 'Unsanitized user input used in SQL query',
    fileName: 'database.js',
    lineNumber: 42,
    severity: 'high',
    code: 'const query = `SELECT * FROM users WHERE id = ${userId}`;',
  },
  {
    id: 'vul-2',
    name: 'Insecure Direct Object Reference',
    description: 'Missing authorization check for resource access',
    fileName: 'routes.js',
    lineNumber: 87,
    severity: 'medium',
    code: 'app.get("/api/users/:id", (req, res) => {\n  const user = getUser(req.params.id);\n  res.json(user);\n});',
  },
  {
    id: 'vul-3',
    name: 'Cross-Site Scripting (XSS)',
    description: 'Unescaped user input rendered in HTML',
    fileName: 'profile.jsx',
    lineNumber: 23,
    severity: 'high',
    code: 'function ProfileHeader({ user }) {\n  return <div dangerouslySetInnerHTML={{ __html: user.bio }} />;\n}',
  },
  {
    id: 'vul-4',
    name: 'Insecure Cryptographic Storage',
    description: 'Passwords stored with weak hashing algorithm',
    fileName: 'auth.js',
    lineNumber: 115,
    severity: 'high',
    code: 'const hashedPassword = md5(password);',
  },
  {
    id: 'vul-5',
    name: 'Outdated Dependencies',
    description: 'Package with known vulnerabilities',
    fileName: 'package.json',
    lineNumber: 15,
    severity: 'low',
    code: '"dependencies": {\n  "outdated-package": "^1.0.0"\n}',
  },
];

// Mock AI suggestions for demo
const mockAISuggestions: Record<string, string> = {
  'vul-1': 'Use parameterized queries or prepared statements:\n\n```javascript\nconst query = "SELECT * FROM users WHERE id = ?";\ndb.execute(query, [userId]);\n```',
  'vul-2': 'Add authorization check before accessing the resource:\n\n```javascript\napp.get("/api/users/:id", authenticate, (req, res) => {\n  if (req.user.id !== req.params.id && !req.user.isAdmin) {\n    return res.status(403).json({ error: "Unauthorized" });\n  }\n  const user = getUser(req.params.id);\n  res.json(user);\n});\n```',
  'vul-3': 'Use a library to sanitize user input or avoid dangerouslySetInnerHTML:\n\n```javascript\nimport sanitizeHtml from "sanitize-html";\n\nfunction ProfileHeader({ user }) {\n  const sanitizedBio = sanitizeHtml(user.bio);\n  return <div className="bio">{sanitizedBio}</div>;\n}\n```',
  'vul-4': 'Use a secure password hashing function with salt:\n\n```javascript\nimport bcrypt from "bcrypt";\n\nconst saltRounds = 10;\nconst hashedPassword = await bcrypt.hash(password, saltRounds);\n```',
  'vul-5': 'Update the dependency to a patched version or find an alternative package:\n\n```json\n"dependencies": {\n  "updated-package": "^2.3.4"\n}\n```',
};

export const ScanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [viewingCode, setViewingCode] = useState(false);
  const [filteredSeverity, setFilteredSeverity] = useState<SeverityLevel | 'all'>('all');

  const startScan = (file: File) => {
    setSelectedFile(file);
    setIsScanning(true);
    setScanProgress(0);
    setVulnerabilities([]);
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            // Load mock vulnerabilities data
            setVulnerabilities(mockVulnerabilities);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const resetScan = () => {
    setSelectedFile(null);
    setIsScanning(false);
    setScanProgress(0);
    setVulnerabilities([]);
    setViewingCode(false);
  };

  const toggleViewCode = () => {
    setViewingCode(!viewingCode);
  };

  const setSeverityFilter = (severity: SeverityLevel | 'all') => {
    setFilteredSeverity(severity);
  };

  const generateAISuggestion = (vulId: string) => {
    // Find the vulnerability and update its loading state
    setVulnerabilities(prev => 
      prev.map(vul => 
        vul.id === vulId 
          ? { ...vul, aiSuggestionLoading: true } 
          : vul
      )
    );
    
    // Simulate API delay
    setTimeout(() => {
      setVulnerabilities(prev => 
        prev.map(vul => 
          vul.id === vulId 
            ? { 
                ...vul, 
                aiSuggestion: mockAISuggestions[vulId] || "No suggestion available for this vulnerability.",
                aiSuggestionLoading: false 
              } 
            : vul
        )
      );
    }, 1500);
  };

  const provideFeedback = (vulId: string, helpful: boolean) => {
    // In a real app, this would send feedback to the API
    console.log(`Feedback for ${vulId}: ${helpful ? 'Helpful' : 'Not Helpful'}`);
    // You could update state to show a thank you message or disable feedback buttons
  };

  return (
    <ScanContext.Provider
      value={{
        isScanning,
        scanProgress,
        vulnerabilities,
        selectedFile,
        viewingCode,
        filteredSeverity,
        startScan,
        resetScan,
        toggleViewCode,
        setSeverityFilter,
        generateAISuggestion,
        provideFeedback,
      }}
    >
      {children}
    </ScanContext.Provider>
  );
};

export const useScan = () => {
  const context = useContext(ScanContext);
  
  if (context === undefined) {
    throw new Error('useScan must be used within a ScanProvider');
  }
  
  return context;
};
