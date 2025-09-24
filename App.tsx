import React, { useState, useMemo, useCallback, useEffect } from 'react';
import CounterCard from './components/CounterCard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Disclaimer from './components/Disclaimer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const translations = {
  en: {
    title: 'Character & Word Counter',
    subtitle: 'Your real-time text analysis dashboard.',
    placeholder: 'Start typing...',
    charLimitLabel: 'Character Limit:',
    resetButton: 'Reset',
    copyButton: 'Copy',
    copiedButton: 'Copied!',
    labels: {
      characters: 'Characters',
      words: 'Words',
      paragraphs: 'Paragraphs',
      lines: 'Lines',
      woSpaces: 'W/O Spaces',
      remaining: 'Remaining',
    },
    cta: {
      title: 'Ready to Perfect Your Text?',
      subtitle: 'Stop guessing and start optimizing. Use our free tool to ensure your message is perfectly tailored for any platform.',
      button: 'Try our free Character & Word Counter now',
    },
    footer: 'Built with React & Tailwind CSS',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    termsAndConditions: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    article: {
      mainTitle: 'Master Your Message: The Ultimate Guide to Character and Word Counters',
      tocTitle: 'Table of Contents',
      toc: [
        'Why a Word and Character Counter is Essential',
        'Understanding the Metrics: More Than Just Numbers',
        'Optimizing Your Content by the Numbers',
        'Frequently Asked Questions (FAQ)',
      ],
      intro: "In a world driven by digital communication, every character counts. Whether you're a student drafting an essay, a marketer crafting the perfect ad copy, or a writer aiming for SEO-friendly content, precision is key. A <strong>Character & Word Counter</strong> is an indispensable <strong>online text analyzer</strong> that provides instant, accurate data about your writing. It goes beyond simple counting, offering insights that help you meet specific requirements, enhance readability, and maximize your impact across all platforms.",
      section1Title: 'Why a Word and Character Counter is Essential',
      section1p1: 'The need to <strong>count words and characters</strong> spans numerous professions and activities. Constraints are everywhere, from academic word limits to social media character caps. This tool empowers you to navigate these rules effortlessly, ensuring your message is both compliant and compelling.',
      section1h3a: 'For Students and Academics',
      section1p2: 'University and school assignments almost always come with strict word count requirements. Exceeding the limit can lead to penalties, while falling short may indicate a lack of depth. An accurate word counter ensures your essays, reports, and dissertations meet these precise criteria, allowing you to focus on the quality of your arguments rather than manual counting.',
      section1h3b: 'For Writers, Bloggers, and Content Creators',
      section1p3: "In the world of content marketing, word count is directly tied to SEO (Search Engine Optimization) and user engagement. While there's no magic number, data provides valuable guidance. For instance, studies by platforms like Medium show that articles with an average reading time of 7 minutes (around 1,600 words) capture the most attention [Source: Medium Data Lab]. Furthermore, search engines like Google tend to favor longer, in-depth content for competitive keywords. This online text analyzer helps you structure your articles to hit these strategic targets. For example, aiming for a 2,000-word blog post? Track your progress in real-time to ensure you develop your points sufficiently.",
      section1h3c: 'For Social Media Managers',
      section1p4: 'Each social media platform is a unique ecosystem with its own rules. A <strong>character counter</strong> is a daily necessity for social media professionals.',
      infographic: {
        twitter: { title: 'Twitter (X)', value: '280', desc: 'Characters per post. Ideal for brief, impactful updates and news.' },
        instagram: { title: 'Instagram', value: '2,200', desc: 'Characters for captions. First 125 are visible in the feed.' },
        facebook: { title: 'Facebook', value: '~63k', desc: 'Characters per post. Posts under 80 chars get more engagement.' },
        linkedin: { title: 'LinkedIn', value: '3,000', desc: 'Characters per post. Ideal for professional insights and articles.' },
      },
      section1p5: "Here's a breakdown:",
      section1list: [
        '<strong>Twitter (X):</strong> Famously strict with its 280-character limit per tweet. A counter is non-negotiable for crafting concise, powerful messages.',
        '<strong>Instagram:</strong> Captions can be up to 2,200 characters, but only the first 125 characters are visible in the user\'s feed without tapping "more." A counter helps you put the most important information first.',
        '<strong>Facebook:</strong> While posts can be very long (over 60,000 characters), research shows that posts between 40 and 80 characters receive 86% more engagement [Source: HubSpot Analytics]. Brevity is often better.',
      ],
      section1h3d: 'For Marketers and SEO Specialists',
      section1p6: 'Precision is paramount in marketing. SEO page titles and meta descriptions have character limits that influence how they appear in search results. A title tag is typically truncated after 60 characters, and a meta description after about 160 characters. Using a character counter ensures your message is fully visible on Google, maximizing your click-through rate.',
      section2Title: 'Understanding the Metrics: More Than Just Numbers',
      section2p1: 'Our tool provides a comprehensive suite of metrics to give you a full picture of your text.',
      section2list: [
        '<strong>Characters (with spaces):</strong> The total count of all characters, including letters, numbers, symbols, and spaces. This is the metric used by platforms like Twitter.',
        '<strong>Characters (without spaces):</strong> This count excludes all spaces, useful for certain data processing tasks or specific content constraints.',
        '<strong>Words:</strong> The total number of words, crucial for academic and long-form content.',
        '<strong>Paragraphs:</strong> Helps you analyze the structure of your text. Shorter paragraphs are easier to read on screens, improving user experience. A wall of text can be intimidating; seeing a high paragraph count often means your text is well-structured and scannable.',
        '<strong>Lines:</strong> Counts the number of line breaks, which is particularly useful for poets, developers writing code comments, or anyone formatting text for specific displays.',
      ],
      section3Title: 'Optimizing Your Content by the Numbers',
      section3p1: "Let's look at some practical examples.",
      section3h3a: 'Example 1: Crafting the Perfect Tweet',
      section3p2: 'You want to post: "Our new blog post is live! We dive deep into the best SEO strategies for 2024, featuring expert tips and case studies. Check it out here: [link]". Pasting this into our character counter reveals it is 195 characters long. This fits comfortably within Twitter\'s 280-character limit, leaving room to add relevant hashtags like #SEO #ContentMarketing to increase visibility.',
      section3h3b: 'Example 2: Writing a Blog Post',
      section3p3: "You're writing a blog post about the benefits of remote work. Your target is 1,500 words. Using the word counter, you find you're at 800 words. This tells you that you need to elaborate more on your points, perhaps by adding a section with statistics on productivity or a case study of a successful remote company. Studies by the Nielsen Norman Group show that 55% of readers prefer concise posts, but \"concise\" for a complex topic might still be over 1,000 words. The tool helps you balance depth with readability.",
      faqTitle: 'Frequently Asked Questions (FAQ)',
    },
    faq: [
        { q: 'What is a character counter used for?', a: 'A character counter is a tool that calculates the exact number of characters in a piece of text. It\'s essential for meeting the specific length requirements of social media platforms (like Twitter), search engine snippets (meta descriptions), ad copy, and any other medium with a strict character limit.' },
        { q: 'How many characters are in a tweet?', a: 'A standard tweet on X (formerly Twitter) is limited to 280 characters. This includes all letters, numbers, symbols, punctuation, and spaces. Links and images also take up a certain number of characters, which the platform calculates automatically.' },
        { q: 'What’s the difference between characters with spaces and without spaces?', a: '"Characters with spaces" is the total count of every single keystroke, including the spacebar. This is the most common metric used for character limits. "Characters without spaces" excludes all whitespace, giving you a count of only the visible letters, numbers, and symbols. This latter metric is less common but can be useful in specific data analysis or programming contexts.' },
        { q: 'How many words should a blog post have for good SEO?', a: 'There is no single perfect number, as it depends heavily on the topic, industry, and user intent. However, data suggests that longer, more comprehensive content tends to rank better. A common recommendation for competitive topics is between 1,500 and 2,500 words. Shorter posts (around 1,000 words) can work well for simpler topics or news updates. The key is to provide the most complete and valuable answer to the user\'s query.' },
        { q: 'Why is word count important for students?', a: 'For students, word count is a critical part of assignment guidelines. It serves as a benchmark for the expected depth and detail of the work. Meeting the word count (without padding) shows that you have thoroughly researched the topic and can express your ideas comprehensively, while adhering to the assignment\'s constraints demonstrates discipline and attention to detail.' },
        { q: 'Does this online text analyzer save my data?', a: 'Absolutely not. Your privacy is paramount. This tool operates entirely within your browser. The text you paste here is not sent to or stored on any server. Once you close the page, your text is gone forever. You can use it with complete confidence that your information remains private and secure.' },
    ],
  },
};

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [charLimit, setCharLimit] = useState<number>(500);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [view, setView] = useState<'home' | 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact'>('home');

  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  const handleTextChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }, []);

  const handleLimitChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setCharLimit(isNaN(newLimit) || newLimit < 0 ? 0 : newLimit);
  }, []);

  const handleReset = useCallback(() => {
    setText('');
  }, []);
  
  const handleCopy = useCallback(() => {
    if (!text || isCopied) return;
    navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    });
  }, [text, isCopied]);

  const handleScrollToTop = useCallback(() => {
    setView('home');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }, []);
  
  const handleShowHome = useCallback(() => setView('home'), []);
  const handleShowPrivacy = useCallback(() => setView('privacy'), []);
  const handleShowTerms = useCallback(() => setView('terms'), []);
  const handleShowDisclaimer = useCallback(() => setView('disclaimer'), []);
  const handleShowAbout = useCallback(() => setView('about'), []);
  const handleShowContact = useCallback(() => setView('contact'), []);

  const t = translations.en;

  const stats = useMemo(() => {
    const charCountWithSpaces = text.length;
    const charCountWithoutSpaces = text.replace(/\s/g, '').length;
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const paragraphCount = text ? text.split(/\n+/).filter(p => p.trim() !== '').length : 0;
    const lineCount = text ? text.split('\n').length : 0;
    const remainingChars = charLimit - charCountWithSpaces;
    return {
      charCountWithSpaces,
      charCountWithoutSpaces,
      wordCount,
      paragraphCount,
      lineCount,
      remainingChars,
    };
  }, [text, charLimit]);

  const progress = useMemo(() => charLimit > 0 ? (stats.charCountWithSpaces / charLimit) * 100 : 0, [stats.charCountWithSpaces, charLimit]);

  const progressColor = useMemo(() => {
    if (progress > 100) return 'bg-gradient-to-r from-red-600 to-rose-600';
    if (progress > 90) return 'bg-gradient-to-r from-red-500 to-rose-500';
    if (progress > 70) return 'bg-gradient-to-r from-yellow-400 to-orange-400';
    return 'bg-gradient-to-r from-blue-500 to-indigo-500';
  }, [progress]);

  const faqSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }), [t.faq]);

  const renderContent = () => {
    switch (view) {
      case 'privacy':
        return <PrivacyPolicy onBack={handleShowHome} />;
      case 'terms':
        return <TermsAndConditions onBack={handleShowHome} />;
      case 'disclaimer':
        return <Disclaimer onBack={handleShowHome} />;
      case 'about':
        return <AboutUs onBack={handleShowHome} />;
      case 'contact':
        return <ContactUs onBack={handleShowHome} />;
      case 'home':
      default:
        return (
          <>
            <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-6 md:p-10">
              <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                  {t.title}
                </h1>
                <p className="text-slate-500 mt-3 text-lg">{t.subtitle}</p>
              </header>

              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder={t.placeholder}
                className="w-full h-56 p-5 bg-slate-50 text-slate-800 border-2 border-slate-200 rounded-lg placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300 resize-y text-base"
                aria-label="Text input area"
              />

              <div className="mt-4 w-full bg-slate-200 rounded-full h-2.5">
                <div
                  className={`${progressColor} h-2.5 rounded-full transition-all duration-300`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  role="progressbar"
                  aria-valuenow={stats.charCountWithSpaces}
                  aria-valuemin={0}
                  aria-valuemax={charLimit}
                ></div>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <CounterCard label={t.labels.characters} value={stats.charCountWithSpaces} />
                <CounterCard label={t.labels.words} value={stats.wordCount} />
                <CounterCard label={t.labels.paragraphs} value={stats.paragraphCount} />
                <CounterCard label={t.labels.lines} value={stats.lineCount} />
                <CounterCard label={t.labels.woSpaces} value={stats.charCountWithoutSpaces} />
                <CounterCard 
                  label={t.labels.remaining} 
                  value={stats.remainingChars} 
                  valueClassName={stats.remainingChars < 0 ? 'text-red-600' : 'text-emerald-600'}
                />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <label htmlFor="charLimit" className="text-slate-700 font-medium">
                    {t.charLimitLabel}
                  </label>
                  <input
                    id="charLimit"
                    type="number"
                    value={charLimit}
                    onChange={handleLimitChange}
                    min="0"
                    className="w-28 bg-slate-100 border border-slate-300 rounded-md px-3 py-1.5 text-center focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
                
                <div className="flex w-full sm:w-auto items-center gap-3">
                  <button
                    onClick={handleCopy}
                    disabled={!text || isCopied}
                    aria-label="Copy text to clipboard"
                    className={`w-full px-6 py-2 flex items-center justify-center font-semibold rounded-lg shadow-sm transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500 ${
                      isCopied
                        ? 'bg-emerald-500 text-white cursor-default'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105'
                    } disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:scale-100`}
                  >
                    {isCopied ? t.copiedButton : t.copyButton}
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2 flex items-center justify-center bg-slate-200 hover:bg-red-600 text-slate-800 hover:text-white font-semibold rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
                  >
                    {t.resetButton}
                  </button>
                </div>
              </div>
            </div>

            <article className="mt-12 bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-8 md:p-12 prose prose-slate max-w-none prose-p:leading-relaxed prose-h2:text-3xl prose-h2:font-bold prose-h2:text-transparent prose-h2:bg-clip-text prose-h2:bg-gradient-to-r prose-h2:from-blue-600 prose-h2:to-indigo-700 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-200 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 transition-colors">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
              />
              <h2 id="intro">{t.article.mainTitle}</h2>
              
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg my-8">
                <h3 className="text-xl font-semibold !mt-0 !text-slate-800">{t.article.tocTitle}</h3>
                <ol className="list-decimal pl-5 mt-4 space-y-2">
                  <li><a href="#why-counters-are-essential">{t.article.toc[0]}</a></li>
                  <li><a href="#understanding-the-metrics">{t.article.toc[1]}</a></li>
                  <li><a href="#optimizing-content-by-the-numbers">{t.article.toc[2]}</a></li>
                  <li><a href="#frequently-asked-questions">{t.article.toc[3]}</a></li>
                </ol>
              </div>

              <p dangerouslySetInnerHTML={{ __html: t.article.intro }} />

              <h2 id="why-counters-are-essential">{t.article.section1Title}</h2>
              <p dangerouslySetInnerHTML={{ __html: t.article.section1p1 }} />

              <h3 className="!text-slate-800">{t.article.section1h3a}</h3>
              <p>{t.article.section1p2}</p>

              <h3 className="!text-slate-800">{t.article.section1h3b}</h3>
              <p>{t.article.section1p3}</p>

              <h3 className="!text-slate-800">{t.article.section1h3c}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.article.section1p4 }} />
              
              <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg shadow-md">
                    <h4 className="font-bold text-lg text-sky-800">{t.article.infographic.twitter.title}</h4>
                    <p className="text-3xl font-extrabold text-sky-600">{t.article.infographic.twitter.value}</p>
                    <p className="text-sm text-slate-600">{t.article.infographic.twitter.desc}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50 border-l-4 border-rose-500 p-4 rounded-r-lg shadow-md">
                    <h4 className="font-bold text-lg text-rose-800">{t.article.infographic.instagram.title}</h4>
                    <p className="text-3xl font-extrabold text-rose-600">{t.article.infographic.instagram.value}</p>
                    <p className="text-sm text-slate-600">{t.article.infographic.instagram.desc}</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg shadow-md">
                    <h4 className="font-bold text-lg text-blue-800">{t.article.infographic.facebook.title}</h4>
                    <p className="text-3xl font-extrabold text-blue-700">{t.article.infographic.facebook.value}</p>
                    <p className="text-sm text-slate-600">{t.article.infographic.facebook.desc}</p>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-r-lg shadow-md">
                    <h4 className="font-bold text-lg text-cyan-800">{t.article.infographic.linkedin.title}</h4>
                    <p className="text-3xl font-extrabold text-cyan-700">{t.article.infographic.linkedin.value}</p>
                    <p className="text-sm text-slate-600">{t.article.infographic.linkedin.desc}</p>
                </div>
              </div>
              
              <p>{t.article.section1p5}</p>
              <ul className="list-disc pl-5">
                {t.article.section1list.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>

              <h3 className="!text-slate-800">{t.article.section1h3d}</h3>
              <p>{t.article.section1p6}</p>

              <h2 id="understanding-the-metrics">{t.article.section2Title}</h2>
              <p>{t.article.section2p1}</p>
              <ul className="list-disc pl-5">
                 {t.article.section2list.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>

              <h2 id="optimizing-content-by-the-numbers">{t.article.section3Title}</h2>
              <p>{t.article.section3p1}</p>
              <h3 className="!text-slate-800">{t.article.section3h3a}</h3>
              <p>{t.article.section3p2}</p>
              <h3 className="!text-slate-800">{t.article.section3h3b}</h3>
              <p>{t.article.section3p3}</p>

              <h2 id="frequently-asked-questions">{t.article.faqTitle}</h2>
              <div className="space-y-8">
                {t.faq.map((item, index) => (
                  <div key={index} className="border-t border-slate-200 pt-8">
                    <h3 className="!text-slate-800 font-semibold text-lg">{item.q}</h3>
                    <p className="!mt-2 text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center bg-slate-50 p-8 rounded-xl border border-slate-200 not-prose">
                <h3 className="text-2xl font-bold text-slate-800">{t.cta.title}</h3>
                <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t.cta.subtitle}</p>
                <button 
                  onClick={handleScrollToTop}
                  className="mt-6 px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t.cta.button}
                </button>
              </div>
            </article>

            <footer className="text-center mt-8 py-6 border-t border-slate-200 text-slate-500 text-sm">
              <p>{t.footer}</p>
              <div className="mt-2 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                 <button onClick={handleShowAbout} className="text-indigo-600 hover:underline focus:outline-none" aria-label="View About Us page">
                  {t.aboutUs}
                </button>
                <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
                <button onClick={handleShowContact} className="text-indigo-600 hover:underline focus:outline-none" aria-label="View Contact Us page">
                  {t.contactUs}
                </button>
                 <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
                <button onClick={handleShowPrivacy} className="text-indigo-600 hover:underline focus:outline-none" aria-label="View Privacy Policy">
                  {t.privacyPolicy}
                </button>
                <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
                <button onClick={handleShowTerms} className="text-indigo-600 hover:underline focus:outline-none" aria-label="View Terms and Conditions">
                  {t.termsAndConditions}
                </button>
                <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
                <button onClick={handleShowDisclaimer} className="text-indigo-600 hover:underline focus:outline-none" aria-label="View Disclaimer">
                  {t.disclaimer}
                </button>
              </div>
            </footer>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-slate-800 flex items-center justify-center p-4">
      <main className="w-full max-w-3xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
