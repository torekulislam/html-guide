import { createElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguage } from "../store/htmlSlice";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  Compass,
  FileCode2,
  Globe2,
  Layers3,
  Play,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "HTML",
    titleBn: "এইচটিএমএল",
    subtitle: "The structure of the web",
    subtitleBn: "ওয়েবের মূল কাঠামো",
    description: "Build a strong foundation with elements, semantic markup, and hands-on practice.",
    descriptionBn: "এলিমেন্ট, সেম্যান্টিক মার্কআপ ও হাতে-কলমে অনুশীলনে মজবুত ভিত্তি গড়ুন।",
    lessons: "12 lessons",
    lessonsBn: "১২টি পাঠ",
    to: "/html",
    theme: "module-html",
    Icon: FileCode2,
    available: true,
  },
  {
    number: "02",
    title: "CSS",
    titleBn: "সিএসএস",
    subtitle: "Make it look beautiful",
    subtitleBn: "দেখতে সুন্দর করে তুলুন",
    description: "Explore color, typography, layout, and responsive design for every screen.",
    descriptionBn: "রঙ, টাইপোগ্রাফি, লেআউট ও রেসপন্সিভ ডিজাইন শিখুন।",
    lessons: "Coming soon",
    lessonsBn: "শীঘ্রই আসছে",
    to: "/css",
    theme: "module-css",
    Icon: Layers3,
    available: false,
  },
  {
    number: "03",
    title: "JavaScript",
    titleBn: "জাভাস্ক্রিপ্ট",
    subtitle: "Bring your ideas to life",
    subtitleBn: "আপনার আইডিয়াকে প্রাণ দিন",
    description: "Add interaction, logic, and dynamic experiences to your websites.",
    descriptionBn: "আপনার ওয়েবসাইটে ইন্টারঅ্যাকশন, লজিক ও ডাইনামিক অভিজ্ঞতা যোগ করুন।",
    lessons: "Coming soon",
    lessonsBn: "শীঘ্রই আসছে",
    to: "/js",
    theme: "module-js",
    Icon: Zap,
    available: false,
  },
];

const copy = {
  EN: {
    nav: ["Explore", "Lessons", "About"],
    badge: "A friendly guide to the web",
    headlineA: "Make the web",
    headlineB: "make sense.",
    intro: "Learn to build for the web, one small step at a time. Clear lessons, real examples, and a little help in Bangla when you need it.",
    start: "Start with HTML",
    browse: "Explore the guide",
    note: "No experience needed · Learn at your own pace",
    outline: "Your learning path",
    outlineSub: "Three building blocks. One exciting journey.",
    learn: "What you’ll learn",
    learnText: "Everything you need to go from curious to creating.",
    item1: "Bite-sized lessons",
    item1d: "A clear path, one idea at a time.",
    item2: "Learn in two languages",
    item2d: "Switch between English and Bangla.",
    item3: "Practice as you go",
    item3d: "Examples and exercises in every chapter.",
    cta: "Your first webpage is closer than you think.",
    ctaText: "Start with the basics. Build something real.",
    footer: "Made for curious minds, everywhere.",
    bengali: "বাংলায় পড়ুন",
    english: "Read in English",
  },
  BN: {
    nav: ["শুরু করুন", "পাঠসমূহ", "আমাদের কথা"],
    badge: "ওয়েব শেখার সহজ সঙ্গী",
    headlineA: "ওয়েব শিখুন,",
    headlineB: "সহজ করে।",
    intro: "একটি ছোট ধাপ থেকে ওয়েব তৈরি করা শিখুন। সহজ পাঠ, বাস্তব উদাহরণ আর প্রয়োজনমতো বাংলায় সহায়তা।",
    start: "HTML দিয়ে শুরু করুন",
    browse: "গাইড ঘুরে দেখুন",
    note: "অভিজ্ঞতার প্রয়োজন নেই · নিজের গতিতে শিখুন",
    outline: "আপনার শেখার পথ",
    outlineSub: "তিনটি ভিত্তি। এক দারুণ যাত্রা।",
    learn: "যা যা শিখবেন",
    learnText: "কৌতূহল থেকে নিজের কাজ তৈরি করা পর্যন্ত সবকিছু।",
    item1: "ছোট ছোট পাঠ",
    item1d: "একবারে একটি ধারণা, পরিষ্কারভাবে।",
    item2: "দুই ভাষায় শিখুন",
    item2d: "ইংরেজি ও বাংলার মধ্যে বদলান।",
    item3: "শিখতে শিখতে অনুশীলন",
    item3d: "প্রতিটি অধ্যায়ে উদাহরণ ও অনুশীলন।",
    cta: "আপনার প্রথম ওয়েবপেজ ভাবনার চেয়েও কাছে।",
    ctaText: "শুরু করুন একদম গোড়া থেকে। বানান বাস্তব কিছু।",
    footer: "কৌতূহলী সবার জন্য তৈরি।",
    bengali: "বাংলা",
    english: "English",
  },
};

function HomePage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";
  const text = copy[isBangla ? "BN" : "EN"];

  return (
    <div className="home-shell" lang={isBangla ? "bn" : "en"}>
      <header className="home-nav">
        <Link className="brand" to="/" aria-label="Webwise home">
          <span className="brand-mark"><Code2 size={20} strokeWidth={2.5} /></span>
          <span>webwise<span className="brand-period">.</span></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#explore">{text.nav[0]}</a>
          <Link to="/html">{text.nav[1]}</Link>
          <a href="#about">{text.nav[2]}</a>
        </nav>
        <div className="nav-actions">
          <button
            className="language-switch"
            type="button"
            onClick={() => dispatch(changeLanguage(isBangla ? "EN" : "BN"))}
            aria-label={isBangla ? text.english : text.bengali}
          >
            <Globe2 size={16} /> <span>{isBangla ? "EN" : "বাং"}</span>
          </button>
          <Link className="nav-cta" to="/html">{isBangla ? "শুরু করুন" : "Get started"}<ArrowRight size={15} /></Link>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" />{text.badge}</div>
            <h1>{text.headlineA}<br /><span>{text.headlineB}</span></h1>
            <p className="hero-description">{text.intro}</p>
            <div className="hero-actions">
              <Link className="button-primary" to="/html">{text.start}<ArrowRight size={17} /></Link>
              <a className="button-quiet" href="#explore"><span className="play-icon"><Play size={12} fill="currentColor" /></span>{text.browse}</a>
            </div>
            <p className="hero-note"><Check size={15} />{text.note}</p>
          </div>

          <div className="hero-art" aria-label="A preview of an HTML lesson">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="float-tag tag-top"><span className="tag-dot orange" /> Learn by doing</div>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>your-first-page.html</span><Terminal size={15} /></div>
              <div className="code-content" aria-label="HTML code example">
                <div><span className="line-number">01</span><span className="code-muted">&lt;!doctype html&gt;</span></div>
                <div><span className="line-number">02</span><span className="code-purple">&lt;html</span> <span className="code-green">lang</span>=<span className="code-yellow">&quot;en&quot;</span><span className="code-purple">&gt;</span></div>
                <div><span className="line-number">03</span><span className="code-purple">  &lt;body&gt;</span></div>
                <div><span className="line-number">04</span><span className="code-purple">    &lt;h1&gt;</span><span className="code-white">Hello, web!</span><span className="code-purple">&lt;/h1&gt;</span></div>
                <div><span className="line-number">05</span><span className="code-purple">    &lt;p&gt;</span><span className="code-white">You made this.</span><span className="code-purple">&lt;/p&gt;</span></div>
                <div><span className="line-number">06</span><span className="code-purple">  &lt;/body&gt;</span></div>
                <div><span className="line-number">07</span><span className="code-purple">&lt;/html&gt;</span></div>
              </div>
              <div className="window-status"><span><i /> Live preview</span><span>Ready to create</span></div>
            </div>
            <div className="float-tag tag-bottom"><span className="tag-emoji"><Sparkles size={16} /></span>Small steps. Big ideas.</div>
            <span className="art-spark spark-a">✳</span><span className="art-spark spark-b">✳</span>
          </div>
          <a className="scroll-cue" href="#explore"><ArrowDownRight size={16} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="path-section" id="explore">
          <div className="section-heading">
            <div><p className="section-kicker">THE LEARNING PATH</p><h2>{text.outline}</h2></div>
            <p>{text.outlineSub}</p>
          </div>
          <div className="module-grid">
            {modules.map(({ number, title, titleBn, subtitle, subtitleBn, description, descriptionBn, lessons, lessonsBn, to, theme, Icon, available }) => (
              <article className={`module-card ${theme}`} key={number}>
                <div className="module-top"><span className="module-number">{number} / 03</span><span className="module-icon">{createElement(Icon, { size: 20 })}</span></div>
                <h3>{isBangla ? titleBn : title}</h3>
                <p className="module-subtitle">{isBangla ? subtitleBn : subtitle}</p>
                <p className="module-description">{isBangla ? descriptionBn : description}</p>
                <div className="module-bottom"><span className="module-count">{isBangla ? lessonsBn : lessons}</span><Link to={to} aria-label={`${isBangla ? titleBn : title} ${available ? "lessons" : "preview"}`} className="module-link">{available ? <ArrowRight size={18} /> : <span className="soon-dot" />}</Link></div>
              </article>
            ))}
          </div>
        </section>

        <section className="learn-section" id="about">
          <div className="learn-intro"><p className="section-kicker">MADE FOR REAL LEARNING</p><h2>{text.learn}</h2><p>{text.learnText}</p><Link to="/html" className="text-link">{isBangla ? "HTML পাঠ দেখুন" : "See the HTML lessons"}<ArrowRight size={16} /></Link></div>
          <div className="learn-list">
            <div className="learn-item"><span className="learn-icon icon-peach"><BookOpen size={19} /></span><div><h3>{text.item1}</h3><p>{text.item1d}</p></div><span className="learn-check"><Check size={14} /></span></div>
            <div className="learn-item"><span className="learn-icon icon-lilac"><Globe2 size={19} /></span><div><h3>{text.item2}</h3><p>{text.item2d}</p></div><span className="learn-check"><Check size={14} /></span></div>
            <div className="learn-item"><span className="learn-icon icon-mint"><Compass size={19} /></span><div><h3>{text.item3}</h3><p>{text.item3d}</p></div><span className="learn-check"><Check size={14} /></span></div>
          </div>
        </section>

        <section className="closing-banner"><div className="closing-spark"><Sparkles size={20} /></div><div><h2>{text.cta}</h2><p>{text.ctaText}</p></div><Link to="/html" className="closing-button"><span><ArrowRight size={19} /></span></Link></section>
      </main>
      <footer className="home-footer"><Link className="brand footer-brand" to="/"><span className="brand-mark"><Code2 size={17} /></span><span>webwise<span className="brand-period">.</span></span></Link><span>{text.footer}</span><span>© {new Date().getFullYear()} Torekul Islam</span></footer>
    </div>
  );
}

export default HomePage;
