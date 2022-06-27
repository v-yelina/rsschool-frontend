import './sources.css';
import { SourceData } from './sourceData.interface';

class Sources {
    draw(data: SourceData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp !== null) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                if (sourceClone !== null) {
                    sourceClone.querySelector('.source__item-name')!.textContent = item.name;
                    sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);

                    document.querySelector('.sources')!.append(fragment);
                }
            }
        });
    }
}

export default Sources;
