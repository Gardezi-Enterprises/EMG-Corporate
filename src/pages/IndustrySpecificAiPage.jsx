import PageShell from '../components/PageShell'

function IndustrySpecificAiPage() {
  return (
    <PageShell title='AI Integrations - Lumina AI Architecture'>
      <div>
        {/* Main Content Canvas */}
        <main className="flex-grow flex flex-col">
          {/* Hero Section */}
          <section className="relative pt-24 pb-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-surface-container-low -z-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent -z-10 opacity-50 blur-3xl" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold font-headline text-on-surface mb-6 leading-tight">
                  Domain-Specific <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Intelligence.</span>
                </h1>
                <p className="text-lg md:text-xl font-body text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                  Precision-engineered AI models adapted for the unique complexities of specialized industries. Move beyond generic LLMs to structural cognitive power.
                </p>
                <div className="flex gap-4">
                  <button className="bg-primary text-on-primary font-label px-6 py-3 rounded hover:bg-primary/90 transition-colors">
                    Explore Sectors
                  </button>
                  <button className="bg-transparent border border-outline-variant text-primary font-label px-6 py-3 rounded hover:bg-surface-variant transition-colors flex items-center gap-2">
                    View Methodology <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden bg-surface-container-lowest shadow-[0_20px_40px_-15px_rgba(0,104,119,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent z-10 flex items-end p-8">
                  <div className="text-on-primary">
                    <p className="font-label text-sm uppercase tracking-widest text-primary-fixed-dim mb-2">Architectural Overview</p>
                    <h3 className="font-headline text-2xl font-medium">Neural Node Mapping</h3>
                  </div>
                </div>
                <img alt="Abstract visual of glowing cyan and purple digital nodes connected in a complex neural network on a dark background" className="w-full h-full object-cover" data-alt="Abstract visual of glowing cyan and purple digital nodes connected in a complex neural network on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9o1LuVqiua5maYufUb2hxOEzjHMPBfBetDV67Wi7QeC0BSSFStnFUDa4-ogAygwOUmChyzrHbeNw19mOX5d_AtqyhI19f50WOmzAR8Mv02C8JUL0att8OMYUuJ_ZQcy5-J5Zqo5vw3mbKJ0uhPlDE1FtU4n1JAaPVl0SBZeHT-nS493Ay1Tg01UE1Y3GrS_vJ_sitZrVQOUam9P-NzlYt5hoRh5qqbFQmdggiVpqZerEFLHR17P3E8qBvSAOdQmbr9Wfpnn05u7I" />
              </div>
            </div>
          </section>
          {/* Industry 1: Legal */}
          <section className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-5/12 order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-tertiary p-2 bg-tertiary/10 rounded">gavel</span>
                    <span className="font-label text-tertiary uppercase tracking-wider text-sm font-semibold">Legal Sector</span>
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Cognitive Contract Analysis</h2>
                  <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
                    Deploy high-fidelity natural language processing to dissect complex legal documentation. Our models extract clauses, identify compliance risks, and cross-reference case law with unprecedented structural accuracy.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">document_scanner</span>
                      <div>
                        <h4 className="font-headline font-semibold text-on-surface">Automated Due Diligence</h4>
                        <p className="text-sm text-on-surface-variant font-body mt-1">Scan thousands of pages in seconds to highlight critical liabilities.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">account_tree</span>
                      <div>
                        <h4 className="font-headline font-semibold text-on-surface">Precedent Mapping</h4>
                        <p className="text-sm text-on-surface-variant font-body mt-1">Visual node graphs connecting current clauses to historical litigation outcomes.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-7/12 order-1 md:order-2 relative">
                  <div className="aspect-[4/3] rounded bg-surface-container-lowest overflow-hidden shadow-[0_40px_60px_-20px_rgba(0,104,119,0.08)] relative z-10 border-t-4 border-tertiary">
                    <img alt="Overhead view of legal documents being scanned by a futuristic light interface with glowing text overlays" className="w-full h-full object-cover opacity-90" data-alt="Overhead view of legal documents being scanned by a futuristic light interface with glowing text overlays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1T_5AXFhM345mMS0JjPfLc_xo8egDieTCUwmroQOJKNvPtqyVzHyyJPAVfRMSwabdyctwsc-PmiH6dIquRrWUulY700OAIm8Wh3irYOFxWqelo3uFPMt-TuCCY8tLN52Y-soaIcXFKX6g_CgW8ep3CNFH0KeZNqyWyLcPCQF3sLuPRxXpkTtwIwV96TkNhf84nR3JRwsGCIGEm52M39B35sEr0WIUOuSH3-Ieltz-yfjGAAQUAqrsUfZQ71LI4Xt3OzjXl6iPxNE" />
                    {/* Overlay UI elements */}
                    <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur-md p-4 rounded shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary-container" />
                        <span className="text-xs font-label text-on-surface">Risk Assessment: Low</span>
                      </div>
                      <div className="w-48 h-1 bg-surface-variant rounded overflow-hidden">
                        <div className="w-3/4 h-full bg-primary-container" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </div>
          </section>
          {/* Industry 2: Real Estate */}
          <section className="py-24 px-6 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-7/12 relative">
                  <div className="aspect-[4/3] rounded bg-surface-container-lowest overflow-hidden shadow-[0_40px_60px_-20px_rgba(0,104,119,0.08)] relative z-10 border-t-4 border-primary">
                    <img alt="Modern architectural city scale model overlaid with glowing data points and geometric cyan projection mapping" className="w-full h-full object-cover opacity-90" data-alt="Modern architectural city scale model overlaid with glowing data points and geometric cyan projection mapping" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-js_NffZpBEHFwOa1DZmIFjL-fFxMvZLh_yLcnXXazQEnsOOx1dLTCtWoR7h3VDhf4pdVYV-Mqp5KAXagyFSFklvi5laI5ZXMSPtwOilkykWklsJm5-0hpszbWndlq9x4LPkveTNUG8SwqDc6fUcpjCAjWWkBzrk1FKBS1M8xJinqJ1YTY6QuV6yEXgS-UvzzF5NjnoeRJn5ExtMZ9QfMzk5i4dBvwio7LLteiMmsGOTtIYOo8wLSoqNyL7Fq4nG-IIexNJijOc" />
                    {/* Overlay UI elements */}
                    <div className="absolute bottom-6 right-6 bg-inverse-surface text-on-primary p-4 rounded shadow-lg backdrop-blur-md">
                      <div className="text-xs font-label text-outline-variant mb-1">Valuation Delta</div>
                      <div className="text-2xl font-headline font-bold text-primary-fixed-dim">+14.2%</div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                </div>
                <div className="w-full md:w-5/12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded">location_city</span>
                    <span className="font-label text-primary uppercase tracking-wider text-sm font-semibold">Real Estate Sector</span>
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Predictive Spatial Valuation</h2>
                  <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
                    Integrate macro-economic variables, micro-location transit data, and historical pricing curves to forecast property valuations. Our spatial models see patterns invisible to traditional comparative market analysis.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-tertiary mt-1">map</span>
                      <div>
                        <h4 className="font-headline font-semibold text-on-surface">Topological Heatmaps</h4>
                        <p className="text-sm text-on-surface-variant font-body mt-1">Visualize growth corridors before they emerge based on civic infrastructure signals.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-tertiary mt-1">bar_chart</span>
                      <div>
                        <h4 className="font-headline font-semibold text-on-surface">Dynamic Yield Modeling</h4>
                        <p className="text-sm text-on-surface-variant font-body mt-1">Real-time adjustments to expected cap rates based on live demographic shifts.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Custom Integration Overview (Bento Grid) */}
          <section className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Universal Architecture</h2>
                <p className="text-on-surface-variant font-body text-lg">
                  Our underlying cognitive framework is agnostic. We build the intelligence; you define the parameters.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                {/* Bento Box 1 */}
                <div className="md:col-span-2 bg-surface-container-lowest rounded p-8 shadow-[0_10px_30px_-10px_rgba(0,104,119,0.05)] border-t border-primary/20 hover:bg-surface-bright transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl text-primary">data_object</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 relative z-10">Data Ingestion Engine</h3>
                  <p className="text-on-surface-variant font-body relative z-10 max-w-md">
                    Connect proprietary datasets securely. Our architecture sanitizes, structures, and vectorizes your fragmented data into a cohesive neural foundation.
                  </p>
                </div>
                {/* Bento Box 2 */}
                <div className="bg-primary text-on-primary rounded p-8 shadow-[0_10px_30px_-10px_rgba(0,104,119,0.2)] relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-container rounded-full blur-2xl opacity-50" />
                  <h3 className="font-headline text-xl font-bold mb-3 relative z-10">Secure Sandboxing</h3>
                  <p className="text-on-primary/80 font-body text-sm relative z-10">
                    Enterprise-grade isolation ensures your customized models and training data never cross-pollinate with external environments.
                  </p>
                </div>
                {/* Bento Box 3 */}
                <div className="bg-surface-container-lowest rounded p-8 shadow-[0_10px_30px_-10px_rgba(0,104,119,0.05)] border-t border-tertiary/20 flex flex-col justify-end">
                  <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">model_training</span>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Continuous Learning</h3>
                  <p className="text-sm text-on-surface-variant font-body">Models evolve autonomously as new sector-specific data streams are introduced.</p>
                </div>
                {/* Bento Box 4 */}
                <div className="md:col-span-2 bg-inverse-surface text-on-primary rounded p-8 flex items-center justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-tertiary/20 z-0" />
                  <div className="relative z-10">
                    <h3 className="font-headline text-2xl font-bold mb-2">Ready to architect your solution?</h3>
                    <p className="text-outline-variant font-body text-sm max-w-sm">Schedule a technical consultation to discuss API limits, custom weighting, and integration timelines.</p>
                  </div>
                  <button className="relative z-10 bg-primary-container text-on-primary-container font-label px-6 py-3 rounded hover:bg-inverse-primary transition-colors whitespace-nowrap">
                    Initiate Build
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Footer Component */}

      </div>
    </PageShell>
  )
}

export default IndustrySpecificAiPage
