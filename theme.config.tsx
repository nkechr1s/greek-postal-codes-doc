import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Greek Postal Codes API</span>,
  footer: {
    text: 'MIT Licensed | Copyright © 2023 - present',
  },
  feedback: {
    content: null,
  },
  editLink:{
    component:null
  },
  // docsRepositoryBase: 'https://github.com/nkechr1s/postal-codes-doc/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – GPCA'
    }
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://dev.greek-postal-codes.gr${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Greek Postal Codes API'} />
      <meta property="og:description" content={frontMatter.description || 'Get data for all greek postal codes'} />
    </>
  },
}

export default config

