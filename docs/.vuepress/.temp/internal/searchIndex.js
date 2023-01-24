export const searchIndex = [
  {
    "title": "Education 💡",
    "headers": [
      {
        "level": 2,
        "title": "Process Discovery",
        "slug": "process-discovery",
        "link": "#process-discovery",
        "children": []
      },
      {
        "level": 2,
        "title": "Notations",
        "slug": "notations",
        "link": "#notations",
        "children": []
      },
      {
        "level": 2,
        "title": "Process Tree",
        "slug": "process-tree",
        "link": "#process-tree",
        "children": []
      },
      {
        "level": 2,
        "title": "DFG",
        "slug": "dfg",
        "link": "#dfg",
        "children": []
      },
      {
        "level": 2,
        "title": "Flower Model",
        "slug": "flower-model",
        "link": "#flower-model",
        "children": []
      },
      {
        "level": 2,
        "title": "Cuts",
        "slug": "cuts",
        "link": "#cuts",
        "children": []
      }
    ],
    "path": "/Education.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Documentation 📖",
    "headers": [
      {
        "level": 2,
        "title": "Introduction",
        "slug": "introduction",
        "link": "#introduction",
        "children": []
      },
      {
        "level": 2,
        "title": "Section1",
        "slug": "section1",
        "link": "#section1",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
