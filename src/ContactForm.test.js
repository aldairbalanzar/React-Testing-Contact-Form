import React from "react";
import { render } from "@testing-library/react";
import ContactForm from './components/ContactForm'

test("contact form renders", () => {
    render(<ContactForm />);
});

test("contact form", () => {
    const { getByLabelText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
})
