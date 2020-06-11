import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''

const Head = props => (
  <div>
    <NextHead>
    <meta charSet="UTF-8" />
    <meta name="theme-color" content="white" />
    <meta name="msapplication-navbutton-color" content="white" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/x-mathjax-config" dangerouslySetInnerHTML={{ __html: `
      MathJax.Ajax.config.path["mhchem"] =
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.2";
      MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$']],
        displayMath: [["$$", "$$"]],
        processEscapes: true
      },
      jax: ["input/TeX","input/MathML","input/AsciiMath","output/CommonHTML"],
      extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "a11y/accessibility-menu.js"],
      TeX: {
        extensions: ["[mhchem]/mhchem.js"],
      },
      "HTML-CSS": {
        fonts: ["TeX"],
      },
      CommonHTML: {
        scale: 90,
        fill: "#f2f2f2"
      },
      showMathMenu: false,
      messageStyle: "none",
      svg: {
        scale: 1,                  
        minScale: .5,              
        matchFontHeight: true,     
        mtextInheritFont: false,   
        merrorInheritFont: true,   
        mathmlSpacing: false,      
        skipAttributes: {},        
        exFactor: .5,              
        displayAlign: 'center',    
        displayIndent: '0',        
        fontCache: 'local',        
        localID: null,             
        internalSpeechTitles: true,
        titleID: 0                 
      }
      })
    `}} />
    <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"></link>
    </NextHead>
  </div>
)

Head.propType = {
  title: string,
  description: string
}

export default Head