import type { ReactNode } from 'react'

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/arley-santana-53546918b',
  github: 'https://github.com/ArleyPereira',
  youtube: 'https://www.youtube.com/@hellodevs',
  cv: `${import.meta.env.BASE_URL}ARLEY_PEREIRA_SANTANA.pdf`,
  email: 'mailto:arley1995@ucl.br',
  whatsapp: 'https://wa.me/5527996375733',
}

const PLAY_STORE_APPS = [
  {
    name: 'ComproPay',
    url: 'https://play.google.com/store/apps/details?id=br.com.compropay.app&hl=pt_BR',
    description:
      'Pagamentos e rotinas de publicação/gerenciamento na Play Store. Atuação em novas features e manutenção.',
    tags: ['Kotlin', 'Android', 'Pagamentos', 'Play Store'],
  },
  {
    name: 'Voe (B2W)',
    url: 'https://play.google.com/store/apps/details?id=com.b2wdigital.voe&hl=pt_BR',
    description:
      'Aplicativo Android (B2W). Contribuições em evolução do produto, qualidade e entrega contínua.',
    tags: ['Android', 'Kotlin', 'Manutenção', 'Entrega'],
  },
  {
    name: 'Spock (B2W)',
    url: 'https://play.google.com/store/apps/details?id=com.b2wdigital.spock&hl=pt_BR',
    description:
      'Aplicativo Android (B2W). Participação em correções e melhorias com foco em experiência do usuário.',
    tags: ['Android', 'Kotlin', 'Bugs', 'UX'],
  },
]

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        'inline-flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-4 py-2 text-sm text-[color:var(--color-text)] shadow-[var(--shadow-soft)]/0 transition',
        'hover:shadow-[var(--shadow-soft)] hover:border-white/15 hover:-translate-y-0.5',
        'focus-visible:outline-none',
        className,
      )}
    >
      {children}
      <span aria-hidden className="text-white/35">
        ↗
      </span>
    </a>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  )
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="text-xs font-semibold tracking-[0.24em] text-white/55">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-sm text-[color:var(--color-muted)] md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[color:var(--color-bg)]/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white/90">
              AS
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white/90">Arley Santana</div>
              <div className="text-xs text-white/55">Android Developer</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#experiencia">
              Experiência
            </a>
            <a className="hover:text-white" href="#habilidades">
              Skills
            </a>
            <a className="hover:text-white" href="#projetos">
              Projetos
            </a>
            <a className="hover:text-white" href="#contato">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LINKS.cv}
              className="hidden rounded-xl bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-2)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 md:inline-flex"
            >
              Baixar CV (PDF)
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/7"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/7"
              aria-label="GitHub"
              title="GitHub"
            >
              GH
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 md:py-24">
            <div className="self-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                Kotlin • Jetpack Compose • Clean Architecture • Multimódulos • KMP
              </p>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Desenvolvedor Android focado em apps escaláveis e experiência de usuário.
              </h1>
              <p className="mt-5 text-pretty text-base text-[color:var(--color-muted)] md:text-lg">
                Atuo com Kotlin, Jetpack Compose e arquitetura limpa, colaborando com times ágeis
                para entregar aplicações de alta qualidade e evolução contínua.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={LINKS.github}>GitHub</ExternalLink>
                <ExternalLink href={LINKS.youtube}>YouTube</ExternalLink>
                <a
                  href={LINKS.cv}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/7 md:hidden"
                >
                  Baixar CV (PDF)
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">Resumo</p>
                    <p className="mt-2 text-sm text-white/65">
                      Vitória, ES • Android Developer • Kotlin/Compose
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Disponível para oportunidades
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Empresa atual</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">
                      Americanas Delivery
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Desde</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">01/2022</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Experiência</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">Android (Kotlin)</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Arquitetura</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">Clean + Multimódulos</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'Jetpack Compose',
                    'Navigation/Room/Lifecycle',
                    'Retrofit/Ktor/OkHttp',
                    'Hilt/Koin',
                    'Firebase (Crashlytics, Auth, etc.)',
                    'Play Store releases',
                  ].map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <SectionTitle
              eyebrow="EXPERIÊNCIA"
              title="Trabalhos recentes"
              subtitle="Contribuições focadas em qualidade, evolução contínua e entregas com impacto no usuário final."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">Americanas Delivery</p>
                    <p className="mt-1 text-xs text-white/55">Desenvolvedor Android • 01/2022 — Atual</p>
                  </div>
                  <Pill>Vitória, ES</Pill>
                </div>

                <div className="mt-5 space-y-3 text-sm text-white/70">
                  <p className="font-semibold text-white/85">App do Cliente</p>
                  <p>
                    Correção de bugs, desenvolvimento de novas funcionalidades e colaboração com o
                    time no planejamento técnico, contribuindo para evolução e escalabilidade.
                  </p>
                  <p className="font-semibold text-white/85">App do Entregador</p>
                  <p>
                    Correções e features para entregadores, incluindo exibição de novas corridas,
                    gerenciamento de entregas e acompanhamento em tempo real.
                  </p>
                </div>
              </div>

              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">ComproPay</p>
                    <p className="mt-1 text-xs text-white/55">Desenvolvedor Android • 01/2021 — 12/2021</p>
                  </div>
                  <Pill>Pagamentos</Pill>
                </div>

                <div className="mt-5 space-y-3 text-sm text-white/70">
                  <p>
                    Desenvolvimento de funcionalidades relacionadas a pagamentos e manutenção do app.
                  </p>
                  <p>
                    Responsável por publicações e gerenciamento de versões na Play Store.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {['Kotlin', 'APIs REST', 'Play Store', 'Qualidade', 'Manutenção'].map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <SectionTitle
              eyebrow="HABILIDADES"
              title="Stack e competências"
              subtitle="Ferramentas e práticas que uso para construir apps Android modernos e fáceis de evoluir."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Android',
                  items: [
                    'Kotlin / Java',
                    'Jetpack Compose / XML',
                    'Jetpack Components (Navigation, Room, Lifecycle, LiveData, ViewModel)',
                  ],
                },
                {
                  title: 'Arquitetura',
                  items: [
                    'Clean Architecture',
                    'Arquitetura multi-módulos',
                    'Injeção de dependência (Hilt, Koin)',
                  ],
                },
                {
                  title: 'Integrações',
                  items: [
                    'API REST (Retrofit, Ktor, OkHttp)',
                    'Firebase (Auth, Database, Storage, Crashlytics, Messaging)',
                    'Publicação/versões na Play Store',
                    'Compose Multiplatform (KMP, Koin, Ktor, Voyager)',
                  ],
                },
              ].map((g) => (
                <div
                  key={g.title}
                  className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
                >
                  <p className="text-sm font-semibold text-white/90">{g.title}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-1 text-[color:var(--color-accent)]">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <SectionTitle
              eyebrow="PROJETOS"
              title="Apps em que atuei"
              subtitle="Links para a Play Store (quando disponíveis). Se você quiser, eu também adiciono prints e detalhes de contribuição por projeto."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {PLAY_STORE_APPS.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(
                    'group rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition',
                    'hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[var(--shadow-soft)]',
                    'focus-visible:outline-none',
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-white/90">{app.name}</p>
                    <span className="text-white/35 transition group-hover:text-white/55" aria-hidden>
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/65">{app.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {app.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <SectionTitle
              eyebrow="CONTATO"
              title="Vamos conversar"
              subtitle="Para processos seletivos, freelas ou parcerias."
            />

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
              <ExternalLink href={LINKS.linkedin} className="justify-center">
                LinkedIn
              </ExternalLink>
              <ExternalLink href={LINKS.github} className="justify-center">
                GitHub
              </ExternalLink>
              <ExternalLink href={LINKS.youtube} className="justify-center">
                YouTube
              </ExternalLink>
            </div>

            <div className="mx-auto mt-4 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-2">
              <a
                href={LINKS.email}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/7"
              >
                Email: arley1995@ucl.br
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/7"
              >
                WhatsApp: (27) 99637-5733
              </a>
            </div>

            <p className="mt-10 text-center text-xs text-white/45">
              © {new Date().getFullYear()} Arley Pereira Santana • Feito com React + Vite
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
