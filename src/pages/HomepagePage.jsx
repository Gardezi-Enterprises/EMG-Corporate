import PageShell from '../components/PageShell'

function HomepagePage() {
  return (
    <PageShell title='Lumina AI - Engineering Intelligence'>
      <div>

        {/* Hero Section */}
        <header className="relative min-h-[870px] flex items-center overflow-hidden bg-surface pt-20 pb-32">
          <div className="absolute inset-0 z-0 opacity-40">
            <img alt="Abstract representation of flowing data nodes and interconnected lines in deep cyan and purple hues, symbolizing artificial intelligence processing." className="w-full h-full object-cover" data-alt="Abstract representation of flowing data nodes and interconnected lines in deep cyan and purple hues, symbolizing artificial intelligence processing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaqJ4eRNnoeMqnTqJ4jdAU65Zg2IOtG2Uusa797UGJx4essRl-aTE6Q-4WO9y6Ujnje3SvPhfzRIiZdqLka0ahY-kCY2SF-7HaVquDdRvpEzN-nSDzmXwpdt8nAu-T9Fb5-EXUlG1uWNOfbTCjP6ucAAidOjZnMLU4Nkiv4LL2Z3dYaKTxDcK9O3A4C2yTP_mOHZXOEj8c6On_uYelrlpDcdooSgIiTrSmX2epp3nwUh5TNSmHr6BoCQ6VfkNZtehJIhCxrt8vrek" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-surface-container-low px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-label font-medium tracking-widest uppercase text-on-surface-variant">Next-Gen Architecture</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-on-surface">
                Engineering <br />
                <span className="text-gradient">Intelligence</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                We bridge the gap between ethereal AI complexity and grounded enterprise reliability. Architecting custom software ecosystems that don't just process data—they understand it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded font-label font-medium tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
                <button className="bg-transparent text-primary px-8 py-4 rounded font-label font-medium tracking-wide hover:bg-primary-fixed-dim/10 transition-colors duration-300 border border-outline-variant/30 flex items-center justify-center">
                  Explore Capabilities
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative w-full aspect-square bg-surface-container-lowest rounded-lg ambient-shadow overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tertiary/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-50" />
                <img alt="High-end server room interior with abstract neon blue and purple lighting, representing secure cloud infrastructure and AI hosting." className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="High-end server room interior with abstract neon blue and purple lighting, representing secure cloud infrastructure and AI hosting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBqaDb1fu1hgVHDfDMwdef4JMmWeql73bTJJGgd7chngGkDt-OVaPPd3qjao19Z4G9RHkQjwuROmqixdxYtmTRSOx6VJpTdTicvvmmQXBRDb7FMPgCesQacmobPe_0QZTcvgDS4XyEPoPjEUuXW4P07-ZSo28AF26GQpkMkXDhlWIUVsv9BYI7GDwEn9B2loedgiX_s0Qam-kIf5jaBIP0aH2bLAff6rmkDilxLQPqvG6yQ0slYw3_u3RSEj8ik8i-bYc21vpm8s" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl" />
            </div>
          </div>
        </header>
        {/* Expertise Overview */}
        <section className="py-32 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">Core Competencies</h2>
                <p className="font-body text-on-surface-variant">Our strategic triad focuses on the precise application of generative models, robust custom architecture, and seamless enterprise integration.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded-lg p-10 ambient-shadow hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 bg-primary-container/20 rounded flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-2xl" data-icon="psychology">psychology</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Applied AI Models</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  Deployment of fine-tuned large language models and computer vision systems tailored to specific industry verticals and operational datasets.
                </p>
                <a className="inline-flex items-center space-x-2 text-primary font-label text-sm font-medium group-hover:text-tertiary transition-colors" href="#">
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-xs" data-icon="east">east</span>
                </a>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded-lg p-10 ambient-shadow hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden group md:mt-12">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 bg-tertiary/10 rounded flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-tertiary text-2xl" data-icon="code_blocks">code_blocks</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Custom Architecture</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  Scalable, secure, and highly performant custom software solutions built from the ground up to support intensive computational workloads.
                </p>
                <a className="inline-flex items-center space-x-2 text-primary font-label text-sm font-medium group-hover:text-tertiary transition-colors" href="#">
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-xs" data-icon="east">east</span>
                </a>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest rounded-lg p-10 ambient-shadow hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 bg-primary-container/20 rounded flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-2xl" data-icon="hub">hub</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Enterprise Integration</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  Seamlessly embedding intelligent nodes into your existing legacy systems without disrupting mission-critical daily operations.
                </p>
                <a className="inline-flex items-center space-x-2 text-primary font-label text-sm font-medium group-hover:text-tertiary transition-colors" href="#">
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-xs" data-icon="east">east</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Features / Glassmorphism Section */}
        <section className="py-32 relative bg-surface">
          {/* Abstract Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-[20%] top-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-bl from-secondary-fixed to-surface-dim opacity-30 blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">Intelligence at Scale</h2>
              <p className="font-body text-lg text-on-surface-variant">
                Beyond standard metrics. We design interfaces and backend structures that communicate complex data with profound clarity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="glass-panel rounded-lg p-8 ambient-shadow border border-outline-variant/10 flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="memory">memory</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Neural Optimization</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Continuous learning loops implemented directly into the user layer, allowing the application to evolve based on structural usage patterns.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="glass-panel rounded-lg p-8 ambient-shadow border border-outline-variant/10 flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-tertiary text-on-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="security">security</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Cryptographic Resilience</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Enterprise-grade security protocols woven into the foundational logic, ensuring data sovereignty and impenetrable transit states.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="glass-panel rounded-lg p-8 ambient-shadow border border-outline-variant/10 flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="data_exploration">data_exploration</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Semantic Data Mapping</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Transforming unstructured data lakes into coherent, queryable knowledge graphs that human operators can easily navigate and interpret.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="glass-panel rounded-lg p-8 ambient-shadow border border-outline-variant/10 flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-secondary text-on-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined" data-icon="speed">speed</span>
                </div>
                <div>
                  <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Zero-Latency Inferences</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Edge computing deployments that allow for real-time model inferences without reliance on centralized server latency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial & Final CTA */}
        <section className="bg-inverse-surface py-24 relative overflow-hidden">
          {/* Generative Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-tertiary/20 mix-blend-overlay" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6 opacity-80" data-icon="format_quote">format_quote</span>
            <blockquote className="font-headline text-2xl md:text-4xl text-surface-bright font-medium leading-tight mb-10">
              "Lumina didn't just build us a software platform; they engineered a central nervous system for our data operations. The clarity it brings is unprecedented."
            </blockquote>
            <div className="flex items-center justify-center space-x-4 mb-16">
              <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden">
                <img alt="Professional portrait of a female executive in a modern office setting with natural lighting." className="w-full h-full object-cover" data-alt="Professional portrait of a female executive in a modern office setting with natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcLAbx1ROlgh-siG1n9wgvBbwa_iXtEkHMzuNIyGiyQMuUhAMoAMoRDHC4TWig1rptKhZFeCQOuw9Tt_yXDbEoGXrrfeOwoRVt0uji8GmpYPJdccbNw0T7vLBvrG7IFTX7PIzLWrk2nBFHsp_IF_FLZQLqmC5Ksm_CsUJR_Pf51WrOv74BPJAUNHKOslIwziF0asDqBSEkgRYDrJ3NZzukZMcbeOgP5Lxq6QTu7emMCT6QUZRPtV0etCwDnWGsB7D_p0dYsOIXEUM" />
              </div>
              <div className="text-left">
                <div className="font-headline font-bold text-surface-bright">Elena Rostova</div>
                <div className="font-body text-sm text-surface-variant/70">CTO, Nexus Global Analytics</div>
              </div>
            </div>
            <div className="pt-12 border-t border-surface-variant/10">
              <h3 className="font-headline text-3xl font-bold text-surface-bright mb-6">Ready to define your architecture?</h3>
              <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded font-label font-medium tracking-wide hover:bg-surface-bright hover:text-primary transition-colors duration-300">
                Initiate Project Discussion
              </button>
            </div>
          </div>
        </section>
        {/* Footer */}

      </div>
    </PageShell>
  )
}

export default HomepagePage
