import React, { useState } from 'react';

const Experience = () => {
  const edu = [
    {
      title: "Deloitte USI",
      jobtitle: "Software Engineer",
      location: "Bengaluru",
      duration: "Aug 2024 - Present",
      expandable: true,
      bullets: [
        "Built a full-stack ERP security platform on AWS ECS for 20+ enterprise clients, with multi-tenant isolation via per-client KMS-encrypted S3 buckets and row-level client ID filtering.",
        "Designed a GenAI pipeline using Agno Agent, Qdrant/LanceDB vector databases, and three AI providers (Azure OpenAI, Gemini, Bedrock) for RAG-based ERP role generation — reducing consultant effort from days to minutes.",
        "Built a 4-level RBAC system and comprehensive audit trail (HTTP-level middleware plus versioned domain history) across a 21-table schema with 38 database migrations, meeting SOC 2 segregation-of-duties requirements.",
        "Diagnosed event-loop starvation caused by synchronous LLM calls blocking the async API server; redesigned into a decoupled backend/worker architecture, cutting triggering-endpoint latency from 60+s to under 100ms.",
        "Engineered a parallel SAP evidence analysis engine using ThreadPoolExecutor, DuckDB/Polars OLAP queries, and a custom thread-safe LLM rate limiter — cutting analysis time for 50 controls from 30-60 minutes to under 10.",
        "Implemented a cryptographic non-repudiation layer for audit workpapers (SHA-256 sealing, PAdES PDF signing, RFC 3161 TSA timestamps), accepted by the audit quality team as meeting SOC 2 and ITGC legal defensibility requirements.",
        "Architected CI/CD pipelines (CodeBuild → ECR → ECS + CloudFront invalidation) for zero-downtime releases with S3 multipart upload and post-upload antivirus scanning via EventBridge.",
        "Built federated authentication (Azure AD → SAML → Cognito → OAuth2) with cookie-based JWT, automatic token refresh on 401, and DynamoDB TTL blacklisting for 200+ enterprise users.",
        "Designed a generic, type-parameterized data-access layer and a reflection-based plugin router that auto-discovers and registers new API endpoints, reducing boilerplate across a multi-service backend.",
        "Mentored 3 engineers transitioning from scripting into frontend development, leading their onboarding and code review over a 5-6 week ramp-up period.",
      ],
    },
    {
      title: "Streebo Inc.",
      jobtitle: "Intern",
      location: "Remote",
      duration: "Jun 2024 - Aug 2024",
      bullets: ["Designed and built 15+ chatbots across multiple platforms, integrated with 10+ services to automate workflows, and improved chatbot accuracy to 94%."],
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggle = (index) => setExpanded(prev => ({ ...prev, [index]: !prev[index] }));

  return (
    <div className='text-white bg-zinc-900 md:rounded-2xl flex pb-4'>
      <div className='max-w-[1300px] w-full'>
        <div className='flex items-center px-6 pt-5'>
          <div class="w-3 h-3 rounded-full bg-white glow"></div>
          <div className='px-4 text-sm text-zinc-300'>E X P E R I E N C E</div>
        </div>
        <div className="px-2 pt-10">
          {edu.map((ed, index) => {
            const isExpanded = expanded[index];
            const visibleBullets = ed.expandable && !isExpanded
              ? ed.bullets.slice(0, 3)
              : ed.bullets;

            return (
              <div key={index} className='flex flex-col'>
                <div className="flex px-4 lg:px-9 md:hover:translate-x-4 transition duration-200">
                  <div className='w-[50%]'>
                    <div className='text-2xl md:text-3xl font-semibold'>{ed.title}</div>
                    <div className='text-lg md:text-xl font-semibold pb-2'>{ed.jobtitle}</div>
                  </div>
                  <div className='flex flex-col items-end md:items-start w-[50%]'>
                    <div className='font-semibold text-lg pb-2 md:pb-0'>{ed.location}</div>
                    <div className='text-sm md:text-base text-zinc-400 pb-2'>{ed.duration}</div>
                  </div>
                </div>

                <div className='relative pt-1 px-4 lg:px-9 mb-2 text-zinc-300'>
                  <ul className='list-disc list-outside pl-4 space-y-2'>
                    {visibleBullets.map((b, i) => (
                      <li key={i} className='text-sm md:text-base leading-relaxed ibm-plex-sans-light'>{b}</li>
                    ))}
                  </ul>
                  {ed.expandable && !isExpanded && (
                    <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none' />
                  )}
                </div>

                {ed.expandable && (
                  <button
                    onClick={() => toggle(index)}
                    className='w-full flex justify-center items-center py-2 mb-2 mt-0 text-zinc-600 hover:text-zinc-300 transition-colors duration-200'
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20" fill="none"
                    >
                      <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}

                {!ed.expandable && <div className='mb-6' />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
