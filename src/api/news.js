import axios from 'axios';

export async function fetchNews() {
    try {
        const { data } = await axios.get(
            `https://api.currentsapi.services/v1/search?apiKey=ltszIpd4YwLRzkUGOlJuuQNPK6C7JLPCvkNZ_6ROosPOFl1c&keyword=${
                'covid' || 'pandemic' || 'disaster' || 'hurricane' || 'warming' || 'flood' || 'bomb'
            }`
            );
        return data
        
    } catch (error) {
        throw error;
    }
}