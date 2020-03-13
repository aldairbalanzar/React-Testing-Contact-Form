import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './components/ContactForm'

test("contact form renders", () => {
    render(<ContactForm />);
});

test("contact form inputs render", () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
})

test("inputs in form submit", () => {
    const { getByLabelText, findByText, getByTestId, findAllByText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: { value: "test"}})
    fireEvent.change(lastNameInput, {target: { value: "test"}})
    fireEvent.change(email, {target: { value: "test"}})
    fireEvent.change(message, {target: { value: "test"}})

    expect(firstNameInput.value).toBe("test")
    expect(lastNameInput.value).toBe("test")
    expect(emailInput.value).toBe("test")
    expect(messageInput.value).toBe("test")

    // fireEvent.click(getByText(/submit/i));
    const button = getByTestId(/submit/i);
    fireEvent.click(button);

    expect(findAllByText(/test/i)).toBeInTheDocument();
    // expect(dataText).toBeInTheDocument();
})