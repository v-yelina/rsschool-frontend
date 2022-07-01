import './news.css';
import { NewsData } from './newsData.interface';

class News {
    draw(data: NewsData[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;

            if (idx % 2) newsItem.classList.add('alt');

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            newsMetaAuthor.textContent = item.author || item.source.name;

            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLTitleElement;
            newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLTitleElement;
            newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent = newsClone.querySelector(
                '.news__description-content'
            ) as HTMLParagraphElement;
            newsDescriptionContent.textContent = item.description;

            const newsReadMoreLink = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;
            newsReadMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsDiv = document.querySelector('.news') as HTMLDivElement;
        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
