
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/vincentiasutardji/IdeaProjects/personal_website/src/pages/404.js")),
  "component---src-pages-aboutme-js": preferDefault(require("/Users/vincentiasutardji/IdeaProjects/personal_website/src/pages/aboutme.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/vincentiasutardji/IdeaProjects/personal_website/src/pages/contact.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/vincentiasutardji/IdeaProjects/personal_website/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vincentiasutardji/IdeaProjects/personal_website/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/vincentiasutardji/IdeaProjects/personal_website/src/pages/projects.js"))
}

