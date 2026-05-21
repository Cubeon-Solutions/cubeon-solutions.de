import ContactForm from "@/components/ui/ContactForm";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-heading)] mb-4">
            Kontakt
          </h2>
          <p className="text-[var(--color-body)] max-w-xl mx-auto leading-relaxed">
            Wir sitzen in Kassel — remote oder vor Ort. Wählen Sie den Weg,
            der am besten zu Ihnen passt.
          </p>
        </div>

        {/* Options 1 & 2 — WhatsApp + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* WhatsApp */}
          <div>
            <OptionLabel number={1} label="WhatsApp" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-5 transition-shadow hover:shadow-md group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#e7faea" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={{ fill: "#25D366" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.057 23.428a.75.75 0 0 0 .921.921l5.555-1.479A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.435l-.372-.22-3.849 1.024 1.024-3.742-.242-.384A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)] mb-0.5">Direkt chatten</p>
                <p className="text-sm font-medium group-hover:underline" style={{ color: "#25D366" }}>
                  Auf WhatsApp schreiben
                </p>
              </div>
            </a>
          </div>

          {/* Email */}
          <div>
            <OptionLabel number={2} label="E-Mail" />
            <a
              href="mailto:kontakt@cubeon-solutions.de"
              className="flex items-center gap-4 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-5 transition-shadow hover:shadow-md group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[var(--color-muted)] mb-0.5">Schreiben Sie uns</p>
                <p className="text-sm font-medium text-[var(--color-brand)] group-hover:underline truncate">
                  kontakt@cubeon-solutions.de
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[var(--color-border)]" />
          <span className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-widest">oder</span>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        {/* Option 3 — Contact form */}
        <div>
          <OptionLabel number={3} label="Kontaktformular" />
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function OptionLabel({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-2 px-1">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-brand)] text-white text-[11px] font-bold flex-shrink-0">
        {number}
      </span>
      <span className="text-sm font-semibold text-[var(--color-heading)]">{label}</span>
    </div>
  );
}
