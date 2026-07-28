import Link from "next/link";
import type { ReactNode } from "react";

export const supportedLanguages = ["de", "en", "zh"] as const;
export type Language = (typeof supportedLanguages)[number];
export type SectionKind = "privacy" | "support";

export function isLanguage(value: string): value is Language {
  return supportedLanguages.includes(value as Language);
}

type Copy = {
  locale: string;
  languageLabel: string;
  privacyTitle: string;
  supportTitle: string;
  privacySummary: string;
  supportSummary: string;
  current: string;
  currentText: string;
  updated: string;
  navigation: { privacy: string; support: string; home: string };
};

export const copies: Record<Language, Copy> = {
  de: {
    locale: "de-DE",
    languageLabel: "Deutsch",
    privacyTitle: "Datenschutzerklärung",
    supportTitle: "Support",
    privacySummary:
      "Welche Informationen MyBalcony lokal verarbeitet, wann Daten das Gerät verlassen und welche Wahlmöglichkeiten Sie haben.",
    supportSummary:
      "Hilfe zu Berechtigungen, lokalen Projekten, Solardaten, Datenlöschung und zur TestFlight-Beta.",
    current: "Kurz gesagt",
    currentText:
      "MyBalcony arbeitet lokal, hat kein Nutzerkonto, keine Werbung und kein Tracking. Daten verlassen das Gerät nur bei klar ausgelösten Funktionen.",
    updated: "Stand: 28. Juli 2026",
    navigation: { privacy: "Datenschutz", support: "Support", home: "Start" },
  },
  en: {
    locale: "en-GB",
    languageLabel: "English",
    privacyTitle: "Privacy Policy",
    supportTitle: "Support",
    privacySummary:
      "What MyBalcony processes locally, when information leaves your device, and the choices available to you.",
    supportSummary:
      "Help with permissions, local projects, solar data, data deletion and the TestFlight beta.",
    current: "In brief",
    currentText:
      "MyBalcony is local-first, has no user account, advertising or tracking. Data leaves the device only for clearly initiated features.",
    updated: "Last updated: 28 July 2026",
    navigation: { privacy: "Privacy", support: "Support", home: "Home" },
  },
  zh: {
    locale: "zh-Hans",
    languageLabel: "简体中文",
    privacyTitle: "隐私政策",
    supportTitle: "支持",
    privacySummary:
      "说明 MyBalcony 在本机处理哪些信息、什么情况下数据会离开设备，以及你可以如何控制。",
    supportSummary:
      "有关权限、本机项目、太阳能数据、数据删除和 TestFlight 测试版的帮助。",
    current: "简要说明",
    currentText:
      "MyBalcony 采用本机优先设计，没有用户账户、广告或追踪；只有在你明确触发特定功能时，相关数据才会离开设备。",
    updated: "更新日期：2026 年 7 月 28 日",
    navigation: { privacy: "隐私", support: "支持", home: "首页" },
  },
};

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

const email = "martin.yize.sun@gmail.com";

function PrivacyDE(): LegalSection[] {
  return [
    {
      id: "controller",
      title: "1. Verantwortlicher und Kontakt",
      content: (
        <>
          <p>
            Verantwortlich für MyBalcony und diese Website ist{" "}
            <strong>Yize Sun (MyBalcony)</strong>. Datenschutzanfragen können
            Sie an <a href={`mailto:${email}`}>{email}</a> senden.
          </p>
          <p>
            Diese Erklärung gilt für die iOS-App MyBalcony, ihre
            TestFlight-Versionen und die öffentlichen Datenschutz- und
            Supportseiten.
          </p>
        </>
      ),
    },
    {
      id: "principle",
      title: "2. Grundprinzip: lokal statt Konto",
      content: (
        <>
          <div className="fact-grid">
            <div className="fact-card">
              <strong>Kein Nutzerkonto</strong>
              <span>Keine Registrierung und keine zentrale Projektablage.</span>
            </div>
            <div className="fact-card">
              <strong>Keine Werbung</strong>
              <span>Keine Werbe-ID, kein Profiling und kein Tracking.</span>
            </div>
            <div className="fact-card">
              <strong>Lokale Modellierung</strong>
              <span>Fotos, LiDAR-Daten und Geometrie bleiben standardmäßig auf dem Gerät.</span>
            </div>
            <div className="fact-card">
              <strong>Kontrollierte Weitergabe</strong>
              <span>Export oder Kontaktaufnahme erfolgt nur nach einer Aktion durch Sie.</span>
            </div>
          </div>
          <p>
            „Lokal“ bedeutet, dass MyBalcony die Daten im Speicherbereich der
            App auf Ihrem iPhone verarbeitet. Wir erhalten diese Daten nicht
            automatisch.
          </p>
        </>
      ),
    },
    {
      id: "local-data",
      title: "3. Daten, die nur auf Ihrem Gerät verarbeitet werden",
      content: (
        <>
          <ul>
            <li>
              Grundrisse, Maße, Randtypen, Türen, Fenster, Geländerhöhen,
              Oberflächen, Produktplatzierungen und Entwürfe.
            </li>
            <li>
              Kameraaufnahmen, ausgewählte Fotos und Materialmuster, sofern Sie
              diese Funktionen verwenden.
            </li>
            <li>
              LiDAR-/ARKit-Umgebungsdaten wie Meshes, Flächen,
              Klassifizierungen, Tiefen- und Trackinginformationen.
            </li>
            <li>
              Sprache, Land/Markt, Partneraktivierung und lokale Einstellungen.
            </li>
            <li>
              Optionale lokale Ereignisse zum Planungs- und Einkaufsablauf.
              Diese Funktion ist standardmäßig aus und enthält keine Fotos,
              LiDAR-Meshes, genaue Position oder vollständige Geometrie.
            </li>
            <li>
              Angebotsentwürfe einschließlich der von Ihnen eingegebenen
              Kontaktdaten, solange kein Anbieter-Endpunkt eingerichtet ist.
            </li>
          </ul>
          <p>
            Diese Daten werden nicht von MyBalcony erhoben, solange Sie sie
            nicht ausdrücklich exportieren oder teilen.
          </p>
        </>
      ),
    },
    {
      id: "permissions",
      title: "4. Geräteberechtigungen",
      content: (
        <>
          <p>
            <strong>Kamera und räumliche Erfassung:</strong> zur Aufnahme des
            Balkons, zur Erkennung von Flächen und zur lokalen Erstellung eines
            2D-/3D-Modells. Die Berechtigung kann in den iOS-Einstellungen
            widerrufen werden.
          </p>
          <p>
            <strong>Standort während der Nutzung:</strong> optional zur
            Berechnung von Sonnenstand und langfristigen Solardaten. Sie können
            stattdessen immer eine Stadt manuell wählen. MyBalcony fragt keine
            Wohnadresse ab.
          </p>
          <p>
            <strong>Fotomediathek:</strong> der Apple-Systemauswahldialog gibt
            nur die von Ihnen ausgewählten Bilder an die App weiter.
          </p>
        </>
      ),
    },
    {
      id: "solar",
      title: "5. Solardaten über PVGIS",
      content: (
        <>
          <p>
            Wenn Sie eine Online-Solarberechnung starten, sendet MyBalcony die
            auf ungefähr 1 km gerundeten Koordinaten sowie Neigung und
            Ausrichtung des Solarmoduls an den Dienst PVGIS der Gemeinsamen
            Forschungsstelle der Europäischen Kommission (JRC). Die Antwort
            enthält langfristige monatliche Einstrahlungs- und Temperaturdaten.
          </p>
          <p>
            Dabei verarbeitet der Dienst technisch erforderliche
            Verbindungsdaten wie die IP-Adresse. Für die Verarbeitung durch
            PVGIS gelten die Hinweise der Europäischen Kommission. MyBalcony
            verwendet diese Übertragung nur für die angeforderte Berechnung,
            nicht für Werbung oder Tracking.
          </p>
          <p>
            Rechtsgrundlage ist die Durchführung der von Ihnen angeforderten
            Funktion (Art. 6 Abs. 1 lit. b DSGVO). Ohne Standortfreigabe können
            Sie eine voreingestellte oder manuell gewählte Stadt verwenden.
          </p>
          <p>
            <a
              className="text-link"
              href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en"
              rel="noreferrer"
              target="_blank"
            >
              Informationen zu PVGIS
            </a>
            {" · "}
            <a
              className="text-link"
              href="https://commission.europa.eu/privacy-policy-websites-managed-european-commission_en"
              rel="noreferrer"
              target="_blank"
            >
              Datenschutz der Europäischen Kommission
            </a>
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "6. Exporte, Händlerlinks und Angebotsanfragen",
      content: (
        <>
          <p>
            <strong>Exporte:</strong> Diagnosepakete, Berichte oder
            Angebotsdateien werden nur erzeugt, wenn Sie die Exportfunktion
            verwenden. Anschließend wählen Sie im iOS-Teilen-Menü selbst den
            Empfänger.
          </p>
          <p>
            <strong>Händlerlinks:</strong> Beim Öffnen einer externen
            Produktseite gelten die Datenschutzbestimmungen des jeweiligen
            Händlers. MyBalcony erhält dadurch nicht automatisch einen
            Kaufnachweis.
          </p>
          <p>
            <strong>Angebote:</strong> In der aktuellen TestFlight-Konfiguration
            ist kein automatischer Anbieter-Endpunkt aktiv. Angebotsanfragen
            bleiben lokal und können als Datei geteilt werden. Bevor künftig
            eine direkte Übermittlung aktiviert wird, zeigt die App Empfänger,
            Datenumfang und Einwilligungen an und diese Erklärung wird
            aktualisiert.
          </p>
        </>
      ),
    },
    {
      id: "support-site",
      title: "7. Support und diese Website",
      content: (
        <>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre
            E-Mail-Adresse, den Inhalt und freiwillige Anhänge zur Bearbeitung
            Ihrer Anfrage. Senden Sie rohe Scandaten nur, wenn dies für die
            Fehlersuche nötig ist und Sie es ausdrücklich möchten.
          </p>
          <p>
            Das Supportpostfach wird über Gmail von Google Ireland Limited
            bereitgestellt. Google verarbeitet dabei E-Mail-Inhalte und
            technische Metadaten nach seiner{" "}
            <a href="https://policies.google.com/privacy?hl=de">
              Datenschutzerklärung
            </a>
            . Rechtsgrundlage für unsere Bearbeitung ist je nach Anfrage die
            Durchführung vorvertraglicher oder vertraglicher Maßnahmen
            (Art. 6 Abs. 1 lit. b DSGVO) oder unser berechtigtes Interesse an
            einem verlässlichen Support (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Diese Website setzt keine Analyse- oder Werbe-Cookies ein und
            enthält keine Tracking-Pixel. Sie wird über GitHub Pages von
            GitHub, Inc. bereitgestellt. GitHub kann technisch erforderliche
            Server- und Sicherheitsprotokolle (insbesondere IP-Adresse,
            Zeitpunkt und angeforderte URL) nach seiner{" "}
            <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
              Datenschutzerklärung
            </a>{" "}
            verarbeiten.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "8. Speicherdauer und Löschung",
      content: (
        <>
          <ul>
            <li>
              Lokale Projekte bleiben gespeichert, bis Sie ein Projekt oder die
              App löschen.
            </li>
            <li>
              Lokale Ablaufereignisse werden sofort gelöscht, wenn Sie die
              optionale Aufzeichnung ausschalten.
            </li>
            <li>
              Lokale Angebotsentwürfe können in der App vollständig gelöscht
              werden.
            </li>
            <li>
              Support-E-Mails löschen wir grundsätzlich spätestens zwölf
              Monate nach Abschluss der Anfrage, sofern keine gesetzliche
              Aufbewahrungspflicht besteht.
            </li>
            <li>
              Für Protokolle externer Dienste gelten deren eigene
              Aufbewahrungsfristen.
            </li>
          </ul>
          <div className="notice">
            Das Löschen der App entfernt ihren lokalen Datenbereich. Vorher
            exportierte Dateien oder Daten, die Sie selbst an Dritte gesendet
            haben, müssen dort separat gelöscht werden.
          </div>
        </>
      ),
    },
    {
      id: "rights",
      title: "9. Ihre Rechte",
      content: (
        <>
          <p>
            Soweit die DSGVO anwendbar ist, haben Sie insbesondere Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit
            und Widerspruch. Eine Einwilligung können Sie jederzeit mit Wirkung
            für die Zukunft widerrufen.
          </p>
          <p>
            Sie können sich außerdem bei einer zuständigen
            Datenschutzaufsichtsbehörde im EWR beschweren. Für Anfragen an
            MyBalcony schreiben Sie an{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "10. Änderungen",
      content: (
        <p>
          Wir aktualisieren diese Erklärung, bevor neue Datenübermittlungen,
          Analysefunktionen, Konten oder Anbieter-Endpunkte aktiviert werden.
          Das Datum oben zeigt den aktuellen Stand.
        </p>
      ),
    },
  ];
}

function PrivacyEN(): LegalSection[] {
  return [
    {
      id: "controller",
      title: "1. Controller and contact",
      content: (
        <>
          <p>
            MyBalcony and this website are operated by{" "}
            <strong>Yize Sun (MyBalcony)</strong>. Send privacy requests to{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
          <p>
            This policy applies to the MyBalcony iOS app, its TestFlight builds,
            and the public privacy and support pages.
          </p>
        </>
      ),
    },
    {
      id: "principle",
      title: "2. The principle: local, not account-based",
      content: (
        <>
          <div className="fact-grid">
            <div className="fact-card"><strong>No user account</strong><span>No registration or central project storage.</span></div>
            <div className="fact-card"><strong>No advertising</strong><span>No advertising identifier, profiling or tracking.</span></div>
            <div className="fact-card"><strong>On-device modelling</strong><span>Photos, LiDAR data and geometry stay on the device by default.</span></div>
            <div className="fact-card"><strong>Controlled sharing</strong><span>Exports or contact happen only after an action you take.</span></div>
          </div>
          <p>
            “On device” means MyBalcony processes the information in the app’s
            storage area on your iPhone. We do not receive it automatically.
          </p>
        </>
      ),
    },
    {
      id: "local-data",
      title: "3. Information processed only on your device",
      content: (
        <>
          <ul>
            <li>Plans, measurements, boundary types, doors, windows, railing heights, surfaces, product placements and designs.</li>
            <li>Camera captures, selected photos and material samples when you use those features.</li>
            <li>LiDAR/ARKit environment data such as meshes, planes, classifications, depth and tracking information.</li>
            <li>Language, country/market, partner activation and local settings.</li>
            <li>Optional local planning and shopping journey events. This is off by default and contains no photos, LiDAR mesh, precise location or complete geometry.</li>
            <li>Quote drafts, including contact details you enter, while no provider endpoint is configured.</li>
          </ul>
          <p>
            MyBalcony does not collect this information unless you explicitly
            export or share it.
          </p>
        </>
      ),
    },
    {
      id: "permissions",
      title: "4. Device permissions",
      content: (
        <>
          <p><strong>Camera and spatial sensing:</strong> to capture a balcony, detect surfaces and create a local 2D/3D model. You can revoke access in iOS Settings.</p>
          <p><strong>Location while using the app:</strong> optional, for solar position and long-term solar data. You can always select a city instead. MyBalcony does not ask for your home address.</p>
          <p><strong>Photo library:</strong> Apple’s system picker gives the app only the images you select.</p>
        </>
      ),
    },
    {
      id: "solar",
      title: "5. Solar data from PVGIS",
      content: (
        <>
          <p>
            When you start an online solar calculation, MyBalcony sends
            coordinates rounded to roughly 1 km, plus panel tilt and
            orientation, to PVGIS, a service of the European Commission Joint
            Research Centre (JRC). The response contains long-term monthly
            irradiation and temperature data.
          </p>
          <p>
            The service also processes connection data technically required for
            the request, such as your IP address. European Commission notices
            apply to PVGIS processing. MyBalcony uses the transfer only for the
            calculation you requested, never for advertising or tracking.
          </p>
          <p>
            Where the GDPR applies, the legal basis is providing the feature
            you requested (Article 6(1)(b)). Without location permission, use a
            preset or manually selected city.
          </p>
          <p>
            <a className="text-link" href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en" rel="noreferrer" target="_blank">About PVGIS</a>
            {" · "}
            <a className="text-link" href="https://commission.europa.eu/privacy-policy-websites-managed-european-commission_en" rel="noreferrer" target="_blank">European Commission privacy notice</a>
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "6. Exports, merchant links and quote requests",
      content: (
        <>
          <p><strong>Exports:</strong> diagnostic packages, reports or quote files are created only when you use an export feature. You then choose the recipient in the iOS share sheet.</p>
          <p><strong>Merchant links:</strong> the merchant’s policy applies when you open an external product page. MyBalcony does not automatically receive proof of purchase.</p>
          <p><strong>Quotes:</strong> the current TestFlight configuration has no automatic provider endpoint. Quote requests remain local and can be shared as a file. Before direct submission is enabled in the future, the app will show the recipient, scope and consent choices, and this policy will be updated.</p>
        </>
      ),
    },
    {
      id: "support-site",
      title: "7. Support and this website",
      content: (
        <>
          <p>
            If you email us, we process your email address, message and
            voluntary attachments to answer your request. Send raw scan data
            only if it is needed for troubleshooting and you choose to do so.
          </p>
          <p>
            The support mailbox is provided through Gmail by Google Ireland
            Limited. Google processes email content and technical metadata
            under its{" "}
            <a href="https://policies.google.com/privacy?hl=en">
              privacy policy
            </a>
            . Depending on the request, our legal basis is taking steps at
            your request or performing a contract (Article 6(1)(b) GDPR), or
            our legitimate interest in providing reliable support (Article
            6(1)(f) GDPR).
          </p>
          <p>
            This website uses no analytics or advertising cookies and has no
            tracking pixels. It is hosted with GitHub Pages by GitHub, Inc.
            GitHub may process technically necessary server and security logs,
            including IP address, time and requested URL, under its{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
              privacy statement
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "8. Retention and deletion",
      content: (
        <>
          <ul>
            <li>Local projects remain until you delete a project or the app.</li>
            <li>Local journey events are deleted immediately when you turn the optional recording off.</li>
            <li>Local quote drafts can be deleted in full inside the app.</li>
            <li>We normally delete support email no later than 12 months after the request is closed, unless law requires longer retention.</li>
            <li>External services apply their own log retention periods.</li>
          </ul>
          <div className="notice">
            Deleting the app removes its local data area. Files you previously
            exported or sent to others must be deleted separately at their
            destination.
          </div>
        </>
      ),
    },
    {
      id: "rights",
      title: "9. Your rights",
      content: (
        <>
          <p>
            Where the GDPR applies, your rights include access, correction,
            deletion, restriction, portability and objection. You may withdraw
            consent at any time for the future.
          </p>
          <p>
            You may also complain to a competent EEA data protection authority.
            Contact MyBalcony at <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "10. Changes",
      content: (
        <p>
          We will update this policy before enabling new data transfers,
          analytics, accounts or provider endpoints. The date above identifies
          the current version.
        </p>
      ),
    },
  ];
}

function PrivacyZH(): LegalSection[] {
  return [
    {
      id: "controller",
      title: "1. 运营者与联系方式",
      content: (
        <>
          <p>
            MyBalcony 及本网站由 <strong>Yize Sun（MyBalcony）</strong>运营。
            隐私相关请求请发送至 <a href={`mailto:${email}`}>{email}</a>。
          </p>
          <p>本政策适用于 MyBalcony iOS App、TestFlight 测试版本，以及公开的隐私和支持页面。</p>
        </>
      ),
    },
    {
      id: "principle",
      title: "2. 原则：本机优先，而非账户优先",
      content: (
        <>
          <div className="fact-grid">
            <div className="fact-card"><strong>没有用户账户</strong><span>无需注册，也没有集中式项目云存储。</span></div>
            <div className="fact-card"><strong>没有广告</strong><span>不使用广告标识符，不进行画像或追踪。</span></div>
            <div className="fact-card"><strong>本机建模</strong><span>照片、LiDAR 数据和几何默认留在设备上。</span></div>
            <div className="fact-card"><strong>由你控制分享</strong><span>只有在你主动操作后才会导出或联系第三方。</span></div>
          </div>
          <p>“本机”是指 MyBalcony 在 iPhone 上属于 App 的存储区域内处理信息，我们不会自动收到这些数据。</p>
        </>
      ),
    },
    {
      id: "local-data",
      title: "3. 仅在设备上处理的信息",
      content: (
        <>
          <ul>
            <li>平面轮廓、尺寸、边界类型、门窗、栏杆高度、表面、商品摆放和设计方案。</li>
            <li>使用相关功能时拍摄的画面、你选取的照片和材质样本。</li>
            <li>LiDAR/ARKit 环境数据，例如网格、平面、分类、深度和空间追踪信息。</li>
            <li>语言、国家或市场、合作伙伴激活以及本机设置。</li>
            <li>可选的本机规划和购物流程事件。该功能默认关闭，且不包含照片、LiDAR 网格、精确位置或完整几何。</li>
            <li>尚未配置服务商接口时保存在本机的询价草稿，包括你填写的联系信息。</li>
          </ul>
          <p>除非你明确导出或分享，MyBalcony 不会收集这些信息。</p>
        </>
      ),
    },
    {
      id: "permissions",
      title: "4. 设备权限",
      content: (
        <>
          <p><strong>相机和空间感知：</strong>用于拍摄阳台、识别表面，并在本机建立 2D/3D 模型。你可以在 iOS 设置中撤回权限。</p>
          <p><strong>使用 App 时的位置：</strong>这是可选权限，用于计算太阳位置和长期太阳能数据。你始终可以改为选择城市。MyBalcony 不会询问家庭地址。</p>
          <p><strong>照片图库：</strong>通过 Apple 系统选择器，App 只能取得你明确选取的图片。</p>
        </>
      ),
    },
    {
      id: "solar",
      title: "5. 通过 PVGIS 获取太阳能数据",
      content: (
        <>
          <p>
            当你启动在线太阳能计算时，MyBalcony 会把约 1 公里精度的坐标、太阳能板倾角和朝向发送给欧盟委员会联合研究中心（JRC）的 PVGIS 服务。返回数据包含长期月度辐照和温度信息。
          </p>
          <p>
            该服务也会处理请求所必需的连接数据，例如 IP 地址。PVGIS 的处理适用欧盟委员会的相关声明。MyBalcony 只把这次传输用于你请求的计算，不用于广告或追踪。
          </p>
          <p>在 GDPR 适用的地区，处理依据是提供你请求的功能（GDPR 第 6(1)(b) 条）。如果不允许位置权限，可以使用预设或手动选择的城市。</p>
          <p>
            <a className="text-link" href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en" rel="noreferrer" target="_blank">了解 PVGIS</a>
            {" · "}
            <a className="text-link" href="https://commission.europa.eu/privacy-policy-websites-managed-european-commission_en" rel="noreferrer" target="_blank">欧盟委员会隐私声明</a>
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "6. 导出、商家链接与询价",
      content: (
        <>
          <p><strong>导出：</strong>只有在你使用导出功能时，App 才会生成诊断包、报告或询价文件；之后由你在 iOS 分享菜单中选择接收方。</p>
          <p><strong>商家链接：</strong>打开外部商品页面后，适用对应商家的隐私政策。MyBalcony 不会因此自动收到购买凭证。</p>
          <p><strong>询价：</strong>当前 TestFlight 配置没有自动服务商接口。询价保存在本机，可由你自行分享文件。未来启用直接提交前，App 会展示接收方、数据范围和同意选项，并提前更新本政策。</p>
        </>
      ),
    },
    {
      id: "support-site",
      title: "7. 支持与本网站",
      content: (
        <>
          <p>如果你向我们发送邮件，我们会处理邮箱地址、邮件内容和你自愿附加的文件，以便答复。只有在排查问题确实需要且你愿意时，才发送原始扫描数据。</p>
          <p>
            支持邮箱由 Google Ireland Limited 的 Gmail
            服务提供。Google 会依据其
            <a href="https://policies.google.com/privacy?hl=zh-CN">
              隐私政策
            </a>
            处理邮件内容和技术元数据。根据请求性质，我们处理这些信息的依据是应你的请求采取订立或履行合同所需的措施（GDPR
            第 6(1)(b) 条），或提供可靠支持的合法利益（GDPR 第 6(1)(f) 条）。
          </p>
          <p>
            本网站不使用分析或广告 Cookie，也没有追踪像素。网站由 GitHub, Inc.
            的 GitHub Pages 托管。GitHub 可能依据其
            <a href="https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement">
              隐私声明
            </a>
            处理技术上必要的服务器和安全日志，包括 IP 地址、时间和请求 URL。
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "8. 保存期限与删除",
      content: (
        <>
          <ul>
            <li>本机项目会一直保留，直到你删除项目或 App。</li>
            <li>关闭可选流程记录时，本机流程事件会立即删除。</li>
            <li>本机询价草稿可以在 App 内全部删除。</li>
            <li>支持邮件通常在问题关闭后 12 个月内删除；法律要求更长保存期限的除外。</li>
            <li>外部服务的日志适用其各自的保存期限。</li>
          </ul>
          <div className="notice">删除 App 会移除其本机数据区域。此前已经导出或由你发送给第三方的文件，需要在相应接收方另行删除。</div>
        </>
      ),
    },
    {
      id: "rights",
      title: "9. 你的权利",
      content: (
        <>
          <p>在 GDPR 适用的地区，你享有访问、更正、删除、限制处理、数据可携带和反对等权利；也可以随时撤回同意，但不影响撤回前的处理。</p>
          <p>你也可以向欧洲经济区内有管辖权的数据保护机构投诉。联系 MyBalcony：<a href={`mailto:${email}`}>{email}</a>。</p>
        </>
      ),
    },
    {
      id: "changes",
      title: "10. 政策更新",
      content: <p>在启用新的数据传输、分析功能、账户或服务商接口前，我们会更新本政策。页面顶部日期表示当前版本。</p>,
    },
  ];
}

function SupportDE(): LegalSection[] {
  return [
    {
      id: "beta",
      title: "TestFlight-Beta",
      content: (
        <>
          <p>MyBalcony ist derzeit eine Beta. Bitte prüfen Sie Grundriss, Maße, Produktpositionen, Stromführung, Entwässerung und Befestigung, bevor Sie ein Ergebnis verwenden.</p>
          <div className="notice">Die App ist eine Planungs- und Visualisierungshilfe. Sie ersetzt keine Tragwerksprüfung, Elektroplanung, Montagefreigabe, Vermieter-/WEG-Zustimmung oder behördliche Genehmigung.</div>
        </>
      ),
    },
    {
      id: "permissions",
      title: "Berechtigungen",
      content: (
        <>
          <h3>Warum werden Kamera und räumliche Erfassung benötigt?</h3>
          <p>Für lokale LiDAR-/ARKit-Erfassung, Oberflächenerkennung und Modellierung. Ohne diese Rechte können Sie weiterhin einen Grundriss manuell zeichnen.</p>
          <h3>Muss ich meinen Standort erlauben?</h3>
          <p>Nein. Der Standort ist nur für Sonnen- und Solardaten vorgesehen. Wählen Sie alternativ eine Stadt. Der Online-Aufruf verwendet auf ungefähr 1 km gerundete Koordinaten.</p>
        </>
      ),
    },
    {
      id: "data",
      title: "Lokale Daten verwalten",
      content: (
        <ol>
          <li>Löschen Sie einzelne Balkone auf der Startseite der App.</li>
          <li>Löschen Sie Angebotsentwürfe im Bereich „Datenschutz & Produktverbesserung“.</li>
          <li>Schalten Sie die optionale Ablaufaufzeichnung dort aus; vorhandene lokale Ereignisse werden sofort entfernt.</li>
          <li>Löschen Sie die App, um ihren gesamten lokalen Datenbereich zu entfernen.</li>
        </ol>
      ),
    },
    {
      id: "exports",
      title: "Exporte und Diagnose",
      content: (
        <p>Ein Export wird erst erstellt, wenn Sie ihn anfordern. Prüfen Sie vor dem Teilen den Empfänger. Senden Sie für eine Supportanfrage zunächst Screenshots und eine kurze Beschreibung; rohe LiDAR-Pakete nur auf ausdrückliche Anfrage.</p>
      ),
    },
    {
      id: "contact",
      title: "Kontakt",
      content: (
        <Contact language="de" />
      ),
    },
  ];
}

function SupportEN(): LegalSection[] {
  return [
    {
      id: "beta",
      title: "TestFlight beta",
      content: (
        <>
          <p>MyBalcony is currently a beta. Verify the plan, measurements, product positions, power routing, drainage and mounting before relying on a result.</p>
          <div className="notice">The app is a planning and visualisation aid. It does not replace structural review, electrical design, installation approval, landlord/building-owner consent or regulatory permission.</div>
        </>
      ),
    },
    {
      id: "permissions",
      title: "Permissions",
      content: (
        <>
          <h3>Why are camera and spatial sensing needed?</h3>
          <p>For local LiDAR/ARKit capture, surface detection and modelling. You can still draw a plan manually without these permissions.</p>
          <h3>Do I have to allow location?</h3>
          <p>No. Location is only for sun and solar data. Choose a city instead. The online request uses coordinates rounded to roughly 1 km.</p>
        </>
      ),
    },
    {
      id: "data",
      title: "Manage local data",
      content: (
        <ol>
          <li>Delete individual balconies from the app home screen.</li>
          <li>Delete quote drafts under “Privacy & product improvement”.</li>
          <li>Turn optional journey recording off there; existing local events are removed immediately.</li>
          <li>Delete the app to remove its complete local data area.</li>
        </ol>
      ),
    },
    {
      id: "exports",
      title: "Exports and diagnostics",
      content: (
        <p>An export is created only when you request it. Check the recipient before sharing. For support, send screenshots and a short description first; send raw LiDAR packages only when specifically requested.</p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: <Contact language="en" />,
    },
  ];
}

function SupportZH(): LegalSection[] {
  return [
    {
      id: "beta",
      title: "TestFlight 测试版",
      content: (
        <>
          <p>MyBalcony 目前是测试版。在使用结果前，请复核轮廓、尺寸、商品位置、供电走线、排水和安装方式。</p>
          <div className="notice">本 App 是规划和可视化工具，不能替代结构审核、电气设计、安装批准、房东或业主许可，也不能替代监管审批。</div>
        </>
      ),
    },
    {
      id: "permissions",
      title: "权限",
      content: (
        <>
          <h3>为什么需要相机和空间感知？</h3>
          <p>用于在本机完成 LiDAR/ARKit 扫描、表面识别和建模。即使不允许这些权限，你仍可手绘平面图。</p>
          <h3>必须允许位置权限吗？</h3>
          <p>不需要。位置只用于太阳和太阳能数据，也可以选择城市。在线请求使用约 1 公里精度的坐标。</p>
        </>
      ),
    },
    {
      id: "data",
      title: "管理本机数据",
      content: (
        <ol>
          <li>在 App 首页删除单个阳台项目。</li>
          <li>在“隐私与产品改进”中删除询价草稿。</li>
          <li>在同一位置关闭可选的流程记录；已有本机事件会立即删除。</li>
          <li>删除 App 可移除其全部本机数据区域。</li>
        </ol>
      ),
    },
    {
      id: "exports",
      title: "导出与诊断",
      content: <p>只有在你主动操作时才会生成导出文件。分享前请核对接收方。寻求支持时先发送截图和简短说明；只有在明确需要时再发送原始 LiDAR 包。</p>,
    },
    {
      id: "contact",
      title: "联系我们",
      content: <Contact language="zh" />,
    },
  ];
}

function Contact({ language }: { language: Language }) {
  const content = {
    de: {
      intro: "Bitte nennen Sie App-Version, iPhone-Modell, iOS-Version, den betroffenen Ablauf und Schritte zur Reproduktion. Fügen Sie keine personenbezogenen oder rohen Scandaten bei, sofern sie nicht erforderlich sind.",
      button: "Support-E-Mail schreiben",
    },
    en: {
      intro: "Include the app version, iPhone model, iOS version, affected flow and reproduction steps. Do not attach personal information or raw scan data unless it is necessary.",
      button: "Email support",
    },
    zh: {
      intro: "请提供 App 版本、iPhone 型号、iOS 版本、出现问题的流程和复现步骤。除非确有必要，请不要附加个人信息或原始扫描数据。",
      button: "发送支持邮件",
    },
  }[language];
  return (
    <div className="contact-card">
      <p>{content.intro}</p>
      <a
        className="button button-primary"
        href={`mailto:${email}?subject=MyBalcony%20Support`}
      >
        {content.button}
      </a>
      <p><a href={`mailto:${email}`}>{email}</a></p>
    </div>
  );
}

export function sectionsFor(
  language: Language,
  section: SectionKind,
): LegalSection[] {
  if (section === "privacy") {
    return language === "de"
      ? PrivacyDE()
      : language === "en"
        ? PrivacyEN()
        : PrivacyZH();
  }
  return language === "de"
    ? SupportDE()
    : language === "en"
      ? SupportEN()
      : SupportZH();
}

export function LegalPage({
  language,
  section,
}: {
  language: Language;
  section: SectionKind;
}) {
  const copy = copies[language];
  const sections = sectionsFor(language, section);
  const title = section === "privacy" ? copy.privacyTitle : copy.supportTitle;
  const summary =
    section === "privacy" ? copy.privacySummary : copy.supportSummary;

  return (
    <main className="legal-shell" lang={copy.locale}>
      <header className="topbar">
        <Link className="wordmark" href="/">
          MYBALCONY
        </Link>
        <nav className="language-nav" aria-label="Language">
          {supportedLanguages.map((candidate) => (
            <Link
              aria-current={candidate === language ? "page" : undefined}
              href={`/${candidate}/${section}`}
              key={candidate}
            >
              {candidate === "zh" ? "中文" : candidate.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <section className="page-hero">
        <div>
          <p className="page-kicker">{copy.updated}</p>
          <h1>{title}</h1>
          <p className="page-summary">{summary}</p>
        </div>
        <aside className="status-card">
          <strong>{copy.current}</strong>
          <p>{copy.currentText}</p>
        </aside>
      </section>

      <div className="page-grid">
        <nav className="toc" aria-label="On this page">
          <p className="toc-label">{title}</p>
          {sections.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.title}
            </a>
          ))}
        </nav>
        <article className="legal-content">
          {sections.map((item) => (
            <section className="legal-section" id={item.id} key={item.id}>
              <h2>{item.title}</h2>
              {item.content}
            </section>
          ))}
        </article>
      </div>

      <footer className="legal-footer">
        <div>
          <Link href="/">{copy.navigation.home}</Link>
          {" · "}
          <Link href={`/${language}/privacy`}>
            {copy.navigation.privacy}
          </Link>
          {" · "}
          <Link href={`/${language}/support`}>
            {copy.navigation.support}
          </Link>
        </div>
        <a href={`mailto:${email}`}>{email}</a>
      </footer>
    </main>
  );
}
