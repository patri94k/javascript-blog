'use strict';
function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('clickedElement (with plus):' + clickedElement);

/* [DONE] remove class 'active' from all articles links*/

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
};
/*[DONE] add class 'active' to the clicked link*/
clickedElement.classList.add('active');

console.log('clickedElement:', clickedElement);

/*[DONE] remove class 'active' from all articles*/
const activeArticles = document.querySelectorAll('.post');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
};
/*get 'href' attribute from the clicked link*/
const articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector);

/*find the correct article using the selector (value of 'href' attribute)*/
const targetArticle = document.querySelector('article-1')
/*add class 'active' to the correct article*/
targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

function generateTitleLinks(){

  /*remove contents of titleList*/
  const titleList = querySelector(optTitleSelector);
  function clearMessages(){
    document.getElementById('titles').innerHTML = '';
  }
  /*for each article*/
  const articles = querySelector(optArticleSelector);
  for(let article of articles){
  console.log(article);
  }
  /*get the article id*/
const articleId = article.getAttribute('id')
/*find the title element*/
const title = querySelector(optTitleSelector).innerHTML
/*get the title from the title element*/
const articleTitle = article.querySelector(optTitleSelector).innerHTML
/*create HTML of the link*/
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log(linkHTML);
/*insert link onto titlelist*/
titleList.innerHTML = titleList.innerHTML + linkHTML;
titleList.insertAdjacentHTML("beforebegin", linkHTML);
}

generateTitleLinks();