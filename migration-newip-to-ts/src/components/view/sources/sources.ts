import './sources.css';
import { SourceData } from './sourceData.interface';

class Sources {
    draw(data: SourceData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp != null) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                if (sourceClone != null) {
                    const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
                    sourceItemName.textContent = item.name;
                    const sourceItem = sourceClone.querySelector('.source__item') as HTMLDivElement;
                    sourceItem.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);

                    const sources = document.querySelector('.sources') as HTMLDivElement;
                    sources.append(fragment);
                }
            }
        });
    }
}

export default Sources;
