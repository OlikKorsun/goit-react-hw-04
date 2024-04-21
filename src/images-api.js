import axios from 'axios'

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const searchImg = async (search, currentPage) => {
    try {
        const response = await axios.get("", {
            params: {
                client_id: "2rrD9AWV7ejmyrcf5G1eLtv5Z0TCsjIeX4prt1TgmVE",
                query : search,
                page : currentPage,
                per_page: 3,
            },
        });
        return response.data.results;
    }
    catch (error) {
        throw new Error();

    }
}