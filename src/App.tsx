import { useEffect, useState, type ReactNode } from 'react'
import fotoArley from './assets/foto-arley.jpeg'
import iconComproPay from './assets/apps/compropay.png'
import iconSpock from './assets/apps/spock.png'
import iconEntregaFlash from './assets/apps/americanas-entrega-flash.png'

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/arley-santana-53546918b',
  github: 'https://github.com/ArleyPereira',
  youtube: 'https://www.youtube.com/@hellodevs',
  cv: `${import.meta.env.BASE_URL}ARLEY_PEREIRA_SANTANA.pdf`,
  email: 'dev.arley.santana@gmail.com',
  whatsapp: 'https://wa.me/5527996375733',
  valorizze: 'https://valorizze.app/',
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

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.3.5C1.6 4.3.8 5.1.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.8.5 9.3.5 9.3.5s7.5 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5L15.8 12 9.5 15.5z" />
    </svg>
  )
}

function ExternalLink({
  href,
  children,
  className,
  icon,
}: {
  href: string
  children: ReactNode
  className?: string
  icon?: ReactNode
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
      {icon ? <span className="text-white">{icon}</span> : null}
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

function ExperienceBlock({
  title,
  bullets,
  className,
}: {
  title: ReactNode
  bullets: string[]
  className?: string
}) {
  return (
    <div className={className}>
      <p className="font-semibold text-white/85">{title}</p>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-white/70 marker:text-[color:var(--color-accent-green)]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
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
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(t)
  }, [toast])

  async function copyEmail() {
    const value = LINKS.email
    try {
      await navigator.clipboard.writeText(value)
      setToast('Email copiado')
    } catch {
      try {
        const el = document.createElement('textarea')
        el.value = value
        el.setAttribute('readonly', 'true')
        el.style.position = 'fixed'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        setToast('Email copiado')
      } catch {
        setToast('Não foi possível copiar')
      }
    }
  }

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
            <a className="hover:text-white" href="#projeto-pessoal">
              Projeto pessoal
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
              Baixar currículo (PDF)
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Desenvolvedor Android com foco em apps escaláveis e alta performance.
            </h1>
            <p className="mt-5 text-pretty text-base text-[color:var(--color-muted)] md:text-lg">
              Kotlin, Jetpack Compose e arquitetura multi-módulos. Integração de APIs, Firebase e
              bibliotecas como Hilt e Coroutines para entregar produtos com qualidade técnica e ótima
              experiência do usuário.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ExternalLink href={LINKS.linkedin} icon={<IconLinkedIn className="size-4" />}>
                LinkedIn
              </ExternalLink>
              <ExternalLink href={LINKS.github} icon={<IconGitHub className="size-4" />}>
                GitHub
              </ExternalLink>
              <ExternalLink href={LINKS.youtube} icon={<IconYouTube className="size-4" />}>
                YouTube
              </ExternalLink>
              <a
                href={LINKS.cv}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/7 md:hidden"
              >
                Baixar currículo (PDF)
              </a>
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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">Americanas</p>
                    <p className="mt-1 text-xs text-white/55">Desenvolvedor Android • 01/2022 — Atual</p>
                  </div>
                  <Pill>Delivery</Pill>
                </div>

                <div className="mt-5 space-y-3 text-sm text-white/70">
                  <ExperienceBlock
                    title={
                      <>
                        Americanas Delivery (Cliente final) <span className="text-white/55">— descontinuado</span>
                      </>
                    }
                    bullets={[
                      'Correção de bugs e desenvolvimento de funcionalidades para o cliente, colaborando com o time no planejamento técnico e organização do backlog.',
                      'Stack Android nativa com Kotlin, arquitetura com Jetpack (Navigation/ViewModel/Lifecycle), consumo de APIs REST (Retrofit/OkHttp) e monitoramento com Firebase Crashlytics.',
                    ]}
                  />

                  <ExperienceBlock
                    className="mt-4"
                    title="App do Entregador"
                    bullets={[
                      'Desenvolvimento de features do fluxo do entregador (autenticação/onboarding, jornadas da corrida/entrega e menus), com evolução contínua e correções de bugs.',
                      'Arquitetura multi-módulos e UI com Jetpack Compose + ViewBinding/DataBinding, navegação com Jetpack Navigation (SafeArgs).',
                      'Stack: Koin (DI), Room, Retrofit/OkHttp, Kotlin Serialization, Firebase (Analytics/Messaging/Crashlytics/Remote Config).',
                      'Capacidades do app: Maps/Location, câmera e leitura de códigos (ML Kit/Barcode), além de animações com Lottie.',
                    ]}
                  />

                  <ExperienceBlock
                    className="mt-4"
                    title="App de Abastecimento (Motoristas)"
                    bullets={[
                      'Desenvolvimento e manutenção de app operacional para motoristas (rotina de abastecimento/logística), com foco em confiabilidade, performance e evolução de features.',
                      'UI com Jetpack Compose + ViewBinding e arquitetura modular (core/data/domain/design), com tarefas assíncronas usando WorkManager.',
                      'Stack: Hilt (DI), Room, Retrofit/OkHttp, Coroutines, Firebase (Crashlytics/Messaging/Remote Config/Performance).',
                      'Recursos: Maps/Location, CameraX, scanner (ZXing), captura de assinatura e bibliotecas de UX/analytics (ex.: UXCam/Smartlook).',
                    ]}
                  />
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
                  <ExperienceBlock
                    title="Destaques"
                    bullets={[
                      'Correção de bugs e desenvolvimento de features de pagamentos, cadastro/recuperação, perfil e fluxos do app, atuando em arquitetura multi-módulos (core/data/domain/features).',
                      'Implementação de UI híbrida (Jetpack Compose + ViewBinding/XML) e navegação com Jetpack Navigation (SafeArgs).',
                      'Integrações e infraestrutura mobile: Retrofit/OkHttp, persistência com Room e DataStore, Firebase (Crashlytics/Messaging/Analytics) e OneSignal.',
                      'Recursos do dispositivo/SDKs: Maps/Location, leitura de códigos (ZXing/ML Kit), biometria, animações (Lottie) e DI com Hilt (e módulos usando Koin).',
                    ]}
                  />
                </div>
              </div>

              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-white/90">Vitória Soft do Brasil</p>
                    <p className="mt-1 text-xs text-white/55">Suporte técnico • 05/2019 — 06/2021</p>
                  </div>
                  <Pill>Suporte</Pill>
                </div>

                <div className="mt-5 space-y-3 text-sm text-white/70">
                  <ExperienceBlock
                    title="Destaques"
                    bullets={[
                      'Atendimento e suporte técnico a clientes em sistemas para farmácias de manipulação, atuando na resolução de incidentes e dúvidas operacionais do dia a dia.',
                      'Suporte a rotinas críticas como checkout/PDV, emissão de notas fiscais e demais fluxos de venda, garantindo continuidade da operação.',
                      'Diagnóstico de falhas, análise de causa e orientação de correções/configurações, com registro e acompanhamento até a normalização.',
                      'Apoio a implantações/atualizações, configuração de ambiente e treinamento rápido de usuários, com foco em agilidade e boa experiência do cliente.',
                    ]}
                  />
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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Android',
                  items: [
                    'Kotlin / Java',
                    'Jetpack Compose / XML',
                    'Jetpack Components (Navigation, Room, Lifecycle, LiveData, ViewModel)',
                    'Testes unitários e instrumentados',
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
                    'CI / CD',
                  ],
                },
                {
                  title: 'I.A & Produtividade',
                  items: [
                    'Replicar telas a partir do Figma com mais agilidade',
                    'Revisão de código e sugestões de refactor',
                    'Automação de fluxos repetitivos (scripts/boilerplate)',
                    'Criação de testes automatizados e cenários',
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

        <section id="projeto-pessoal" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <SectionTitle
              eyebrow="PROJETO PESSOAL"
              title="Projeto pessoal"
              subtitle="Valorizze — finanças pessoais com web e mobile (Compose Multiplatform)."
            />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b1220] via-[#0b0f16] to-[#0b1220] p-6 shadow-[var(--shadow-soft)] md:p-10">
              <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.22),transparent_60%)]" />
              <div className="pointer-events-none absolute -right-28 top-10 size-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_62%)]" />

              <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                    <span aria-hidden className="text-[color:var(--color-accent-green)]">
                      ★
                    </span>
                    Experiência premium no web e mobile
                  </p>

                  <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Seu dinheiro sob{' '}
                    <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-[color:var(--color-accent-green)] bg-clip-text text-transparent">
                      controle total
                    </span>
                  </h2>

                  <p className="mt-5 text-pretty text-sm text-white/65 md:text-base">
                    O Valorizze centraliza contas, cartões e transações em uma interface clara, rápida e
                    elegante para você decidir melhor todo dia.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Pill>Web</Pill>
                    <Pill>Android</Pill>
                    <Pill>iOS</Pill>
                    <Pill>Compose Multiplatform</Pill>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href={LINKS.valorizze}
                      target="_blank"
                      rel="noreferrer"
                      className={classNames(
                        'inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl',
                        'bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_55px_rgba(0,0,0,0.45)]',
                        'transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(0,0,0,0.55)]',
                        'focus-visible:outline-none',
                        'sm:w-auto',
                      )}
                    >
                      Abrir site
                      <span aria-hidden className="text-black/45">
                        ↗
                      </span>
                    </a>

                    <div className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-xs text-white/55 sm:w-auto">
                      Apps nas lojas: <span className="font-semibold text-white/75">em breve</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-[22px] border border-white/10 bg-white/3 p-4 backdrop-blur">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/15 via-white/5 to-transparent p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
                            VISÃO GERAL DO MÊS
                          </p>
                          <p className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                            R$ 19.450,90
                          </p>
                        </div>
                        <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70">
                          ↗
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
                        <p className="text-xs text-white/65">Receitas</p>
                        <p className="mt-2 text-lg font-semibold text-white">R$ 8.900,00</p>
                        <p className="mt-1 text-[11px] text-white/55">Entrada total do mês</p>
                      </div>
                      <div className="rounded-2xl border border-orange-400/15 bg-orange-400/10 p-4">
                        <p className="text-xs text-white/65">Despesas</p>
                        <p className="mt-2 text-lg font-semibold text-white">R$ 4.200,00</p>
                        <p className="mt-1 text-[11px] text-white/55">Saídas registradas no período</p>
                      </div>
                      <div className="rounded-2xl border border-sky-400/15 bg-sky-400/10 p-4">
                        <p className="text-xs text-white/65">Fatura de cartão</p>
                        <p className="mt-2 text-lg font-semibold text-white">R$ 2.180,00</p>
                        <p className="mt-1 text-[11px] text-white/55">Vence em 10 dias</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs text-white/65">Relatórios</p>
                        <p className="mt-2 text-sm font-semibold text-white">Resumo mensal disponível</p>
                        <p className="mt-1 text-[11px] text-white/55">
                          Fluxo de caixa e comparativo por categoria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <ExternalLink
                href={LINKS.linkedin}
                className="justify-center"
                icon={<IconLinkedIn className="size-4" />}
              >
                LinkedIn
              </ExternalLink>
              <ExternalLink
                href={LINKS.github}
                className="justify-center"
                icon={<IconGitHub className="size-4" />}
              >
                GitHub
              </ExternalLink>
              <ExternalLink
                href={LINKS.youtube}
                className="justify-center"
                icon={<IconYouTube className="size-4" />}
              >
                YouTube
              </ExternalLink>
            </div>

            <div className="mx-auto mt-4 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/7"
              >
                Email: {LINKS.email}
              </button>
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

      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
      >
        {toast ? (
          <div className="pointer-events-none inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[color:var(--color-surface)] px-4 py-3 text-sm text-white/85 shadow-[var(--shadow-soft)]">
            <span
              aria-hidden
              className="size-2 rounded-full"
              style={{ backgroundColor: '#00ff88' }}
            />
            {toast}
          </div>
        ) : null}
      </div>
    </div>
  )
}
