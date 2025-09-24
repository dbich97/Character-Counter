import React from 'react';

interface AboutUsProps {
  onBack: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-8 md:p-12 animate-fade-in">
      <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-h1:text-4xl prose-h1:font-bold prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-blue-600 prose-h1:to-indigo-700 prose-h1:pb-4 prose-h2:border-b prose-h2:border-slate-200 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 transition-colors">
        
        <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 font-semibold mb-8 no-underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm">&larr; Back to Counter</button>

        <h1>About Character & Word Counter</h1>
        <p>In a digital world driven by communication, every character counts. From a student’s essay to a marketer’s ad copy, precision is the key to impact. Character & Word Counter was born from a simple need: to provide a fast, reliable, and user-friendly tool for anyone who works with text.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to empower writers, students, marketers, and professionals with a free and accessible tool that makes text analysis effortless. We believe that you shouldn't have to guess if your message fits within a platform's limits or if your article meets a required length. Our tool provides instant, accurate data to help you craft your content with confidence and precision, so you can focus on what truly matters—your message.</p>

        <h2>Who We Help</h2>
        <p>Our tool is designed for a diverse range of users, including:</p>
        <ul>
            <li><strong>Students & Academics:</strong> Effortlessly meet word count requirements for essays, reports, and dissertations without the stress of manual counting.</li>
            <li><strong>Writers & Content Creators:</strong> Optimize blog posts, articles, and scripts for SEO and reader engagement by tracking length and structure in real-time.</li>
            <li><strong>Social Media Managers:</strong> Craft the perfect posts for platforms like Twitter, Instagram, and Facebook by staying within strict character limits.</li>
            <li><strong>Marketers & SEO Specialists:</strong> Fine-tune ad copy, meta descriptions, and page titles to maximize visibility and click-through rates on search engines.</li>
        </ul>

        <h2>Our Commitment to You</h2>
        <p>We are committed to providing a high-quality service based on three core principles:</p>
        <ol>
            <li><strong>Accuracy:</strong> We continuously refine our algorithms to ensure the counts you see are as accurate as possible.</li>
            <li><strong>Simplicity:</strong> A great tool should be intuitive. Our clean, straightforward interface gives you the data you need without any clutter.</li>
            <li><strong>Privacy:</strong> Your text is your own. Our tool operates entirely within your browser. We do not save, store, or share any of the content you analyze. When you leave the page, your text is gone forever.</li>
        </ol>
        
        <p>Thank you for using Character & Word Counter. We're proud to be a part of your writing journey and are committed to keeping this tool 100% free and accessible to everyone.</p>
      </div>
    </div>
  );
};

export default AboutUs;
