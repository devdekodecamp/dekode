export default function sitemap() {
  const baseUrl = "https://www.dekodecamp.com";

  const routes = [
    { url: "/", lastModified: "2025-02-01", changeFrequency: "weekly", priority: 1.0 },
    { url: "/about", lastModified: "2025-01-15", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", lastModified: "2025-01-15", changeFrequency: "monthly", priority: 0.7 },
    { url: "/blogs", lastModified: "2025-02-01", changeFrequency: "weekly", priority: 0.8 },
    { url: "/programs", lastModified: "2025-01-20", changeFrequency: "monthly", priority: 0.9 },
    { url: "/salesforce-bootcamp", lastModified: "2025-01-20", changeFrequency: "monthly", priority: 0.9 },
    { url: "/privacy-policy", lastModified: "2025-01-01", changeFrequency: "yearly", priority: 0.3 },
    // Blog posts
    { url: "/blogs/2026-developer-trends-salesforce-fullstack", lastModified: "2025-01-28", changeFrequency: "yearly", priority: 0.7 },
    { url: "/blogs/ai-agents-salesforce-ecosystem", lastModified: "2025-01-20", changeFrequency: "yearly", priority: 0.7 },
    { url: "/blogs/mastering-lwc-enterprise-dev", lastModified: "2025-01-15", changeFrequency: "yearly", priority: 0.7 },
    { url: "/blogs/build-portfolio-that-gets-you-hired", lastModified: "2025-01-22", changeFrequency: "yearly", priority: 0.7 },
    { url: "/blogs/essential-salesforce-admin-skills-2025", lastModified: "2025-01-18", changeFrequency: "yearly", priority: 0.7 },
    { url: "/blogs/salesforce-admin-journey-what-to-expect", lastModified: "2025-01-25", changeFrequency: "yearly", priority: 0.7 },
    // Program pages
    { url: "/programs/career-pathways", lastModified: "2025-01-20", changeFrequency: "monthly", priority: 0.8 },
    { url: "/programs/salesforce-adm201", lastModified: "2025-01-20", changeFrequency: "monthly", priority: 0.8 },
    { url: "/programs/salesforce-developer", lastModified: "2025-01-20", changeFrequency: "monthly", priority: 0.8 },
    { url: "/programs/full-stack-developer", lastModified: "2025-01-20", changeFrequency: "monthly", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
