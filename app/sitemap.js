const baseUrl = "https://www.dekodecamp.com";

const routes = [
  "/",
  "/about",
  "/blogs",
  "/blogs/build-portfolio-that-gets-you-hired",
  "/blogs/essential-salesforce-admin-skills-2025",
  "/blogs/salesforce-admin-journey-what-to-expect",
  "/contact",
  "/privacy-policy",
  "/programs",
  "/programs/career-pathways",
  "/programs/full-stack-developer",
  "/programs/salesforce-adm201",
  "/programs/salesforce-developer",
  "/salesforce-bootcamp",
];

export default async function sitemap() {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
