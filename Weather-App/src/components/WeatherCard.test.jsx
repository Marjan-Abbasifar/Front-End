import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import WeatherCard from './WeatherCard';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';  // <-- This line fixes your error

describe('WeatherCard', () => {
    it('Shows Helsinki as the default location', async () => {
        global.fetch = vi.fn().mockResolvedValueOnce({
            json: async () => ({
                name: 'Helsinki',
                sys: { country: 'FI' },
                weather: [{ main: 'Clear', icon: '01d' }],
                main: { temp: 22, humidity: 50, temp_min: 18, temp_max: 24 },
                wind: { speed: 5 }
            }),
        });

        render(<WeatherCard />);
        await waitFor(() => expect(screen.getByText(/Helsinki/i)).toBeInTheDocument());
    });

    it('renders the app title', async () => {
        global.fetch = vi.fn().mockResolvedValueOnce({
            json: async () => ({
                name: 'Helsinki',
                sys: { country: 'FI' },
                weather: [{ main: 'Clear', icon: '01d' }],
                main: { temp: 20, humidity: 40, temp_min: 18, temp_max: 22 },
                wind: { speed: 5 },
            }),
        });

        render(<WeatherCard />);
        expect(await screen.findByText(/weather app/i)).toBeInTheDocument();
    });


    it('updates the location input field when user types', async () => {
        global.fetch = vi.fn().mockResolvedValueOnce({
            json: async () => ({
                name: 'Helsinki',
                sys: { country: 'FI' },
                weather: [{ main: 'Clear', icon: '01d' }],
                main: { temp: 20, humidity: 40, temp_min: 18, temp_max: 22 },
                wind: { speed: 5 },
            }),
        });

        render(<WeatherCard />);

        const input = screen.getByPlaceholderText(/enter the location/i);
        await userEvent.type(input, 'London');

        expect(input).toHaveValue('London');
    });
});