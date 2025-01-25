import React from "react";
import '@testing-library/jest-dom/extend-expect'; // Make sure this line is at the top
import { render, screen } from '@testing-library/react';
import Hero from "../landing_page/home/Hero";

// Your test code follows...

//test suite
describe("Hero Component",()=>{
    test("render hero image",()=>{
        render(<Hero/>);
        const heroImage =screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    });
});