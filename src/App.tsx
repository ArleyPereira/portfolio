import type { ReactNode } from 'react'
import fotoArley from './assets/foto-arley.jpeg'
import iconComproPay from './assets/apps/compropay.png'
import iconSpock from './assets/apps/spock.png'
import iconEntregaFlash from './assets/apps/americanas-entrega-flash.png'

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
      'App de pagamentos com fluxos de transações e rotinas do dia a dia. Atuei na evolução de funcionalidades, correções e no processo de releases/publicação na Play Store.',
    iconSrc: iconComproPay,
  },
  {
    name: 'Americanas Entrega Flash',
    url: 'https://play.google.com/store/apps/details?id=com.b2wdigital.voe&hl=pt_BR',
    description:
      'App do entregador para receber corridas, aceitar/acompanhar entregas e seguir etapas até a conclusão. Contribuí com correções e melhorias focadas em performance e experiência em tempo real.',
    iconSrc: iconEntregaFlash,
  },
  {
    name: 'Spock',
    url: 'https://play.google.com/store/apps/details?id=com.b2wdigital.spock&hl=pt_BR',
    description:
      'Aplicativo Android de uso interno/operacional, com foco em rotinas e produtividade. Atuei em manutenção, correção de bugs e melhorias para elevar estabilidade e usabilidade.',
    iconSrc: iconSpock,
  },
]

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.51v6.23zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
    </svg>
  )
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.18c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.19a10.98 10.98 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.62 1.59.23 2.76.11 3.05.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
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
            <img
              src={fotoArley}
              alt="Arley Santana"
              className="size-9 rounded-xl border border-white/10 object-cover"
              loading="eager"
              decoding="async"
            />
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
              className="hidden rounded-xl bg-gradient-to-r from-[color:var(--color-accent-green)] to-[color:var(--color-accent-green-2)] px-4 py-2 text-sm font-semibold text-black shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 md:inline-flex"
            >
              Baixar CV (PDF)
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/7"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <IconLinkedIn className="size-5" />
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/7"
              aria-label="GitHub"
              title="GitHub"
            >
              <IconGitHub className="size-5" />
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
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-white/70 whitespace-nowrap">
                    <span
                      aria-hidden
                      className="size-2 rounded-full"
                      style={{ backgroundColor: '#00ff88' }}
                    />
                    Disponível para oportunidades
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Empresa atual</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">
                      Americanas
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Desde</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">01/2022</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs text-white/55">Experiência</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">Android (Kotlin / Java)</p>
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
              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">Americanas</p>
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

              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
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
                  className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                >
                  <p className="text-sm font-semibold text-white/90">{g.title}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-1 text-[color:var(--color-accent-green)]">•</span>
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
                    <div className="flex items-center gap-3">
                      <div className="size-10 overflow-hidden rounded-2xl">
                        <img
                          src={app.iconSrc}
                          alt=""
                          className="size-10 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-sm font-semibold text-white/90">{app.name}</p>
                    </div>
                    <span className="text-white/35 transition group-hover:text-white/55" aria-hidden>
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/65">{app.description}</p>
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
              © {new Date().getFullYear()} Arley Pereira Santana
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
