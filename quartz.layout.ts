import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

<script src="https://giscus.app/client.js"
        data-repo="yn-shin/yn_vet"
        data-repo-id="R_kgDOMIjAVg"
        data-category="Announcements"
        data-category-id="DIC_kwDOMIjAVs4CjE5t"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="noborder_light"
        data-lang="ko"
        crossorigin="anonymous"
        async>
</script>


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
 head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
  afterBody: [
  Component.Comments({
    provider: 'giscus',
    options: {
      // data-repo
      repo: 'yn-shin/yn_vet',
      // data-repo-id
      repoId: 'R_kgDOMIjAVg',
      // data-category
      category: 'Announcements',
      // data-category-id
      categoryId: 'DIC_kwDOMIjAVs4CjE5t',
    }
  }),
],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
