import PageShell from '../components/PageShell'

function BlogInsightsPage() {
  return (
    <PageShell title='Blog - Lumina AI Architecture'>
      <div>
        <main className="flex-grow">
          {/* Hero Section / Featured Article */}
          <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-4">Insights &amp; Intelligence</h1>
              <p className="font-body text-lg text-on-surface-variant max-w-2xl">Exploring the frontier of artificial intelligence, enterprise architecture, and cognitive software design.</p>
            </div>
            <div className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_8px_30px_rgb(0,104,119,0.04)] transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,104,119,0.08)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img alt="Featured Article Image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="abstract digital artwork showing glowing blue and cyan neural network connections representing artificial intelligence on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU827yDlWUEcc-wXNdcL_Gms9Xk7Y9tzIbgh8Y27sCZQUZjhBrsLO-9-D2WjgrHb4LHbEIN84g4yAV1VhqIOwS0DqbhkuH5irT9eoQUw1e5G_9wQInRrxyZR9mQnxWiqUHAwprs_JRgFbCeGdFtRKUtv-lEx9prFOoBI83FQV2eCl1czsrSqCUWioiOHUR7vHThe0L8Db5DoR9q420piC8xis67ddoPvgr1SbPy1XCnGEA8sW-0VIERyhMzgAq6oiti_j00Mhdyqg" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-surface/80 backdrop-blur-md text-primary font-label text-xs font-semibold px-3 py-1 rounded tracking-wide">FEATURED</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm font-label text-on-surface-variant mb-4">
                    <span>Architecture</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                    <span>8 min read</span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6 group-hover:text-primary transition-colors">The Cognitive Shift: Moving Beyond Dashboards to Intelligent Voids</h2>
                  <p className="font-body text-on-surface-variant mb-8 line-clamp-3">Discover how enterprise UI design is evolving from cluttered, data-heavy dashboards to serene, intent-driven interfaces that leverage AI to present only the necessary information at the right time.</p>
                  <div className="mt-auto">
                    <a className="inline-flex items-center gap-2 text-primary font-label font-medium hover:text-primary-container transition-colors group/link" href="#">
                      Read Full Article
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Subtle top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-container opacity-50" />
            </div>
          </section>
          {/* Grid Section */}
          <section className="bg-surface-container-low py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                <h3 className="font-headline text-3xl font-bold text-on-surface">Latest Publications</h3>
                <div className="hidden md:flex gap-2">
                  <button className="p-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">grid_view</span></button>
                  <button className="p-2 rounded bg-surface text-on-surface-variant hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">view_list</span></button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Article Card 1 */}
                <article className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300 relative shadow-[0_4px_20px_rgb(0,104,119,0.03)] hover:shadow-[0_8px_30px_rgb(0,104,119,0.06)]">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-48 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="server rack room with moody blue and cyan neon lighting showing data storage and processing power" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKMHNjlM5PgvDn1xX_nmZ0q4GI_B2Mjs38QNggKAobUhOkPPTlZlUCypqSJDuL24qoraucJPGmFOxVOoRCxsdQQJbAU8tJHfVKhBHwboU7wGPXB3LEDOgeH26fPix1z3Dteo2p3WISBvquf2UpfyTT9-NGf-aOYVCXOHXAofhu-nbwABc9OcZVkZpe-cT78RPVBtmslGzaK39czm43YjoKQqp5diub4bbLyEkjwXQtrQzJ1Jp7iMscPmdbP3fv9xLF-udUIAwmnrc" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant mb-3">
                      <span className="text-tertiary font-medium">Data Strategy</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant" />
                      <span>Oct 12, 2024</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Optimizing Large Language Models for Edge Deployments</h4>
                    <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2">A technical deep dive into model quantization and efficient inference strategies for resource-constrained environments.</p>
                    <a className="text-primary font-label text-sm font-medium hover:underline" href="#">Read more</a>
                  </div>
                </article>
                {/* Article Card 2 */}
                <article className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300 relative shadow-[0_4px_20px_rgb(0,104,119,0.03)] hover:shadow-[0_8px_30px_rgb(0,104,119,0.06)]">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-48 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="minimalist data visualization chart with sleek glowing lines on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF17tUsYu5hvlMlN1Wtg7ExVWTUHTJNtmviN0WEzUvQchPtQqaCX2JhjARqTp0c2WsIx7ZHxj79y6vpZL_78dhaF-mqoIMwMOJ8RgOHZhKDSisoCivSh1Jun_-JyQKQCc9Xni3SeVjB5xo-LwWUMFaXt7ktxwd33sqKpy9HJM4mQqnOv-0ZEokQ1Wts9Mmh1QOtO2igq6fmCJX_cAnj_BrGLfuaOFA0RllmaPNdSS4RF_FUMZiVquqcjVJwDjKUXrrB0mg5n6SBZY" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant mb-3">
                      <span className="text-primary-container font-medium text-primary">Analytics</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant" />
                      <span>Oct 05, 2024</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Predictive Maintenance through Machine Learning</h4>
                    <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2">How industrial sectors are utilizing our AI frameworks to reduce downtime and optimize supply chain operations.</p>
                    <a className="text-primary font-label text-sm font-medium hover:underline" href="#">Read more</a>
                  </div>
                </article>
                {/* Article Card 3 */}
                <article className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300 relative shadow-[0_4px_20px_rgb(0,104,119,0.03)] hover:shadow-[0_8px_30px_rgb(0,104,119,0.06)]">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-48 overflow-hidden bg-inverse-surface flex items-center justify-center">
                    {/* Using a CSS gradient pattern instead of image for variety */}
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-tertiary/40 via-inverse-surface to-inverse-surface opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant mb-3">
                      <span className="text-tertiary font-medium">Ethics</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant" />
                      <span>Sep 28, 2024</span>
                    </div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Designing Transparent AI Systems in Healthcare</h4>
                    <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2">Navigating the complexities of algorithmic bias and ensuring explainability in medical diagnostic models.</p>
                    <a className="text-primary font-label text-sm font-medium hover:underline" href="#">Read more</a>
                  </div>
                </article>
              </div>
              <div className="mt-16 flex justify-center">
                <button className="px-8 py-3 bg-transparent border-2 border-outline-variant text-on-surface font-label font-medium rounded hover:bg-surface-variant transition-colors">
                  Load More Insights
                </button>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}

      </div>
    </PageShell>
  )
}

export default BlogInsightsPage
