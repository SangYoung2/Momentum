const quotes = [
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "-로망로망-"
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "-파울로 코엘료-"
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "-로버트 엘리엇-"
    },
    {
        quote: "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "-이드리스 샤흐-"
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리",
        author: "-셸리-"
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "-L.론허바드-"
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
        author: "–볼드윈-"
    },
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "–탈무드"
    },
    {
        quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
        author: "-헬렌 켈러-"
    },
    {
        quote: "막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author: "–생떽쥐베리"
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;