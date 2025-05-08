import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import WeatherCard  from './WeatherCard'
import '@testing-library/jest-dom/vitest'



it('Shows Helsinki as the default location', async() => {
    global.fetch=vi.fn().mockResolvedValueOnce({
        json:async()=>({
            name: 'Helsinki',
            sys: {country: 'FI'},
            weather:[{main:'clear', icon:'01d'}],
            main: {temp:22, humidity:50,temp_min:18, temp_max:24},
            wind: {speed:5}
        }),
    });
    render(<WeatherCard/>);
    await waitFor(()=> expect(screen.getByText(/Helsinki/i)).toBeInTheDocument());
    
});






