import React from "react";
import { motion as Motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CodeXml,
  Compass,
  FileCode2,
  Globe2,
  Languages,
  Layers3,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import { changeLanguage } from "../features/html/store/htmlSlice";

const tracks = [
  {
    id: "html",
    title: "HTML",
    titleBn: "এইচটিএমএল",
    tagline: "ওয়েবের মূল কাঠামো",
    taglineEn: "The structure of the web",
    desc: "এলিমেন্ট, সেমান্টিক মার্কআপ ও ওয়েবপেজের গঠন শিখুন।",
    descEn: "Learn elements, semantic markup, and webpage structure.",
    to: "/html",
    ready: true,
    Icon: FileCode2,
    iconClass: "bg-[#FCE9E1] text-[#D76B43]",
    statusClass: "bg-[#EAF1E8] text-[#235B45]",
  },
  {
    id: "css",
    title: "CSS",
    titleBn: "সিএসএস",
    tagline: "ওয়েবপেজকে সাজান",
    taglineEn: "Style your webpages",
    desc: "রং, টাইপোগ্রাফি, রেসপন্সিভ লেআউট ও ডিজাইন শিখুন।",
    descEn: "Explore color, typography, responsive layouts, and design.",
    to: "/css",
    ready: false,
    Icon: Layers3,
    iconClass: "bg-[#E8EDF9] text-[#5479B8]",
    statusClass: "bg-[#F0F0E7] text-[#817D52]",
  },
  {
    id: "js",
    title: "JavaScript",
    titleBn: "জাভাস্ক্রিপ্ট",
    tagline: "ওয়েবপেজে প্রাণ আনুন",
    taglineEn: "Bring pages to life",
    desc: "ইন্টারঅ্যাক্টিভিটি, লজিক ও ডাইনামিক কন্টেন্ট তৈরি করুন।",
    descEn: "Create interactivity, logic, and dynamic content.",
    to: "/js",
    ready: false,
    Icon: Zap,
    iconClass: "bg-[#F7F0DA] text-[#A98731]",
    statusClass: "bg-[#F0F0E7] text-[#817D52]",
  },
];

function HomePage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  const toggleLanguage = () => {
    dispatch(changeLanguage(isBangla ? "EN" : "BN"));
  };

  return (
    <div className="bg-[#FBFAF6] text-[#19372D]">
      <header className="border-b border-[#EAE8DF]">
        <nav
          aria-label={isBangla ? "প্রধান নেভিগেশন" : "Main navigation"}
          className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10"
        >
          <Link
            to="/"
            className="flex items-center gap-2 font-bold tracking-tight text-[#183C30]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#235B45] text-white">
              <CodeXml aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-lg">ForntEndGide<span className="text-[#D88761]">.</span></span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#52645B] md:flex">
            <Link className="transition hover:text-[#235B45]" to="/html">
              {isBangla ? "শুরু করুন" : "Get started"}
            </Link>
            <a className="transition hover:text-[#235B45]" href="#learning-paths">
              {isBangla ? "পাঠ্যসূচি" : "Learning paths"}
            </a>
            <a className="transition hover:text-[#235B45]" href="#about">
              {isBangla ? "আমাদের কথা" : "About"}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isBangla ? "Switch to English" : "বাংলায় দেখুন"}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-[#52645B] transition hover:bg-[#F0F0E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#235B45]"
            >
              <Globe2 aria-hidden="true" className="h-4 w-4" />
              {isBangla ? "EN" : "বাং"}
            </button>
            <Link
              to="/html"
              className="inline-flex items-center gap-2 rounded-lg bg-[#235B45] px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#194A37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#235B45] sm:px-4 sm:text-sm"
            >
              {isBangla ? "শুরু করুন" : "Start learning"}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-12 px-4 py-14 sm:px-8 sm:py-16 md:grid-cols-[1fr_0.9fr] md:gap-8 lg:gap-16 lg:px-10 lg:py-20">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAE5D9] bg-white/80 px-3 py-1.5 text-xs font-medium text-[#5A6A60]">
              <span className="h-2 w-2 rounded-full bg-[#E99A72]" />
              {isBangla ? "এখান থেকেই শুরু হোক" : "Start your journey here"}
            </div>
            <h1 className="mt-5 max-w-xl font-[Yatra_One] text-4xl font-bold leading-[1.14] tracking-tight text-[#183C30] sm:text-5xl lg:text-[3.6rem]">
              {isBangla ? (
                <>
                  ওয়েব শিখুন,
                  <br />
                  <span className="text-[#4A8062]">সহজ করে।</span>
                </>
              ) : (
                <>
                  Learn the web,
                  <br />
                  <span className="text-[#4A8062]">made simple.</span>
                </>
              )}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#69776E] sm:text-base">
              {isBangla
                ? "একটি ছোট ধাপ থেকে ওয়েব তৈরি করা শিখুন। সহজ পাঠ, বাস্তব উদাহরণ আর প্রয়োজনমতো বাংলা সহায়তা।"
                : "Learn to build for the web one small step at a time, with friendly lessons, real examples, and Bangla support when you need it."}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/html"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#235B45] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#194A37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#235B45]"
              >
                {isBangla ? "HTML দিয়ে শুরু করুন" : "Start with HTML"}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href="#learning-paths"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[#52645B] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#235B45]"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full border border-[#D9DED5] bg-white">
                  <Play aria-hidden="true" className="ml-0.5 h-3 w-3 fill-current" />
                </span>
                {isBangla ? "পাঠ শুরু করুন" : "Explore lessons"}
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-[#78867C]">
              <Check aria-hidden="true" className="h-4 w-4 text-[#4A8062]" />
              {isBangla
                ? "নিজের গতিতে শিখুন, প্রতিটি ধাপ উপভোগ করুন"
                : "Learn at your own pace and enjoy every step"}
            </p>
            <a
              href="#learning-paths"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A948B] hover:text-[#235B45]"
            >
              <ArrowDown aria-hidden="true" className="h-3 w-3" />
              {isBangla ? "নিচে দেখুন" : "Scroll to explore"}
            </a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 14, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[470px] py-5"
          >
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4E4D9]"
            />
            <div className="absolute -left-2 top-8 z-10 rounded-lg border border-[#EEEAE1] bg-white px-3 py-2 text-[10px] font-semibold text-[#52645B] shadow-[0_8px_24px_rgba(39,53,43,0.08)] sm:-left-5 sm:text-xs">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#E99A72]" />
              {isBangla ? "কাজ করতে করেই শিখুন" : "Learn by doing"}
            </div>
            <div className="relative mx-3 rotate-[-2deg] overflow-hidden rounded-xl border border-[#47685A] bg-[#19372D] p-4 text-[#DFEDE2] shadow-[0_24px_50px_rgba(25,55,45,0.2)] sm:mx-8 sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-[#B5C9B9]">
                <span>first-page.html</span>
                <span>⌁</span>
              </div>
              <div className="space-y-2.5 py-4 font-mono text-[10px] leading-5 sm:text-xs">
                <p>
                  <span className="mr-4 text-[#779184]">01</span>
                  <span className="text-[#91C69D]">&lt;!doctype html&gt;</span>
                </p>
                <p>
                  <span className="mr-4 text-[#779184]">02</span>
                  <span className="text-[#91C69D]">&lt;html</span>{" "}
                  <span className="text-[#E4B88E]">lang</span>=
                  <span className="text-[#D7C48D]">"en"</span>
                  <span className="text-[#91C69D]">&gt;</span>
                </p>
                <p>
                  <span className="mr-4 text-[#779184]">03</span>
                  <span className="pl-4 text-[#91C69D]">&lt;body&gt;</span>
                </p>
                <p>
                  <span className="mr-4 text-[#779184]">04</span>
                  <span className="pl-8 text-[#91C69D]">&lt;h1&gt;</span>
                  Hello, web!
                  <span className="text-[#91C69D]">&lt;/h1&gt;</span>
                </p>
                <p>
                  <span className="mr-4 text-[#779184]">05</span>
                  <span className="pl-8 text-[#91C69D]">&lt;p&gt;</span>
                  You made this.
                  <span className="text-[#91C69D]">&lt;/p&gt;</span>
                </p>
                <p>
                  <span className="mr-4 text-[#779184]">06</span>
                  <span className="pl-4 text-[#91C69D]">&lt;/body&gt;</span>
                </p>
                <p>
                  <span className="mr-4 text-[#779184]">07</span>
                  <span className="text-[#91C69D]">&lt;/html&gt;</span>
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/10 pt-3 font-mono text-[9px] text-[#9DB7A4]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8CC58E]" />
                Live preview
              </div>
            </div>
            <div className="absolute -bottom-1 right-0 z-10 rounded-lg border border-[#EEEAE1] bg-white px-3 py-2 text-[10px] font-semibold text-[#52645B] shadow-[0_8px_24px_rgba(39,53,43,0.08)] sm:-right-1 sm:text-xs">
              <Sparkles aria-hidden="true" className="mr-1.5 inline h-3.5 w-3.5 text-[#D88761]" />
              {isBangla ? "ছোট ধাপ, বড় স্বপ্ন" : "Small steps. Big ideas."}
            </div>
          </Motion.div>
        </section>

        <section id="learning-paths" className="scroll-mt-6 bg-[#F3F2EA]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-14 lg:px-10">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#849183]">
                  The learning path
                </p>
                <h2 className="mt-2 font-[Yatra_One] text-2xl font-bold text-[#19372D] sm:text-3xl">
                  {isBangla ? "আপনার শেখার পথ" : "Choose your learning path"}
                </h2>
              </div>
              <p className="text-xs text-[#8A9288]">
                {isBangla ? "আপনার শেখার যাত্রা শুরু করুন" : "Pick a topic and start exploring"}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {tracks.map((track, index) => (
                <Motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="h-full"
                >
                  <Link
                    to={track.to}
                    className="group flex h-full flex-col rounded-xl border border-[#E8E6DE] bg-[#FFFEFB] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8D6C9] hover:shadow-[0_12px_30px_rgba(33,55,43,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#235B45] sm:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.16em] text-[#9BA397]">
                        0{index + 1} / 03
                      </span>
                      <span className={`grid h-9 w-9 place-items-center rounded-lg ${track.iconClass}`}>
                        <track.Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mt-4 font-[Yatra_One] text-xl font-bold text-[#19372D]">
                      {isBangla ? track.titleBn : track.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#8A9288]">
                      {isBangla ? track.tagline : track.taglineEn}
                    </p>
                    <p className="mt-3 flex-1 text-xs leading-6 text-[#707C72]">
                      {isBangla ? track.desc : track.descEn}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-[#EEECE5] pt-3">
                      <span className="text-xs font-medium text-[#738075]">
                        {track.ready
                          ? isBangla
                            ? "১টি পাঠ"
                            : "Start learning"
                          : isBangla
                            ? "শিগগিরই আসছে"
                            : "Coming soon"}
                      </span>
                      <span className={`grid h-7 w-7 place-items-center rounded-full ${track.statusClass}`}>
                        {track.ready ? (
                          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                        ) : (
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />
                        )}
                      </span>
                    </div>
                  </Link>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#849183]">
              Made for real learning
            </p>
            <h2 className="mt-2 font-[Yatra_One] text-2xl font-bold text-[#19372D] sm:text-3xl">
              {isBangla ? "যা যা শিখবেন" : "A better way to learn"}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#768178]">
              {isBangla
                ? "কোডের প্রথম লাইন থেকে নিজের ওয়েবপেজ তৈরি করা পর্যন্ত পাশে থাকব।"
                : "From your first line of code to creating your own webpage, learn with a guide at every step."}
            </p>
            <Link
              to="/html"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#235B45] hover:text-[#194A37]"
            >
              {isBangla ? "HTML পাঠ দেখুন" : "Explore HTML lessons"}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-[#EEECE5] border-y border-[#EEECE5]">
            {[
              {
                id: "lessons",
                Icon: BookOpen,
                title: isBangla ? "ছোট ছোট পাঠ" : "Bite-sized lessons",
                desc: isBangla ? "সহজভাবে ভাগ করা পাঠ, ধাপে ধাপে এগোন।" : "Clear, focused lessons that build one step at a time.",
                iconClass: "bg-[#FCE9E1] text-[#D76B43]",
              },
              {
                id: "language",
                Icon: Languages,
                title: isBangla ? "দুই ভাষায় শিখুন" : "Learn in your language",
                desc: isBangla ? "ইংরেজি ও বাংলা—দুই ভাষাতেই সহায়তা।" : "Switch between English and Bangla whenever you like.",
                iconClass: "bg-[#E8EDF9] text-[#5479B8]",
              },
              {
                id: "practice",
                Icon: Compass,
                title: isBangla ? "নিজের গতিতে অনুশীলন" : "Practice at your pace",
                desc: isBangla ? "বাস্তব উদাহরণে শেখা বিষয়গুলো কাজে লাগান।" : "Try what you learn with practical examples.",
                iconClass: "bg-[#EAF1E8] text-[#548063]",
              },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-4">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.iconClass}`}>
                  <item.Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-[#31483A]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#899187]">{item.desc}</p>
                </div>
                <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#78947A]" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-[#EAF0E8] px-5 py-5 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#DCE9D9] text-[#548063]">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#31483A]">
                  {isBangla ? "আপনার প্রথম ওয়েবপেজ বানানোর চেয়েও কাছে।" : "Your first webpage is closer than you think."}
                </h3>
                <p className="mt-1 text-xs text-[#788579]">
                  {isBangla ? "একটি ছোট ধাপ দিয়ে শুরু করুন।" : "Start with one small step today."}
                </p>
              </div>
            </div>
            <Link
              to="/html"
              aria-label={isBangla ? "HTML শেখা শুরু করুন" : "Start learning HTML"}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#235B45] text-white transition hover:bg-[#194A37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#235B45]"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#EAE8DF]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-[#8A9288] sm:flex-row sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-2 font-semibold text-[#244737]">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-[#235B45] text-white">
              <CodeXml aria-hidden="true" className="h-4 w-4" />
            </span>
            webwise.
          </Link>
          <span>
            {isBangla ? "শেখা হোক আনন্দের" : "Make learning a joy."}
          </span>
          <span>© {new Date().getFullYear()} Torekul Islam</span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
