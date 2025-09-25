import React from 'react';

interface TermsAndConditionsProps {
  onBack: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-8 md:p-12 animate-fade-in">
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-h1:text-4xl prose-h1:font-bold prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-blue-600 prose-h1:to-indigo-700 prose-h1:pb-4 prose-h2:border-b prose-h2:border-slate-200 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 transition-colors">
        
        <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 font-semibold mb-8 no-underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm">&larr; Back to Counter</button>

        <h1>Terms and Conditions</h1>
        <p><strong>Last Updated:</strong> July 26, 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Character & Word Counter website (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use our Service. These Terms constitute a legally binding agreement between you and the operators of Character & Word Counter.</p>
        
        <h2>2. Description of Service</h2>
        <p>Character & Word Counter provides a free, online tool for analyzing text. The Service calculates various metrics, including character count (with and without spaces), word count, paragraph count, and line count. The tool operates entirely within your browser, ensuring that the text you input is not stored or transmitted to our servers. The Service is provided "as is" and is intended for informational purposes only.</p>

        <h2>3. User Conduct and Responsibilities</h2>
        <p>You agree to use the Service only for lawful purposes. You are solely responsible for the content you choose to analyze with our tool. You must not use the Service to:</p>
        <ul>
            <li>Analyze any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
            <li>Input any content that infringes upon any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</li>
            <li>Attempt to gain unauthorized access to our systems or engage in any activity that disrupts, diminishes the quality of, interferes with the performance of, or impairs the functionality of the Service.</li>
            <li>Use any automated means, including spiders, robots, crawlers, or data mining tools, to download, scrape, or extract data from our Service, other than the functionality we provide.</li>
        </ul>
        <p>We are not responsible for the consequences of your use of the tool, and you assume all risks associated with the text you process.</p>
        
        <h2>4. Intellectual Property Rights</h2>
        <p>All content on this website, including but not limited to text, graphics, logos, icons, images, and the compilation thereof, as well as the software used on the site, is the property of Character & Word Counter or its suppliers and is protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or lease any part of our Service or included software, nor may you reverse engineer or attempt to extract the source code of that software.</p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>The Service is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, or materials included therein. You expressly agree that your use of the Service is at your sole risk. For a more detailed explanation, please review our separate <a href="#" onClick={(e) => { e.preventDefault(); onBack(); /* a bit of a hack to switch view */ const el = document.querySelector('[aria-label="View Disclaimer"]'); if (el instanceof HTMLElement) el.click(); }}>Disclaimer page</a>.</p>

        <h2>6. Limitation of Liability</h2>
        <p>In no event shall Character & Word Counter, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>

        <h2>7. Indemnification</h2>
        <p>You agree to defend, indemnify, and hold harmless Character & Word Counter and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.</p>
        
        <h2>8. Third-Party Links</h2>
        <p>Our Service may contain links to third-party websites or services that are not owned or controlled by Character & Word Counter, primarily through advertisements. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the website operator is based, without regard to its conflict of law provisions.</p>

        <h2>10. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect by updating the "Last Updated" date at the top of this page. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@characterwordcounter.com">legal@characterwordcounter.com</a>.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;