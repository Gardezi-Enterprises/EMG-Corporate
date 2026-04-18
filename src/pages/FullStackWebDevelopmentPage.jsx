import PageShell from '../components/PageShell'

function FullStackWebDevelopmentPage() {
  return (
    <PageShell title='Full-Stack &amp; Web Development | Lumina AI'>
      <div>

        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low -z-10" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest text-primary text-sm font-medium rounded-full mb-8 shadow-[0_4px_24px_rgba(0,104,119,0.06)]">
                    <span className="material-symbols-outlined text-[18px]" data-icon="code">code</span>
                    Full-Stack Engineering
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-6">
                    Modern Architecture. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Clean Code.</span>
                  </h1>
                  <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
                    We build high-performance, scalable web applications and enterprise systems designed for the future. Engineering excellence meets intelligent architecture.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-on-primary px-8 py-3 rounded-DEFAULT font-semibold hover:opacity-90 transition-opacity">Start a Project</button>
                    <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-DEFAULT font-semibold hover:opacity-90 transition-opacity">View Architecture Specs</button>
                  </div>
                </div>
                <div className="relative hidden lg:block h-[500px]">
                  {/* Decorative Abstract Architecture Visual */}
                  <div className="absolute inset-0 bg-surface-container-lowest rounded-lg shadow-[0_20px_60px_rgba(0,104,119,0.08)] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-tertiary" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
                        <div className="w-3 h-3 rounded-full bg-error" />
                        <div className="w-3 h-3 rounded-full bg-[#fbbc04]" />
                        <div className="w-3 h-3 rounded-full bg-[#34a853]" />
                        <span className="ml-4 text-xs font-mono text-on-surface-variant">system_architecture.ts</span>
                      </div>
                      <div className="font-mono text-sm text-on-surface-variant space-y-2 opacity-80">
                        <p><span className="text-tertiary">import</span> {'{'} ScalableSystem {'}'} <span className="text-tertiary">from</span> '@lumina/core';</p>
                        <p><span className="text-tertiary">import</span> {'{'} AIProcessor {'}'} <span className="text-tertiary">from</span> '@lumina/ai';</p>
                        <br />
                        <p><span className="text-primary">const</span> infrastructure = <span className="text-primary">new</span> ScalableSystem({'{'}</p>
                        <p className="pl-4">nodes: <span className="text-[#0f9d58]">1024</span>,</p>
                        <p className="pl-4">redundancy: <span className="text-primary">true</span>,</p>
                        <p className="pl-4">processor: <span className="text-primary">new</span> AIProcessor()</p>
                        <p>{'}'});</p>
                        <br />
                        <p><span className="text-tertiary">export default</span> infrastructure.deploy();</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating Glass Card */}
                  <div className="absolute -bottom-10 -left-10 bg-surface/70 backdrop-blur-md p-6 rounded-lg shadow-[0_20px_40px_rgba(0,104,119,0.12)] w-64 border border-outline-variant/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined" data-icon="speed">speed</span>
                      </div>
                      <div>
                        <div className="text-xs text-on-surface-variant font-medium">System Performance</div>
                        <div className="text-lg font-headline font-bold text-on-surface">99.99% Uptime</div>
                      </div>
                    </div>
                    <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[99%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Expertise Sections */}
          <section className="py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-4">Core Competencies</h2>
                <p className="text-on-surface-variant max-w-2xl">Precision engineering across the full technology stack, delivering seamless experiences and robust backends.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest p-8 rounded-lg relative group transition-all duration-300 hover:bg-surface-bright">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined" data-icon="web">web</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Web App Development</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Responsive, high-performance web applications built with modern frameworks (React, Vue, Next.js). Focused on modular component architecture and seamless UX.
                  </p>
                  <a className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1" href="#">
                    Explore Web Solutions <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest p-8 rounded-lg relative group transition-all duration-300 hover:bg-surface-bright shadow-[0_10px_30px_rgba(0,104,119,0.04)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container" />
                  <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined" data-icon="smartphone">smartphone</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Mobile Solutions</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Cross-platform and native mobile experiences that leverage device capabilities while maintaining codebase efficiency and consistent design languages.
                  </p>
                  <a className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1" href="#">
                    Explore Mobile Tech <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
                {/* Card 3 */}
                <div className="bg-surface-container-lowest p-8 rounded-lg relative group transition-all duration-300 hover:bg-surface-bright">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined" data-icon="dns">dns</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Enterprise Systems</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Robust backend architectures, microservices, and API integrations designed for massive scale, data integrity, and strict security compliance.
                  </p>
                  <a className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1" href="#">
                    Explore Enterprise Architecture <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}

      </div>
    </PageShell>
  )
}

export default FullStackWebDevelopmentPage
