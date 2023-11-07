export const Services = {
    getCharacters: async (page, size) => {
        try {
            const fetchData = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${size}`)
            const data = await fetchData.json()
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}