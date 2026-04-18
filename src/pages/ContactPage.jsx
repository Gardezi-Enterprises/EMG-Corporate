import PageShell from '../components/PageShell'

function ContactPage() {
  return (
    <PageShell title='Contact Us - Lumina AI Architecture'>
      <div>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center py-20 px-6">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Form */}
            <div className="flex flex-col justify-center">
              <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-4">
                Ready to define your architecture?
              </h1>
              <p className="font-body text-on-surface-variant text-lg mb-12 max-w-lg">
                Initiate a dialogue with our architects. We design intelligent systems that transform enterprise complexity into competitive advantage.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-on-surface-variant" htmlFor="first_name">First Name</label>
                    <input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary-container focus:ring-0 rounded-t px-4 py-3 transition-colors text-on-surface font-body" id="first_name" placeholder="Jane" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-sm text-on-surface-variant" htmlFor="last_name">Last Name</label>
                    <input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary-container focus:ring-0 rounded-t px-4 py-3 transition-colors text-on-surface font-body" id="last_name" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm text-on-surface-variant" htmlFor="email">Work Email</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary-container focus:ring-0 rounded-t px-4 py-3 transition-colors text-on-surface font-body" id="email" placeholder="jane@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm text-on-surface-variant" htmlFor="company">Company Name</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary-container focus:ring-0 rounded-t px-4 py-3 transition-colors text-on-surface font-body" id="company" placeholder="Acme Corp" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm text-on-surface-variant" htmlFor="message">Project Architecture Brief</label>
                  <textarea className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary-container focus:ring-0 rounded-t px-4 py-3 transition-colors text-on-surface font-body resize-none" id="message" placeholder="Describe your technical challenges..." rows={4} defaultValue={""} />
                </div>
                <button className="bg-primary text-on-primary font-label font-medium px-8 py-4 rounded w-full md:w-auto hover:bg-surface-tint transition-colors mt-4" type="submit">
                  Initialize Consultation
                </button>
              </form>
            </div>
            {/* Right: Office Details & AI Graphic */}
            <div className="relative hidden lg:flex flex-col justify-center items-end">
              {/* Abstract AI Node Graphic (CSS based) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-tertiary rounded-full blur-3xl mix-blend-multiply" />
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-container rounded-full blur-2xl mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-tertiary rounded-full blur-2xl mix-blend-screen" />
              </div>
              {/* Glassmorphism Office Card */}
              <div className="bg-surface/70 backdrop-blur-[20px] p-8 rounded shadow-[0_20px_40px_rgba(0,104,119,0.06)] border border-outline-variant/10 relative z-10 w-full max-w-md">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-tertiary mb-8" />
                <div className="space-y-8">
                  <div>
                    <h3 className="font-headline font-medium text-lg text-on-surface mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>location_on</span>
                      Global Headquarters
                    </h3>
                    <p className="font-body text-on-surface-variant">
                      100 Innovation Way<br />
                      Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                  <div>
                    <h3 className="font-headline font-medium text-lg text-on-surface mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>mail</span>
                      Direct Inquiries
                    </h3>
                    <p className="font-body text-on-surface-variant">
                      architecture@lumina.ai<br />
                      press@lumina.ai
                    </p>
                  </div>
                  <div className="pt-6 border-t border-surface-variant">
                    <p className="font-body text-sm text-on-surface-variant flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>bolt</span>
                      Average response time: <span className="text-on-surface font-medium">Under 2 hours</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}

      </div>
    </PageShell>
  )
}

export default ContactPage
