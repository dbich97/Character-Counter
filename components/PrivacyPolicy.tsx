
import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-8 md:p-12 animate-fade-in">
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-h1:text-4xl prose-h1:font-bold prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-blue-600 prose-h1:to-indigo-700 prose-h1:pb-4 prose-h2:border-b prose-h2:border-slate-200 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 transition-colors">
        
        <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 font-semibold mb-8 no-underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm">&larr; Back to Counter</button>

        <h1>Privacy Policy for Character & Word Counter</h1>
        <p><strong>Effective Date:</strong> July 26, 2024</p>

        <h2>1. Introduction</h2>
        <p>Welcome to Character & Word Counter ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy applies to the Character & Word Counter website and its online text analysis tool (the "Service") and governs our data collection, processing, and usage practices.</p>
        <p>The core principle of our Service is privacy by design. Our tool is engineered to perform all calculations and text analysis directly within your web browser on your device. <strong>We do not, and cannot, see, save, or store the text you enter into our counter.</strong> Your work remains your own, always.</p>
        <p>This policy explains what information is collected, why it is collected, and how you can control your information. By using our Service, you consent to the data practices described in this policy.</p>

        <h2>2. Information We Do Not Collect: Your Text Data</h2>
        <p>We want to be unequivocally clear about the data we do not collect. The primary function of our website is to provide a character and word counting tool. Any text, documents, or content you paste or type into the text area on our website is processed locally in your browser.</p>
        <ul>
            <li><strong>No Transmission:</strong> Your text is never sent over the internet to our servers.</li>
            <li><strong>No Storage:</strong> Your text is never stored in any database or log file on our servers.</li>
            <li><strong>No Access:</strong> We do not have any access to the content you analyze using our tool.</li>
        </ul>
        <p>Once you close your browser tab or navigate away from the page, the text you entered is permanently gone. Your privacy and the confidentiality of your content are paramount.</p>

        <h2>3. Information We Collect and Why</h2>
        <p>While we do not collect any personal data or content you analyze, we do collect a limited amount of non-personally identifiable information to maintain and improve our Service and to display advertising, which keeps our tool free to use. This data includes:</p>
        
        <h3>3.1. Log Data</h3>
        <p>Like most website operators, we collect standard, non-personally identifying information that web browsers and servers typically make available. This includes:</p>
        <ul>
            <li>Browser type (e.g., Chrome, Firefox)</li>
            <li>Language preference</li>
            <li>Referring site</li>
            <li>The date and time of each visitor request</li>
        </ul>
        <p>The purpose of collecting this information is to better understand how our visitors use the website, to diagnose technical problems, and to improve the overall functionality and user experience of our Service.</p>

        <h3>3.2. Cookies and Web Beacons</h3>
        <p>A cookie is a small string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. We use cookies to help us identify and track visitors, their usage of our Service, and their website access preferences.</p>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our Service may not function properly.</p>

        <h2>4. Third-Party Advertising and Google AdSense</h2>
        <p>Our website uses third-party advertising, including Google AdSense, to support our site and provide the Service free of charge. These advertisers may use technology such as cookies and web beacons when they advertise on our site, which will also send these advertisers information.</p>
        
        <h3>4.1. Google's Use of Cookies</h3>
        <p>Google, as a third-party vendor, uses cookies to serve ads on our Service. Specifically, Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our Service and/or other sites on the Internet. This is known as personalized or interest-based advertising.</p>
        <ul>
            <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.</li>
            <li>The DoubleClick cookie is used by Google in the ads served on the websites of its partners, such as websites displaying AdSense ads or participating in Google certified ad networks.</li>
        </ul>

        <h3>4.2. Opting Out of Personalized Advertising</h3>
        <p>We are committed to providing you with control over your data. You may opt out of personalized advertising by visiting Google's Ads Settings:</p>
        <p><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads</a></p>
        <p>Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting the Digital Advertising Alliance's opt-out portal at:</p>
        <p><a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices/</a></p>
        <p>If you opt out, you will still see ads, but they may not be tailored to your interests. For more information on how Google uses data when you use our partners' sites or apps, please visit:</p>
        <p><a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">www.google.com/policies/privacy/partners/</a></p>

        <h2>5. Data Security</h2>
        <p>We take reasonable precautions to protect the limited non-personal information we collect. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. As a reminder, the content you enter into our tool is never transmitted to us, providing an inherent layer of security for your most sensitive data.</p>

        <h2>6. Links to Other Websites</h2>
        <p>Our Service may contain links to other websites that are not operated by us, particularly within advertisements. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h2>7. Children's Privacy</h2>
        <p>Our Service is not intended for use by children under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under age 13 without verification of parental consent, we will take steps to remove that information from our servers.</p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. We will also update the "Effective Date" at the top of this Privacy Policy.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@characterwordcounter.example.com">privacy@characterwordcounter.example.com</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
