import PageShell from '../components/PageShell'

function CaseStudiesPage() {
  return (
    <PageShell title='Work - Lumina AI Architecture'>
      <div>

        {/* Main Content Canvas */}
        <main className="relative w-full overflow-hidden">
          {/* Ambient Generative Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-primary/10 to-tertiary/10 blur-[100px] pointer-events-none z-0" />
          {/* Hero Section */}
          <section className="relative z-10 pt-24 pb-16 px-6 max-w-7xl mx-auto">
            <h1 className="font-headline text-[3.5rem] leading-none tracking-[-0.02em] text-on-surface mb-6 max-w-4xl">
              Intelligence Defined Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Execution.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              A curated portfolio of architectural AI solutions. We transform abstract complexity into grounded, scalable enterprise infrastructure.
            </p>
          </section>
          {/* Detailed Case Study (Anchor) */}
          <section className="relative z-10 bg-surface-container-low py-24 mt-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Content Side */}
              <div className="lg:col-span-5 flex flex-col space-y-8">
                <div>
                  <span className="font-label text-sm text-primary tracking-wider uppercase mb-2 block">Featured Case Study</span>
                  <h2 className="font-headline text-3xl md:text-4xl text-on-surface leading-tight tracking-tight mb-4">
                    Optimizing Supply Chains with Predictive AI
                  </h2>
                  <p className="font-body text-on-surface-variant">
                    Global logistics networks require split-second adaptability. We engineered a predictive forecasting engine that anticipates disruptions before they cascade across the supply chain.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-surface p-6 rounded relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors duration-300" />
                    <h3 className="font-headline text-lg text-on-surface mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline">warning</span>
                      The Problem
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant">
                      Reliance on historical data created a reactive environment, resulting in high warehousing costs and delayed shipments during global anomalies.
                    </p>
                  </div>
                  <div className="bg-surface p-6 rounded relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-tertiary transition-colors duration-300" />
                    <h3 className="font-headline text-lg text-on-surface mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline">architecture</span>
                      The Solution
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant">
                      Deployed a multi-modal neural network analyzing real-time weather, geopolitical events, and sensor data to dynamically reroute inventory.
                    </p>
                  </div>
                </div>
                {/* Button Primary */}
                <button className="bg-primary text-on-primary font-label px-6 py-3 rounded self-start hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300">
                  Read Full Technical Report
                </button>
              </div>
              {/* Visual/Data Side */}
              <div className="lg:col-span-7 relative">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-surface-variant">
                  <img alt="high contrast aerial view of modern automated shipping port at twilight with glowing cyan data nodes overlaid on physical containers" className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" data-alt="high contrast aerial view of modern automated shipping port at twilight with glowing cyan data nodes overlaid on physical containers, futuristic logistics, deep cinematic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-PI-s4PW5qPSeJ8A4emR_agwjrJS2kJnNJrItapUu3-dMkYEVfxGJbAky03rxYUFuZHhwh-wdOyfpZp4RzUrwGJNRK4hJOeML-fQoZYMr3dZaksBd29KR47KhPC71K_BBM72Ue2-Os71WSVveTJmjObl5TLvwiVpe8B32KiOb1GExA3-WDwH9jY6hn_ykN2Eh_BJH1-SqMlZTJCvOkYod_TtPIqwgUwe9qik57sM6TaytznB4XWhdbrjLwtZO7xH8A5tEI_kwWQ" />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent" />
                </div>
                {/* Floating Stats Card (Glassmorphism & Asymmetry) */}
                <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-surface/80 backdrop-blur-xl p-6 rounded border border-outline-variant/20 shadow-2xl max-w-xs">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="font-headline text-5xl text-primary leading-none tracking-tighter">30%</span>
                    <span className="material-symbols-outlined text-tertiary text-3xl mb-1" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>trending_up</span>
                  </div>
                  <p className="font-headline text-sm text-on-surface font-semibold mb-1">Increase in Routing Efficiency</p>
                  <p className="font-body text-xs text-on-surface-variant">Measured across 4 continents over an 18-month deployment phase.</p>
                </div>
              </div>
            </div>
          </section>
          {/* Project Grid (Bento Style) */}
          <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline text-3xl text-on-surface tracking-tight">Recent Deployments</h2>
              <a className="font-label text-sm text-primary hover:text-tertiary transition-colors flex items-center gap-1 group" href="#">
                View Archive 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded relative overflow-hidden group cursor-pointer h-[400px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-surface-variant">
                  <img alt="close up of sophisticated server rack infrastructure bathed in cool blue and purple led lighting in a clean data center environment" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="close up of sophisticated server rack infrastructure bathed in cool blue and purple led lighting in a clean data center environment, shallow depth of field, high-tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSN-cEDxPUTyJ2Nd3s_xQpQ4UhyhOQR5PfeqqO49Crv9uBi4GMe_2QJeoBROnZqQvKD_LhIeAF5Egxdz5m9czx-8b2gbbHQ80M93lzKRp3FLNIsA-ujxYfqYsNUVxfQZXAt5yDcSyGzEEdEVvCiPhegAlEDOAvS2qCqIJP4lSUSn7EK7fPeAW9m2PNrHT6Ns29vlCGNDL62Hi-1qvtnDpF2Tf2Ly8hZitu9KJ7I81Fj7PxekBXGi01QiPkmcXtuiyEr1yrlVlR5tQ" />
                </div>
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent opacity-90" />
                <div className="relative z-10 p-6">
                  <span className="inline-block px-2 py-1 bg-primary/20 text-primary-fixed text-xs font-label mb-3 rounded backdrop-blur-md">Cybersecurity</span>
                  <h3 className="font-headline text-xl text-white mb-2 group-hover:text-primary-fixed transition-colors">Autonomous Threat Neutralization</h3>
                  <p className="font-body text-sm text-surface-variant line-clamp-2">Implemented a self-healing network architecture capable of isolating zero-day exploits within milliseconds.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded relative overflow-hidden group cursor-pointer h-[400px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-surface-variant">
                  <img alt="abstract visualization of natural language processing using floating geometric shapes and typography in deep space setting" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="abstract visualization of natural language processing using floating geometric shapes and typography in deep space setting, glowing cyan and violet accents, minimal editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2HYwNOWskKJZ-ocxQ8_AMgZKmxh1yVgMeg_EbvtIhJppFR8NH3mWNXTE2imO3cKqhx2ircikrlA874sKWfGpacVdulZLwf9VZWDPUBayv2YCR125guqTmuciqD_cwu_iDH3eWNCNjIuflY6yE4bpgOf4c_ai_CdbEZ40B8FwTQXA-4Tm5Qxo53GfjPSDEUOZN754PczpjLTVnWSbva2jIRMSogWOfQZaNf0fkI2kc4MtIqV8Fgs7UJFl2o1w6_ckd4gjHSYsXzdU" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent opacity-90" />
                <div className="relative z-10 p-6">
                  <span className="inline-block px-2 py-1 bg-tertiary/20 text-tertiary-fixed text-xs font-label mb-3 rounded backdrop-blur-md">Healthcare</span>
                  <h3 className="font-headline text-xl text-white mb-2 group-hover:text-tertiary-fixed-dim transition-colors">NLP for Clinical Diagnostics</h3>
                  <p className="font-body text-sm text-surface-variant line-clamp-2">Streamlined unstructured patient data processing, reducing diagnostic review time by 45%.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest rounded relative overflow-hidden group cursor-pointer h-[400px] flex flex-col justify-end lg:col-span-1 md:col-span-2 lg:col-start-auto">
                <div className="absolute inset-0 bg-surface-variant">
                  <img alt="precision robotic arm assembling intricate microelectronics in a sterile bright white laboratory environment with sharp focus" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="precision robotic arm assembling intricate microelectronics in a sterile bright white laboratory environment with sharp focus, clinical precision, cool lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeK9ylO3AyUaIEFXPvTdZWzS-0ziHJqjgyVhjrADaWkVwRLcTwpb01j93S8hkk-9tOGk4SqwkBgJ3BNDm0sGxERDyIIr-1OB7yA9cSTlGsGdc7t4T4eqJdI0nRY-wp-ZevaBVjHg_n6HYSAC-GWY97D2hvtdnnXAzBGt63CHqajybJ0yhvsPGPeWyiufHnXNgVB20pK2IJm3foQUH8toqyaL1EWsi0RmmR583ELdcPAfEoQo0X1CtOScNYgsE15QSkuc5dLdavDHo" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent opacity-90" />
                <div className="relative z-10 p-6">
                  <span className="inline-block px-2 py-1 bg-secondary/30 text-secondary-fixed text-xs font-label mb-3 rounded backdrop-blur-md">Manufacturing</span>
                  <h3 className="font-headline text-xl text-white mb-2 group-hover:text-secondary-fixed transition-colors">Computer Vision Quality Assurance</h3>
                  <p className="font-body text-sm text-surface-variant line-clamp-2">Defect detection model deployed at edge layer, achieving 99.8% accuracy on high-speed assembly lines.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Footer (Shared Component) */}

      </div>
    </PageShell>
  )
}

export default CaseStudiesPage
