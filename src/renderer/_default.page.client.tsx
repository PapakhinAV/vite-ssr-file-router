import ReactDOM from 'react-dom/client'
import {PageShell} from "./PageShell";
import {PageContextClient} from "./types";
const clientRouting = true, hydrationCanBeAborted = true

let root: ReactDOM.Root


async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;

  const page = (
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
  )
  const container = document.getElementById('react-root')!
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}

export { render, clientRouting, hydrationCanBeAborted };
