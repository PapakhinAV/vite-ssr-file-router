import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import {PageContext} from "./types";
import {PageShell} from "./PageShell";

const passToClient = ['pageProps', 'urlPathname', 'initialData', 'isLoading']

async function render(pageContext: PageContext) {
  const { Page,  pageProps } = pageContext
  const pageHtml = renderToString(
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
  )
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

export { render, passToClient };
