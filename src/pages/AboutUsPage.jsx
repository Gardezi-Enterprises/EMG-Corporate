import PageShell from '../components/PageShell'

function AboutUsPage() {
  return (
    <PageShell title='About Us - Lumina AI Architecture'>
      <div>

        <main>
          {/* Section 1: Our Story (Hero) */}
          <section className="relative overflow-hidden py-32 px-6 bg-surface">
            {/* Subtle AI ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface mb-8">
                Architecting the <span className="text-gradient">Intelligent</span> Void
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-light">
                We exist at the intersection of human intuition and computational power. Lumina AI Architecture was founded on the principle that true technological advancement doesn't replace humanity—it amplifies it. Our mission is to build digital frameworks that are as empathetic as they are precise.
              </p>
            </div>
          </section>
          {/* Section 2: Values */}
          <section className="py-24 px-6 bg-surface-container-low relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">Core Principles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="bg-surface-container-lowest p-10 rounded group hover:bg-surface-bright transition-colors duration-500 relative overflow-hidden shadow-[0_40px_60px_-15px_rgba(0,104,119,0.04)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-primary-container/20 text-primary w-14 h-14 rounded flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl" data-icon="architecture">architecture</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Structural Precision</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Every system we design is built on a foundation of unyielding logic. We treat code as structural engineering, ensuring scalability and resilience in every layer.
                  </p>
                </div>
                {/* Value 2 */}
                <div className="bg-surface-container-lowest p-10 rounded group hover:bg-surface-bright transition-colors duration-500 relative overflow-hidden shadow-[0_40px_60px_-15px_rgba(0,104,119,0.04)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-tertiary-container/30 text-tertiary w-14 h-14 rounded flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl" data-icon="psychology">psychology</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Adaptive Intelligence</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Static solutions are obsolete. We engineer environments that learn, adapt, and evolve alongside the complex challenges they are meant to solve.
                  </p>
                </div>
                {/* Value 3 */}
                <div className="bg-surface-container-lowest p-10 rounded group hover:bg-surface-bright transition-colors duration-500 relative overflow-hidden shadow-[0_40px_60px_-15px_rgba(0,104,119,0.04)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-inverse-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-secondary-container/50 text-primary-fixed-variant w-14 h-14 rounded flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl" data-icon="groups">groups</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Human Centricity</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Technology must serve humanity. We measure the success of our algorithms not just by efficiency, but by the cognitive ease they bring to the end user.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: Meet the Team */}
          <section className="py-24 px-6 bg-surface relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div className="max-w-2xl">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">The Minds Behind the Machine</h2>
                  <p className="font-body text-lg text-on-surface-variant">A multidisciplinary collective of architects, engineers, and ethicists.</p>
                </div>
                <button className="hidden md:flex text-primary font-body font-medium items-center hover:bg-primary-fixed-dim/10 px-4 py-2 rounded transition-colors mt-6 md:mt-0">
                  View Open Roles
                  <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
              {/* Asymmetric Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Lead - Spans 8 columns */}
                <div className="md:col-span-8 bg-surface-container-low rounded relative overflow-hidden group h-[500px]">
                  <img alt="Team Member" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of confident female tech executive in modern glass office with subtle cyan ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt4kXOfKtor3zuBgSw2FNtw3yAIMyk6wF-Fk8dtWTVJzeQZhU3K33emfOEJNtjPIABmjCSzljk7yMl05Xncoq9M_VJcpz1m0BHYkQMoxa6Yec7m8InAQgxCi5WBYAh_9eWBFerKNvftKFldoB5408-zWj3OBmwneZ8h4SmF85Q_ITlMRdrPHVmGffLRmKfzMDwzrN_clPPzhDB2QmcItBUoZxhhTv0urS7k3Dzw5tUmqVYuJucCxjx-BzTM96LDlKQN2eTWgR7DQw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                    <div>
                      <h3 className="font-headline text-3xl font-bold text-white mb-2">Elena Rostova</h3>
                      <p className="font-body text-primary-fixed">Chief AI Architect &amp; Founder</p>
                    </div>
                    <div className="bg-surface/20 backdrop-blur-md p-3 rounded text-white flex items-center justify-center">
                      <span className="material-symbols-outlined" data-icon="hub">hub</span>
                    </div>
                  </div>
                </div>
                {/* Secondary - Spans 4 columns */}
                <div className="md:col-span-4 bg-surface-container-low rounded relative overflow-hidden group h-[500px]">
                  <img alt="Team Member" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of male data scientist in minimalist office setting with soft shadows and sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwM4DnaEKhJUbN2OfL5uvFif_gMW3McDIsxQSZVOIILP5fuBccWKi_oO3j29-O8LbPMI4ijaCikzAX_WdmGTXfCECFCYOkoqLeUsqSPp1-InPV8HGkjyu8TYs5pU0gKhWrMgNuIM4YMeAXaXwWo7v5rYu1koXGHJ5KNcccsqs8pbIH8g-fTOyzrJbA_6YL2QZre5BS71fvxth8CixuRSpFMO6duQCNpic0hDtZpOxNW-sHfiZJ7hzO3dBbpVhbnXJhaibj6BSBUE8" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-headline text-xl font-bold text-white mb-1">Marcus Chen</h3>
                    <p className="font-body text-surface-variant text-sm">Head of Machine Learning</p>
                  </div>
                </div>
                {/* Tertiary 1 - Spans 4 columns */}
                <div className="md:col-span-4 bg-surface-container-low rounded relative overflow-hidden group h-[400px]">
                  <img alt="Team Member" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="portrait of female UX researcher against clean light grey background with professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh-qWrg0OQJ1kU8sJhwzEuH9aOaNSbE1GG0FD1F0vh9SFOK7QjS9W4g_6feXf_-4ngP6trEFEvl2YgKASK8z9iQ-fBaq064nIv2KSfLbqQoIwiUwPs5jdYlEeidb8RLc6Ba-8nF-hNEo806M8i3c0NZGWlPUUjuyNLWS27q6emPLaR3qmaoVxBXDoKo9nWEl4gboHu9W__WfqkunX8RHz3FbIXef2OQYZ4ULDK0eN9AMffwzwmpQc9VZJb9cZ-3ZyCLrSrADwCP2A" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-headline text-xl font-bold text-white mb-1">Sarah Jenkins</h3>
                    <p className="font-body text-surface-variant text-sm">Lead Human-Systems Interaction</p>
                  </div>
                </div>
                {/* Tertiary 2 - Spans 8 columns */}
                <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded flex flex-col justify-center border-l-4 border-tertiary">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-6">Join the Collective</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                    We are constantly seeking brilliant minds who view code not just as syntax, but as a medium for solving complex human problems. If you thrive in the space between rigid logic and creative abstraction, there is a place for you here.
                  </p>
                  <div>
                    <button className="bg-primary-container text-on-primary-container font-body font-medium px-6 py-3 rounded hover:bg-primary-container/80 transition-colors inline-flex items-center">
                      View Opportunities
                      <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                  </div>
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

export default AboutUsPage
