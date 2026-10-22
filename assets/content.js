/* =====================================================================
   PORTFOLIO CONTENT. Edit this file to update the site.
   Every text has an Arabic (ar) and an English (en) version.
   - Add a certificate: copy one object inside `courses`, change the
     fields, and put its image in /certs as <image>.jpg and <image>-thumb.jpg.
   - Add a work sample: copy one object inside `works`, put its previews in
     /works and its interactive demo (a self-contained HTML file with
     fictional data) in /demos as <demo>.html. `sandbox` lists what the demo
     may do in the viewer; demos get no download permission.
   - Replace the CV: overwrite downloads/Nouf-Al-Otaibi-CV.pdf and the page
     previews downloads/cv-page-N.jpg (large) and cv-thumb-N.jpg (small).
   ===================================================================== */
window.PORTFOLIO = {
  person: {
    name: { ar: 'نوف متعب العتيبي', en: 'Nouf Al Otaibi' },
    title: { ar: 'مدير مكتب', en: 'Office Manager' },
    statement: {
      ar: 'أشرف على العمليات الإدارية في مستشفى قوى الأمن، وأطور أدوات متابعة للعقود والمناوبات والتقارير تدعم اتخاذ القرار.',
      en: 'I oversee administrative operations at Security Forces Hospital and develop tracking tools for contracts, duty rotas and reports that support decision-making.'
    },
    location: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
    email: 'alotaibinouf63@gmail.com',
    phone: '+966 54 163 6100',
    linkedin: 'https://www.linkedin.com/in/nouf--alotaibi--',
    cv: 'downloads/Nouf-Al-Otaibi-CV.pdf',
    cvName: 'Nouf-Al-Otaibi-CV.pdf',
    // Page previews of the CV (rendered from the PDF).
    cvPages: ['downloads/cv-page-1.webp', 'downloads/cv-page-2.webp', 'downloads/cv-page-3.webp'],
    cvThumbs: ['downloads/cv-thumb-1.webp', 'downloads/cv-thumb-2.webp', 'downloads/cv-thumb-3.webp'],
    cvLanguage: { ar: 'بالإنجليزية', en: 'English' }
  },

  // The facts shown under the introduction. Only facts stated in the CV.
  facts: [
    { k: { ar: 'الخبرة', en: 'Experience' }, v: { ar: 'أكثر من 8 سنوات', en: '8+ years' } },
    { k: { ar: 'القطاعات', en: 'Sectors' }, v: { ar: 'الرعاية الصحية · الشركات', en: 'Healthcare · Corporate' } },
    { k: { ar: 'الشهادات المهنية', en: 'Certifications' }, v: { ar: 'GRCP · GRCA (2026)', en: 'GRCP · GRCA (2026)' } },
    { k: { ar: 'المؤهل العلمي', en: 'Education' }, v: { ar: 'بكالوريوس اللغة الإنجليزية', en: 'B.A. English Language' } },
    { k: { ar: 'اللغات', en: 'Languages' }, v: { ar: 'العربية · الإنجليزية', en: 'Arabic · English' } }
  ],

  about: {
    p: [
      {
        ar: 'مدير مكتب بخبرة تزيد على ثماني سنوات في الدعم التنفيذي وإدارة العمليات المكتبية في القطاع الصحي وقطاع الشركات. انضممت إلى مستشفى قوى الأمن بالرياض عام 2022، بعد أربع سنوات من العمل سكرتيراً تنفيذياً في شركة يوكسل السعودية.',
        en: 'Office manager with more than eight years of experience in executive support and office operations in the healthcare and corporate sectors. I joined Security Forces Hospital in Riyadh in 2022, after four years as executive secretary at Yuksel Saudia.'
      },
      {
        ar: 'أتولى تنظيم الإجراءات اليومية، وضبط الوثائق والسجلات، ومتابعة الموردين والعقود والفواتير، وإعداد التقارير للإدارة العليا. وأحمل شهادتي GRCP وGRCA في الحوكمة والمخاطر والامتثال، وأصمم لوحات متابعة تعرض الأرقام بوضوح لصناع القرار.',
        en: 'I handle daily procedures, document and records control, follow-up on vendors, contracts and invoices, and reporting to senior management. I hold the GRCP and GRCA certifications in governance, risk and compliance, and design dashboards that present figures clearly to decision makers.'
      }
    ],
    interests: [
      { ar: 'العمليات الإدارية وتحسين الإجراءات', en: 'Administrative operations & process improvement' },
      { ar: 'ضبط الوثائق والسجلات', en: 'Document control & records' },
      { ar: 'العقود والمشتريات والموردون', en: 'Contracts, procurement & vendors' },
      { ar: 'الحوكمة والمخاطر والامتثال', en: 'Governance, risk & compliance' },
      { ar: 'التقارير ولوحات المتابعة', en: 'Reporting & dashboards' },
      { ar: 'دعم اللجان والاجتماعات', en: 'Committee & meeting support' }
    ]
  },

  experience: [
    {
      role: { ar: 'مدير مكتب', en: 'Office Manager' },
      org: { ar: 'مستشفى قوى الأمن', en: 'Security Forces Hospital' },
      place: { ar: 'الرياض', en: 'Riyadh' },
      period: { ar: '2022 – حتى الآن', en: '2022 – Present' },
      logo: 'assets/sfh-logo.png',
      logoSize: [186, 70],
      // All 16 duties listed in the CV for this role, grouped by core office-management function.
      groups: [
        { h: { ar: 'العمليات الإدارية', en: 'Administrative operations' }, items: [
          { ar: 'الإشراف على العمليات الإدارية اليومية لضمان سير عمل الأقسام وخدمات الدعم بكفاءة وانتظام.', en: 'Oversee daily administrative operations so hospital departments and support services run efficiently and smoothly.' },
          { ar: 'وضع السياسات والإجراءات الإدارية وأنظمة سير العمل وتطبيقها لرفع الكفاءة التشغيلية وتحسين الخدمات المقدمة للمرضى.', en: 'Develop and implement administrative policies, procedures and workflows to improve operational efficiency and patient services.' },
          { ar: 'متابعة الإجراءات الإدارية وتطبيق تحسينات مستمرة تستهدف رفع الكفاءة وتحسين تجربة المرضى ورضا الموظفين.', en: 'Monitor administrative processes and implement continuous improvements aimed at efficiency, patient experience and staff satisfaction.' },
          { ar: 'معالجة المشكلات التشغيلية والإدارية فور ظهورها بحلول عملية تدعم رعاية المرضى وأهداف الأقسام.', en: 'Resolve operational and administrative issues promptly with practical solutions that support patient care and departmental goals.' }
        ]},
        { h: { ar: 'التنسيق والاجتماعات والتقارير', en: 'Coordination, meetings & reporting' }, items: [
          { ar: 'القيام بدور نقطة الاتصال الرئيسية للاستفسارات المكتبية والدعم التشغيلي.', en: 'Serve as the main point of contact for office inquiries and operational support.' },
          { ar: 'تنظيم الاجتماعات الداخلية والأنشطة التشغيلية، والإشراف على ترتيباتها والتحضير لها في الوقت المحدد.', en: 'Organize internal meetings and operational activities, managing logistics and timely preparation.' },
          { ar: 'تنسيق المبادرات الإدارية في الأقسام ومتابعتها، وإدارة التواصل والتوثيق بين الفرق.', en: 'Coordinate departmental initiatives, managing communication, documentation and follow-up across teams.' },
          { ar: 'إعداد التقارير وملخصات الأداء والتحليلات التشغيلية لدعم قرارات الإدارة العليا.', en: 'Prepare reports, performance summaries and operational analyses to support senior management decisions.' }
        ]},
        { h: { ar: 'الميزانية والمشتريات والموردون', en: 'Budget, procurement & vendors' }, items: [
          { ar: 'إدارة ميزانية المكتب ومتابعة المصروفات وضمان الاستخدام الأمثل للموارد.', en: 'Manage the office budget, track expenses and ensure cost-effective use of resources.' },
          { ar: 'الإشراف على شراء المستلزمات الإدارية وغير السريرية، ومتابعة المخزون لضمان توافر الاحتياجات.', en: 'Oversee procurement of administrative and non-clinical supplies and track inventory to keep resources available.' },
          { ar: 'إدارة العلاقة مع الموردين ومقدمي الخدمات، والتفاوض على العقود.', en: 'Manage relationships with suppliers and service providers, including contract negotiation.' }
        ]},
        { h: { ar: 'الموظفون وبيئة العمل والامتثال', en: 'Staff, workplace & compliance' }, items: [
          { ar: 'الإشراف على الموظفين الإداريين وموظفي الدعم، وتوزيع المسؤوليات، وتقييم الأداء.', en: 'Supervise administrative and support staff, delegate responsibilities and evaluate performance.' },
          { ar: 'دعم مهام الموارد البشرية، كمباشرة الموظفين الجدد ومتابعة الحضور والسجلات الوظيفية.', en: 'Support HR functions such as onboarding, attendance tracking and employee records.' },
          { ar: 'تنسيق احتياجات المكاتب والأقسام الإدارية الطبية من التجهيزات والصيانة ودعم تقنية المعلومات بما يضمن استمرارية العمل.', en: 'Coordinate equipment, maintenance and IT support for offices and medical administrative departments to keep operations running without interruption.' },
          { ar: 'ضمان الالتزام بسياسات المستشفى والأنظمة الصحية ومعايير الاعتماد واشتراطات الصحة والسلامة والمتطلبات النظامية.', en: 'Ensure compliance with hospital policies, healthcare regulations, accreditation standards, health and safety requirements and legal guidelines.' }
        ]}
      ]
    },
    {
      role: { ar: 'سكرتير تنفيذي', en: 'Executive Secretary' },
      org: { ar: 'يوكسل السعودية', en: 'Yuksel Saudia' },
      place: { ar: '', en: '' },
      period: { ar: '2019 – 2022', en: '2019 – 2022' },
      logo: 'assets/yuksel-logo.png',
      logoSize: [191, 85],
      // All 11 duties listed in the CV for this role, grouped by core executive-secretary function.
      groups: [
        { h: { ar: 'الدعم التنفيذي', en: 'Executive support' }, items: [
          { ar: 'إدارة جدول مواعيد المدير وترتيبها حسب الأولوية بما يرفع الإنتاجية.', en: "Managed the executive's calendar, prioritizing appointments to maximize productivity." },
          { ar: 'إدارة المراسلات بدقة واحترافية ووفق معايير الشركة.', en: 'Managed correspondence with accuracy and professionalism, in line with company standards.' },
          { ar: 'المساعدة في إعداد التقارير والعروض التقديمية لدعم التخطيط الاستراتيجي.', en: 'Assisted in preparing reports and presentations to support strategic planning.' }
        ]},
        { h: { ar: 'تنظيم الاجتماعات', en: 'Meeting management' }, items: [
          { ar: 'تنسيق الترتيبات اللوجستية للاجتماعات التنفيذية، ومنها تجهيز المكان والتواصل مع المشاركين.', en: 'Coordinated logistics for executive meetings, including venue arrangements and communication with participants.' },
          { ar: 'تنسيق اجتماعات الأقسام لمعالجة ملاحظات الفرق والتحديات التشغيلية عبر التواصل الفعال مع الأطراف المعنية.', en: 'Coordinated departmental meetings to address team concerns and operational challenges through clear communication with stakeholders.' },
          { ar: 'إعداد جداول الأعمال والمحاضر والوثائق اللازمة لدعم اتخاذ القرار وحفظ السجلات.', en: 'Prepared detailed agendas, minutes and supporting documents for decision-making and record-keeping.' }
        ]},
        { h: { ar: 'الوثائق والمعلومات', en: 'Documents & information' }, items: [
          { ar: 'إنشاء نظام لضبط الوثائق يضمن حفظها بأمان وسهولة استرجاعها.', en: 'Established a document control system for secure archiving and efficient retrieval.' },
          { ar: 'إنشاء قواعد بيانات لتسهيل وصول الفريق إلى المعلومات ورفع الكفاءة الإدارية.', en: "Developed databases to improve the team's access to information and administrative efficiency." },
          { ar: 'الحفاظ على سرية المعلومات الحساسة والالتزام بسياسات الشركة.', en: 'Maintained the confidentiality of sensitive information in line with company policies.' }
        ]},
        { h: { ar: 'التواصل والمتابعة', en: 'Communication & follow-up' }, items: [
          { ar: 'القيام بدور حلقة الوصل بين الإدارات والشركاء الخارجيين لضمان سلاسة التواصل وإنجاز المعاملات.', en: 'Acted as liaison between departments and external partners to ensure smooth communication and resolution of matters.' },
          { ar: 'متابعة مهام المشاريع لضمان إنجازها في موعدها ووضوح المسؤوليات.', en: 'Monitored project tasks to ensure timely completion and accountability.' }
        ]}
      ]
    }
  ],

  // Short participations shown under the experience section (from the CV).
  participations: [
    {
      role: { ar: 'باحثة جودة — التعداد العام للسكان والمساكن 2022', en: 'Quality Researcher — Saudi Census 2022' },
      org: { ar: 'الهيئة العامة للإحصاء', en: 'General Authority for Statistics' },
      place: { ar: 'منطقة إشراف الرياض', en: 'Riyadh supervision area' },
      period: { ar: '7 مايو – 22 يونيو 2022 (47 يوماً)', en: '7 May – 22 Jun 2022 (47 days)' },
      doc: 'census-2022-experience',
      docLabel: { ar: 'عرض مشهد العمل', en: 'View experience letter' }
    }
  ],

  achievements: [
    { ar: 'إعداد وتنسيق وثائق الإدارة الطبية ومتطلبات الامتثال لمراجعات الاعتماد الصحي.', en: 'Prepared and coordinated medical administration documentation and compliance requirements for healthcare accreditation reviews.' },
    { ar: 'تولي التنسيق الإداري للجنة الوفيات على مستوى المستشفى، بما يشمل الوثائق السرية والاجتماعات والسجلات.', en: 'Served as administrative coordinator for the hospital-wide Mortality Committee, covering confidential documents, meetings and records.' },
    { ar: 'المشاركة في مشروع استراتيجي للتعاقد مع مقدمي خدمات صحية من القطاع الخاص: تقييم العروض، وتنسيق الاجتماعات، وتوثيق إجراءات الشراء.', en: 'Contributed to a strategic project to contract private healthcare providers: proposal evaluation, meeting coordination and procurement documentation.' },
    { ar: 'مراجعة مطالبات وفواتير مقدمي الخدمات المتعاقد معهم والتحقق منها قبل إصدار شهادات الإنجاز واعتماد الصرف.', en: "Reviewed and validated contracted providers' claims and invoices before completion certificates and payment approval." },
    { ar: 'إنشاء نظام للحفظ والفهرسة في الإدارة الطبية ينظم الوثائق ويسهل استرجاعها.', en: 'Established a filing and indexing system for the Medical Administration Department to organize and retrieve records.' },
    { ar: 'إنشاء قاعدة بيانات منظمة لموظفي القسم بإجراءات موحدة للبيانات والتقارير.', en: 'Created a structured staff database for the department with standard procedures for records and reporting.' }
  ],

  education: { ar: 'بكالوريوس اللغة الإنجليزية — جامعة شقراء، 2011', en: "Bachelor's degree in English Language — Shaqra University, 2011" },
  languages: { ar: 'العربية (اللغة الأم) · الإنجليزية (بطلاقة)', en: 'Arabic (native) · English (fluent)' },

  // `link` is the section (or work sample) that holds each group's evidence.
  skills: [
    { id: 'office', link: 'experience', h: { ar: 'إدارة المكتب والدعم التنفيذي', en: 'Office management & executive support' },
      items: { ar: ['العمليات الإدارية', 'إدارة التقويم والجداول', 'الاجتماعات وجداول الأعمال والمحاضر', 'المراسلات', 'الإشراف على الفريق'], en: ['Administrative operations', 'Calendar & schedule management', 'Meetings, agendas & minutes', 'Correspondence', 'Team supervision'] },
      proof: { ar: 'الخبرة العملية · دورتا إدارة الاجتماعات والإشراف الفعّال', en: 'Experience · Meeting Management and Effective Supervision courses' } },
    { id: 'records', link: 'experience', h: { ar: 'الوثائق والسجلات', en: 'Documents & records' },
      items: { ar: ['ضبط الوثائق', 'الحفظ والفهرسة', 'إدارة السجلات', 'الحفاظ على السرية'], en: ['Document control', 'Filing & indexing', 'Records management', 'Confidentiality'] },
      proof: { ar: 'أبرز الإنجازات', en: 'Key achievements' } },
    { id: 'contracts', link: 'case-contract', h: { ar: 'العقود والمشتريات والمالية', en: 'Contracts, procurement & finance' },
      items: { ar: ['متابعة العقود والموردين', 'المشتريات والمخزون', 'متابعة الميزانية', 'التحقق من الفواتير والمطالبات', 'التفاوض'], en: ['Contract & vendor follow-up', 'Procurement & inventory', 'Budget monitoring', 'Invoice & claim validation', 'Negotiation'] },
      proof: { ar: 'نموذج متابعة الصرف على العقد · أربع دورات في المالية والعقود', en: 'Contract spend tracking sample · four finance and contracts courses' } },
    { id: 'grc', link: 'certificates', h: { ar: 'الحوكمة والمخاطر والامتثال', en: 'Governance, risk & compliance' },
      items: { ar: ['GRCP · GRCA', 'وثائق الاعتماد الصحي', 'الالتزام بالسياسات والأنظمة', 'إدارة الإجراءات وتحسينها', 'مؤشرات الأداء'], en: ['GRCP · GRCA', 'Accreditation documentation', 'Policy & regulatory compliance', 'Process management & improvement', 'KPIs'] },
      proof: { ar: 'شهادتا OCEG · دورتا إدارة إجراءات العمل ومؤشرات الأداء', en: 'OCEG certifications · Business Process Management and KPI courses' } },
    { id: 'data', link: 'work', h: { ar: 'البيانات والتقارير', en: 'Data & reporting' },
      items: { ar: ['Excel: الجداول المنظمة، SUMIFS، INDEX/MATCH، التحقق من البيانات، الأسماء المعرّفة، الرسوم البيانية', 'لوحات المتابعة', 'التقارير الإدارية', 'Power BI (معرفة عملية)', 'Microsoft Office'], en: ['Excel: structured tables, SUMIFS, INDEX/MATCH, data validation, named ranges, charts', 'Dashboards', 'Administrative reports', 'Power BI (working knowledge)', 'Microsoft Office'] },
      proof: { ar: 'نماذج الأعمال الثلاثة · دورة إعداد التقارير الإدارية', en: 'All three work samples · Preparing Administrative Reports course' } },
    { id: 'leadership', link: 'certificates', h: { ar: 'القيادة والتواصل', en: 'Leadership & communication' },
      items: { ar: ['حل المشكلات واتخاذ القرار', 'إدارة الأداء', 'التخطيط والتنظيم', 'التواصل الفعال', 'العمل الجماعي'], en: ['Problem solving & decision making', 'Performance management', 'Planning & organizing', 'Effective communication', 'Teamwork'] },
      proof: { ar: 'دورات مهارات حل المشكلات واتخاذ القرار، وإدارة الأداء، والتخطيط والتنظيم وقياس الأداء', en: 'Problem Solving & Decision Making Skills, Performance Management, and Planning, Organizing & Performance Measurement courses' } }
  ],

  professional: [
    { title: { ar: 'محترف معتمد في الحوكمة والمخاطر والامتثال (GRCP)', en: 'Certified GRC Professional (GRCP)' },
      issuer: { ar: 'OCEG وGRC Certify', en: 'OCEG & GRC Certify' }, date: '2026-04-12', valid: '2027-02-06', no: 'GRCP-179637021', image: 'grcp' },
    { title: { ar: 'مدقق معتمد في الحوكمة والمخاطر والامتثال (GRCA)', en: 'Certified GRC Auditor (GRCA)' },
      issuer: { ar: 'OCEG وGRC Certify', en: 'OCEG & GRC Certify' }, date: '2026-06-03', valid: '2027-02-06', no: 'GRCA-184377243', image: 'grca' }
  ],

  // topic: finance | performance | management | reporting
  courses: [
    { topic: 'finance', title: { ar: 'إدارة المشتريات والعقود', en: 'Procurement & Contracts Management' }, issuer: { ar: 'جامعة الفيصل وKLD عبر Coursera', en: 'Alfaisal University & KLD via Coursera' }, date: '2026-06-11', image: 'procurement-contracts' },
    { topic: 'finance', title: { ar: 'إدارة الميزانية', en: 'Budget Management' }, issuer: { ar: 'معهد الإدارة العامة — إثرائي', en: 'Institute of Public Administration — Ethrai' }, date: '2026-06-25', hours: { ar: 'ساعتان و59 دقيقة', en: '2 h 59 min' }, image: 'budget-mgmt' },
    { topic: 'finance', title: { ar: 'المالية لغير الماليين', en: 'Finance for Non-Financials' }, issuer: { ar: 'معهد الإدارة العامة — إثرائي', en: 'Institute of Public Administration — Ethrai' }, date: '2026-06-25', hours: { ar: 'ساعة و21 دقيقة', en: '1 h 21 min' }, image: 'finance-non-financial' },
    { topic: 'finance', title: { ar: 'إتقان فن التفاوض', en: 'Mastering the Art of Negotiation' }, issuer: { ar: 'إدراك', en: 'Edraak' }, date: '2026-06-14', image: 'negotiation' },
    { topic: 'performance', title: { ar: 'الأساسيات في مؤشرات الأداء الرئيسية', en: 'Introduction to Key Performance Indicators' }, issuer: { ar: 'معهد الإدارة العامة — إثرائي', en: 'Institute of Public Administration — Ethrai' }, date: '2026-06-16', hours: { ar: 'ساعة و5 دقائق', en: '1 h 5 min' }, image: 'kpis' },
    { topic: 'performance', title: { ar: 'إدارة إجراءات العمل', en: 'Business Process Management' }, issuer: { ar: 'معهد الإدارة العامة — إثرائي', en: 'Institute of Public Administration — Ethrai' }, date: '2026-06-15', hours: { ar: 'ساعة و11 دقيقة', en: '1 h 11 min' }, image: 'business-process-mgmt' },
    { topic: 'performance', title: { ar: 'التخطيط والتنظيم وقياس الأداء', en: 'Planning, Organizing & Performance Measurement' }, issuer: { ar: 'صندوق تنمية الموارد البشرية — التدريب الإلكتروني', en: 'HRDF — E-Training Program' }, date: '2026-06-13', hours: { ar: '3 ساعات', en: '3 h' }, image: 'planning-performance' },
    { topic: 'performance', title: { ar: 'إدارة الأداء', en: 'Performance Management' }, issuer: { ar: 'منصة معارف', en: 'M3aarf' }, date: '2026-06-11', image: 'performance-mgmt' },
    { topic: 'management', title: { ar: 'إدارة المشاريع', en: 'Project Management' }, issuer: { ar: 'منصة معارف', en: 'M3aarf' }, date: '2026-06-23', hours: { ar: '6 ساعات', en: '6 h' }, image: 'project-mgmt' },
    { topic: 'management', title: { ar: 'الإشراف الفعّال', en: 'Effective Supervision' }, issuer: { ar: 'منصة معارف', en: 'M3aarf' }, date: '2026-06-11', hours: { ar: 'ساعتان و15 دقيقة', en: '2 h 15 min' }, image: 'effective-supervision' },
    { topic: 'management', title: { ar: 'إدارة الاجتماعات', en: 'Meeting Management' }, issuer: { ar: 'منصة معارف', en: 'M3aarf' }, date: '2026-06-15', hours: { ar: '29 دقيقة', en: '29 min' }, image: 'meeting-mgmt' },
    { topic: 'management', title: { ar: 'مهارات حل المشكلات واتخاذ القرار', en: 'Problem Solving & Decision Making Skills' }, issuer: { ar: 'إدراك', en: 'Edraak' }, date: '2026-06-08', hours: { ar: 'ساعتان', en: '2 h' }, image: 'problem-solving' },
    { topic: 'reporting', title: { ar: 'إعداد التقارير الإدارية', en: 'Preparing Administrative Reports' }, issuer: { ar: 'معهد الإدارة العامة — إثرائي', en: 'Institute of Public Administration — Ethrai' }, date: '2026-06-22', hours: { ar: 'ساعة و3 دقائق', en: '1 h 3 min' }, image: 'admin-reports' }
  ],

  topics: {
    all: { ar: 'الكل', en: 'All' },
    professional: { ar: 'الشهادات المهنية', en: 'Professional certifications' },
    finance: { ar: 'المالية والعقود', en: 'Finance & contracts' },
    performance: { ar: 'الأداء والإجراءات', en: 'Performance & process' },
    management: { ar: 'الإدارة والإشراف', en: 'Management & supervision' },
    reporting: { ar: 'التقارير والبيانات', en: 'Reporting & data' }
  },

  // Notice shown directly under the Work samples heading, in the selected language.
  worksNote: {
    ar: 'تتضمن نماذج الأعمال في هذا القسم بيانات وهمية أُعدّت لأغراض العرض فقط، ولا تمثل سجلات فعلية أو معلومات تشغيلية لأي جهة.',
    en: 'The work samples in this section use fictional data for demonstration purposes only and do not represent actual records or operational information from any organization.'
  },

  works: [
    {
      id: 'contract',
      demo: 'contract',
      sandbox: 'allow-scripts',
      skills: { ar: ['متابعة العقود والموردين', 'التحقق من الفواتير والمطالبات', 'متابعة الميزانية', 'لوحات المتابعة'], en: ['Contract & vendor follow-up', 'Invoice & claim validation', 'Budget monitoring', 'Dashboards'] },
      image: 'works/contract-dashboard.webp',
      gallery: ['works/contract-dashboard.webp', 'works/contract-dashboard-2.webp', 'works/contract-excel.webp'],
      hospital: true,
      title: { ar: 'متابعة الصرف على عقد إسناد خدمات صحية', en: 'Spend tracking for an outsourced healthcare contract' },
      kind: { ar: 'ملف Excel + لوحة متابعة تفاعلية', en: 'Excel workbook + interactive dashboard' },
      goal: {
        ar: 'عقد متعدد السنوات مع مقدم خدمة خارجي، يُصرف شهرياً عبر مسارين، وكانت متابعته تتطلب جمع الفواتير يدوياً في كل مرة. يوفر العمل صورة محدثة للمصروف والمتبقي ووتيرة الصرف قبل اعتماد كل دفعة، وينبه مبكراً إلى الأشهر التي تنقصها شهادات إنجاز.',
        en: 'A multi-year contract with an external provider, paid monthly across two service lines; tracking it meant adding up invoices by hand each time. The work gives an up-to-date view of spend, remaining value and spending pace before each payment approval, and flags months missing completion certificates early.'
      },
      role: {
        ar: 'صممت بنية الملف ومعادلاته ولوحته، ثم أعددت نسخة تفاعلية للإدارة العليا. ويرتبط العمل بمراجعتي فواتير مقدم الخدمة قبل إصدار شهادات الإنجاز.',
        en: "I designed the workbook's structure, formulas and dashboard, then built an interactive version for senior management. The work supports my review of provider invoices before completion certificates are issued."
      },
      features: {
        ar: ['جدول إدخال موحد بمجاميع تراكمية تلقائية وقوائم منسدلة تمنع أخطاء الإدخال', 'ورقة حسابات تغذي المؤشرات: القيمة، والمصروف، والمتبقي، ونسبة الصرف، والأشهر المنقضية والمتبقية', 'مقارنة نسبة الصرف بالمدة المنقضية، مع توقع الصرف حتى نهاية العقد', 'ورقة تحليل بفلاتر للسنة والشهر والمسار بدلاً من الجداول المحورية', 'تحقق آلي من تطابق بنود الفواتير مع الإجمالي المدخل', 'لوحة المتابعة: خط زمني للعقد، ورسوم شهرية وتراكمية، ومؤشر استخدام القيمة، وجدول قابل للبحث والفرز، ومتابعة شهادات الإنجاز الناقصة'],
        en: ['A single entry table with automatic running totals and drop-down lists that prevent input errors', 'A calculations sheet feeding every indicator: value, spent, remaining, % spent, months elapsed and remaining', 'Spend rate compared with time elapsed, with a projection to contract end', 'An analysis sheet with year, month and service-line filters in place of pivot tables', 'An automatic check that invoice lines match the entered total', 'Dashboard: contract timeline, monthly and cumulative charts, utilization gauge, a searchable, sortable table and tracking of missing completion certificates']
      }
    },
    {
      id: 'oncall',
      demo: 'oncall',
      sandbox: 'allow-scripts',
      skills: { ar: ['لوحات المتابعة', 'التقارير الإدارية'], en: ['Dashboards', 'Administrative reports'] },
      image: 'works/oncall-dashboard.webp',
      gallery: ['works/oncall-dashboard.webp', 'works/oncall-dashboard-2.webp', 'works/oncall-excel.webp'],
      hospital: true,
      title: { ar: 'تحليل مناوبات الأقسام الطبية', en: 'On-call rota analysis for clinical departments' },
      kind: { ar: 'ملف Excel + لوحة متابعة تفاعلية', en: 'Excel workbook + interactive dashboard' },
      goal: {
        ar: 'تُعد جداول المناوبات شهرياً في أوراق منفصلة، وتُكتب الأسماء بصيغ مختلفة، ولا تُحتسب بعض الخانات إلا في نهاية الأسبوع، فلم تكن هناك طريقة سريعة لمعرفة عدد مناوبات كل طبيب خلال العام أو من تحمل العبء الأكبر. يقدم العمل رؤية موثقة لتوزيع المناوبات يُستفاد منها في إعداد الجداول القادمة، وتتحدث نتائجه عند إضافة أي جدول جديد.',
        en: "Rotas are prepared monthly on separate sheets, names are spelled in different ways, and some slots count only at weekends, so there was no quick way to see each doctor's duties over the year or who carried the heaviest load. The work provides a documented view of duty distribution to inform future rotas, and its results update whenever a new rota is added."
      },
      role: {
        ar: 'صممت في Excel منطق الاستخراج ومطابقة الأسماء والاحتساب، وأعددت لوحة متابعة تعرض النتائج تفاعلياً.',
        en: 'I designed the extraction, name-matching and counting logic in Excel and built an interactive dashboard to present the results.'
      },
      features: {
        ar: ['ورقة بيانات تستخرج خانات جميع الجداول تلقائياً، وتفصل الخانات المشتركة "اسم/اسم"', 'قائمة أسماء توحد الصيغ المختلفة للاسم الواحد وتصنف الأطباء حسب الفئة', 'قاعدة قابلة للتعديل تحتسب تغطية النهار في الجمعة والسبت والإجازات الرسمية فقط', 'حصر الخانات غير المطابقة لتصحيحها قبل اعتماد الأرقام', 'لوحة المتابعة: عرض متحرك لأعلى عبء في كل جدول، وترتيب حسب الفئة، وملف لكل طبيب، وتوزيع المناوبات حسب النوع'],
        en: ['A data sheet that extracts every slot from all rotas and splits shared "name/name" entries', 'A name list that unifies spelling variants and groups doctors by grade', 'An editable rule that counts day cover only on Fridays, Saturdays and public holidays', 'A count of unmatched entries to correct before the figures are used', 'Dashboard: an animated view of the highest load in each rota, a ranking by grade, a profile for each doctor and a breakdown by duty type']
      }
    },
    {
      id: 'office',
      demo: 'office',
      sandbox: 'allow-scripts',
      skills: { ar: ['العمليات الإدارية', 'مؤشرات الأداء', 'لوحات المتابعة'], en: ['Administrative operations', 'KPIs', 'Dashboards'] },
      image: 'works/office-dashboard.webp',
      gallery: ['works/office-dashboard.webp'],
      hospital: true,
      title: { ar: 'لوحة تشغيل المكتب الإداري', en: 'Administrative office operations dashboard' },
      kind: { ar: 'تصميم واجهة لوحة متابعة', en: 'Dashboard interface design' },
      goal: {
        ar: 'تصور لشاشة واحدة تجمع أولويات المتابعة اليومية للمكتب: المهام وحالتها، ومسارات العمل المؤتمتة، والوثائق المؤرشفة، والتزام الموردين بالعقود. الأرقام المعروضة توضيحية.',
        en: "A single-screen concept that brings an office's daily priorities together: tasks and their status, automated workflows, archived documents and vendor contract compliance. The figures shown are illustrative."
      },
      role: {
        ar: 'صممت الواجهة، وحددت المؤشرات، ونظمت عرض المعلومات.',
        en: 'I designed the interface, selected the indicators and organized the layout.'
      },
      features: {
        ar: ['أربعة مؤشرات رئيسية مع اتجاه التغير', 'مقارنة شهرية بين المهام المؤتمتة واليدوية', 'مهام اليوم بحالات ملونة (مكتمل / قيد المتابعة)', 'مسارات العمل المؤتمتة النشطة', 'مؤشرات دائرية لتوفير الوقت ورضا الفرق'],
        en: ['Four headline KPIs with direction of change', 'A monthly comparison of automated and manual tasks', "Today's tasks with color-coded status (completed / under follow-up)", 'Active automated workflows', 'Ring gauges for time saved and team satisfaction']
      }
    }
  ]
};
