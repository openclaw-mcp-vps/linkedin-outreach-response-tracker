export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Chrome Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track LinkedIn Message{" "}
          <span className="text-[#58a6ff]">Response Rates</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Know exactly when your outreach lands. Analyze open rates, response rates, and the best times to send — all from a clean dashboard synced to your LinkedIn inbox.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">3×</div>
            <div className="text-sm text-[#8b949e] mt-1">More replies with optimal timing</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e] mt-1">Dashboard synced to LinkedIn</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">Zero</div>
            <div className="text-sm text-[#8b949e] mt-1">LinkedIn ToS violations</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Chrome extension + analytics dashboard",
              "Response rate & open rate tracking",
              "Optimal send-time recommendations",
              "Unlimited message history analysis",
              "CSV export for your CRM",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does this violate LinkedIn's Terms of Service?",
              a: "No. The extension reads data already visible in your own LinkedIn inbox — it does not scrape profiles, send automated messages, or interact with LinkedIn's API. It only observes and records your own messaging activity."
            },
            {
              q: "How does the tracking work?",
              a: "After installing the Chrome extension, it monitors your LinkedIn messaging tab for send and reply events. Data is securely synced to your personal dashboard where you can view response rates, timing patterns, and trends."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. You can cancel your subscription at any time from your billing portal. You'll retain access until the end of your current billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} LinkedIn Outreach Response Tracker. Not affiliated with LinkedIn.
      </footer>
    </main>
  );
}
