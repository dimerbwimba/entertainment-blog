export function processTags(allTagsArray: string[]): { name: string, color: string }[] {
    let tagsArray: string[] = [];
    allTagsArray.forEach(tags => {
        tagsArray = tagsArray.concat(tags.split(','));
    });
    const uniqueTags = Array.from(new Set(tagsArray.map(tag => tag.trim())));

    const colors = ['#2596be', '#e28743', '#063970', '#755a4c', '#ef7e32', '#154c79', '#4b3525'];
 
    const randomTags = [];
    for (let i = 0; i < allTagsArray.length; i++) {
        const randomIndex = Math.floor(Math.random() * uniqueTags.length);
        randomTags.push({
            name: uniqueTags[randomIndex],
            color: colors[Math.floor(Math.random() * colors.length)]
        });
        uniqueTags.splice(randomIndex, 1);
    }

    return randomTags;
}

export function extractTags(phrase: string): string[] {
    return phrase.split(",").map(tag => tag.trim());
}