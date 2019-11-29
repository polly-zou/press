const WEB = [
  {
    title: "WEB",
    children: [
      {
        title: "SVG",
        children: [
          ['01.svg/01.基础.md', '基础🐣'],
        ]
      },
      {
        title: "JavaScript",
        children: [
          ['02.Javascript/01.正则表达式.md', '正则表达式🐣'],
        ]
      }
    ]
  }
]
const ALGOR = [
  {
    title: "算法",
    children: [{
        title: "复杂度",
        children: [
          ['01.复杂度/01.时间复杂度.md', '时间复杂度🐣'],
          ['01.复杂度/02.空间复杂度.md', '空间复杂度🐣'],
        ]
      },
      {
        title: "十大排序",
        children: [
          ['02.排序/01.快速排序.md', '快速排序'],
        ]
      }]
  }
]
module.exports = {
  '/web/': WEB,
  '/算法/': ALGOR
}