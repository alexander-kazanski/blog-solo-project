import { LoadMoreComponent } from './LoadMoreComponent.js'

export function RecentBlogsComponent(
    date,
    captionHeadline,
    imgsLocationArray,
    chunk=true,
    sectionClassStr='',
) {
    const blogArray = Array.from(Array(5));
    function BlogComponent(idx) {
        if (idx === 0 ) return '';
        return `
            <a class="blog-item" href="blog-page.html">
                <img 
                    alt="a picture of a macbook with code on screen" 
                    src="${imgsLocationArray[idx]}" 
                />
                <p class="blog-item-date">${date}</p>
                <h2 class="blog-item-heading">Blog ${idx}</h2>
                <p class="blog-item-caption">${captionHeadline}</p>
            </a>`
    }
    return `
        <section class="blog-section ${sectionClassStr ? sectionClassStr : ''}">
          <div>
            ${blogArray.map((_, idx) => {
                return BlogComponent(idx);
            }).join("")}
          </div>
            ${chunk ? LoadMoreComponent() : ''}
        </section>`
}

