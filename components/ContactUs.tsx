import React from 'react';

interface ContactUsProps {
  onBack: () => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-8 md:p-12 animate-fade-in">
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-h1:text-4xl prose-h1:font-bold prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-blue-600 prose-h1:to-indigo-700 prose-h1:pb-4 prose-h2:border-b prose-h2:border-slate-200 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 transition-colors">
        
        <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 font-semibold mb-8 no-underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm">&larr; Back to Counter</button>

        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Your feedback is invaluable in helping us improve the Character & Word Counter. Whether you have a question, a suggestion for a new feature, or have encountered a bug, please don’t hesitate to get in touch.</p>

        <h2>How to Reach Us</h2>
        <p>The best way to contact us is via email. We read every message and do our best to respond as quickly as possible.</p>
        
        <h3>General Inquiries & Feedback</h3>
        <p>For general questions, feedback, or feature suggestions, please email us at:</p>
        <p><a href="mailto:contact@characterwordcounter.example.com"><strong>contact@characterwordcounter.example.com</strong></a></p>
        
        <h3>Reporting a Bug</h3>
        <p>If you've found a bug or are experiencing a technical issue, please let us know. To help us resolve the issue quickly, please include the following information in your email if possible:</p>
        <ul>
            <li>A brief description of the problem.</li>
            <li>The steps you took that led to the issue.</li>
            <li>The web browser and operating system you are using (e.g., Chrome on Windows 11).</li>
        </ul>
        
        <p>Thank you for helping us make Character & Word Counter a better tool for everyone. We look forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default ContactUs;
