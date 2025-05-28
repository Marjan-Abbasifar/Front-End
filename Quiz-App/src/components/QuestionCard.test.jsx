import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import QuestionCard from "./QuestionCard";
import questions from "../data/questions";
import '@testing-library/jest-dom/vitest'
import userEvent from "@testing-library/user-event";
import { describe,it,expect } from "vitest";

describe ('QuestionCard', () => {
    it('Shows the app title',() => {
         

         render (<QuestionCard/>) 
         expect (screen.getByText(/my quiz app/i)).toBeInTheDocument();
      });

      it('Renders first question text' , ()=> {
        render(<QuestionCard/>)
        expect(screen.getByText(/What is the capital of Italy\?/i)).toBeInTheDocument();
      })

      it('Shows the wrong button' , ()=> {
        render(<QuestionCard/>)
        const optionButtons = screen.getAllByRole('button')
        fireEvent.click(optionButtons[0]);
        expect(optionButtons[0].className).toContain('wrong')
      })

       it('Shows the correct button' , ()=> {
        render(<QuestionCard/>)
        const optionButtons = screen.getAllByRole('button')
        fireEvent.click(optionButtons[1]);
        expect(optionButtons[1].className).toContain('correct')
      })

      it('Shows the first question initially and goes to the next queston after clicking on next button' , () => {
        render(<QuestionCard/>)
         expect(screen.getByText(/What is the capital of Italy\?/i)).toBeInTheDocument();
         const nextButton = screen.getByRole("button", {name: /next/i});
         fireEvent.click(nextButton);
         expect(screen.getByText(/What is the biggest ocean on the earth\?/i)).toBeInTheDocument();

      })



});