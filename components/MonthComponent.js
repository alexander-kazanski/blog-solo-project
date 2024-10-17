export function MonthComponent(date, headline, caption) {
    return `
        <section class="month-header">
            <p class="header-date">${date}</p>
            <h1 class="header-title">${headline}</h1>
            <p class="header-title-caption">${caption}</p>
        </section>`
} 