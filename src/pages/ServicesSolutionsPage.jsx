import PageShell from '../components/PageShell'

function ServicesSolutionsPage() {
  return (
    <PageShell title='Services &amp; Solutions - Lumina AI'>
      <div>

        {/* Hero Section */}
        <header className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-surface-container-low to-surface -z-10" />
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface leading-[1.1] mb-6">
                Architecting <br />
                <span className="bg-gradient-to-r from-primary to-tertiary text-gradient">Intelligence.</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                We bridge the gap between complex artificial intelligence and foundational enterprise architecture, delivering tailored solutions that drive unprecedented operational efficiency and digital transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="bg-primary text-on-primary font-label font-medium px-8 py-4 rounded flex items-center gap-2 hover:bg-primary-fixed-variant transition-colors" href="#services">
                  Explore Solutions
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_downward">arrow_downward</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              {/* Abstract Hero Metaphor */}
              <div className="aspect-square bg-surface-container-lowest ambient-shadow rounded relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container" />
                <img alt="Abstract Intelligence" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="abstract geometric composition of glowing crystalline structures and data lines in ethereal white and subtle cyan lighting, conveying advanced computation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIjVOuiDL0oY0eA7nPfdt2ekb6zZm55M2FLmskeNZcW57aDedS7ye7IBrCw0rKZkxklSOxoU7r49DKweiWvmMT3rnBfNqykd6XY7nGUbCIFLwYfSUio1SqThcsRr96sreDmQG1H17SBMQCkrgVB9Q5NXdAZ9NEsr8XoRUQNVAQUfIQ5gE8sRc6DNP3j7_JSFK_4rysrAxoyC4hLw8yhONGvfdciDt7mYN13lX-JV9QjwhBmVVcnY9MmZt6TE08dAwOqHnM_5eCHys" />
              </div>
            </div>
          </div>
        </header>
        {/* Services Section (Alternating Editorial Layout) */}
        <section className="py-24 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">Strategic Capabilities</h2>
              <p className="font-body text-on-surface-variant text-lg">Our core disciplines are designed to interlock, providing end-to-end transformation from initial strategy to deployed architecture.</p>
            </div>
            <div className="space-y-32">
              {/* Service 1: AI Consulting */}
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="aspect-[4/3] bg-surface-container-lowest ambient-shadow rounded overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-primary" />
                    <img alt="AI Consulting Visual" className="w-full h-full object-cover" data-alt="macro photography of interconnected luminous fiber optic threads in a dark void, representing a complex neural network and data flow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFsTSbkh_5FfCv4UQPiTMWKmHq4u4AY4KGRBy1WJEYlVx4Vfp2OELQY2h5VFRJ6RnXZoc88-stBjsd0_A660t2IdTPoD4eknk75WVKB6NWhUycel1OSU6ZkaPEYzMOXgJ-muzmhbTs3RfLP2nyYEuRJoxKMhazSVua1MFhmhxCqZeBAU9hLZ3oB7lbBMbEM2Wopp5QFdizzrXKNHFH3Y88-e-ARRQbZqKPkqmgqWt74T5C-sQFyNgPUW1oRDdoL96CZW_QI7-fgpg" />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="inline-block px-3 py-1 bg-surface rounded text-primary font-label text-sm font-medium tracking-wide">01 // Strategy</div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Applied AI Consulting</h3>
                  <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                    Navigate the complexities of machine learning and generative models with expert guidance. We analyze your operational bottlenecks and design pragmatic AI roadmaps that prioritize ROI over hype.
                  </p>
                  <ul className="space-y-4 font-body text-on-surface-variant mt-6">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>Predictive modeling and data readiness assessments.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>Generative AI integration strategy for workflow automation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>Ethical AI governance and compliance frameworks.</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <a className="inline-flex items-center gap-2 text-primary font-label font-medium hover:text-tertiary transition-colors group" href="#">
                      Learn More
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </article>
              {/* Service 2: Software Development */}
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-surface rounded text-primary font-label text-sm font-medium tracking-wide">02 // Engineering</div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Custom Software Architecture</h3>
                  <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                    We build resilient, scalable applications designed from the ground up to support advanced computational loads. Moving beyond legacy monoliths to agile, microservices-driven ecosystems.
                  </p>
                  <ul className="space-y-4 font-body text-on-surface-variant mt-6">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>Cloud-native application development and modernization.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>High-performance modular architecture for scale.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>Secure, enterprise-grade data pipeline construction.</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <a className="inline-flex items-center gap-2 text-primary font-label font-medium hover:text-tertiary transition-colors group" href="#">
                      Learn More
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] bg-surface-container-lowest ambient-shadow rounded overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-primary" />
                    <img alt="Software Architecture Visual" className="w-full h-full object-cover" data-alt="clean modernist architecture detail showing modular glass and steel blocks snapping together in bright daylight, representing robust software engineering" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2pe6Nx9iwelrsRRX2TrXR8uFurgTRJcNm8WR7o8cY-gsWhUNEFskjc5pBoKaeMrXBJpDvb1BkO4Ct35O5K2BAdqIJwI46MSqsCZh2MYobkXFQXHu4D20cs8DoCSVc3HBzo9iiMKREiWE09U8ZF1BmEu90Ks6k0p8Idh5zFHciVvayOIOfwFZgSUTbtv_vf53W_8L705IZEWpg9aZv3kigD802I48JsJszB07wC7GYTD3e8MY26eFuswXH8xClKO9Sk6-VQ0J4WfE" />
                  </div>
                </div>
              </article>
              {/* Service 3: Systems Integration */}
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="aspect-[4/3] bg-surface-container-lowest ambient-shadow rounded overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container" />
                    <img alt="Systems Integration Visual" className="w-full h-full object-cover" data-alt="abstract view of sleek server racks in a pristine white environment with glowing cyan light channels connecting them, symbolizing seamless system integration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7nncxxZhxkXjtTPnjKll5-wIv5Z3jVdUHSaBo4LPmd50xL2XJe6ahD3JevY8g4WLttBe55-i6eewR196SRIiieMLmAyjxZt2Nrwi6D65P02tbuNvZKS1pqIMjq-tv388RAvVll66R0HMM6xkhxbHlwaf5zzMw_BaEx38qCPXFv9avRkbtNN4aCYIeAKrgGZW68HltPIGEJ3_nTAzHAHRQOljoFQapniO5MUWS0jabcupZxeZhjeS3OsLmOhQs9_-JGesBeUVXlCo" />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="inline-block px-3 py-1 bg-surface rounded text-primary font-label text-sm font-medium tracking-wide">03 // Connectivity</div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Intelligent Systems Integration</h3>
                  <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                    Siloed systems hinder innovation. We engineer seamless communication between disparate platforms, automating data flow and creating a unified, intelligent operational layer.
                  </p>
                  <ul className="space-y-4 font-body text-on-surface-variant mt-6">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>API development and robust middleware orchestration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>Legacy system bridging and intelligent data syncing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5" data-icon="check" data-weight="fill">check</span>
                      <span>End-to-end process automation and monitoring.</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <a className="inline-flex items-center gap-2 text-primary font-label font-medium hover:text-tertiary transition-colors group" href="#">
                      Learn More
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Value Proposition / Automation Focus */}
        <section className="py-24 bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant via-surface to-surface" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="blur_on">blur_on</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">The Automation Imperative</h2>
            <p className="font-body text-xl text-on-surface-variant mb-10 leading-relaxed">
              True digital transformation isn't just about adopting new tools; it's about fundamentally rewiring how work gets done. Our solutions prioritize intelligent automation, freeing your human capital to focus on high-order strategic thinking.
            </p>
            <a className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-label font-medium px-8 py-4 rounded hover:bg-inverse-primary transition-colors" href="#">
              Initiate Assessment
            </a>
          </div>
        </section>
        {/* Footer */}

      </div>
    </PageShell>
  )
}

export default ServicesSolutionsPage
