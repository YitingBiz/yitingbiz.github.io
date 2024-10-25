'use client'

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Container } from "@radix-ui/themes";
import { pushEvent } from "@/app/utils/gtm";

const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setStatus('');

        const formData = Object.fromEntries(new FormData(event.target));

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.error) {
                setStatus('error');
            } else {
                setStatus('success');
                pushEvent({
                    event: 'newsletter_signup',
                    category: 'Engagement',
                    action: 'Newsletter Signup',
                    label: 'Homepage Form',
                    value: 1,
                    signupLocation: 'homepage', // Custom data you might want to track
                    timestamp: new Date().toISOString()
                  })
                event.target.reset();
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
                <h2>Subscribe</h2>
                <Form.Root
                    className="w-full flex justify-center items-center bg-red-400"
                    onSubmit={handleSubmit}
                >
                    <Form.Field className="mb-2.5 grid" name="name">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                Name
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Please enter your name
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                                type="text"
                                required
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field className="mb-2.5 grid" name="email">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                Email
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Please enter your email
                            </Form.Message>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="typeMismatch"
                            >
                                Please provide a valid email
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                                type="email"
                                required
                            />
                        </Form.Control>
                    </Form.Field>


                    <Form.Submit asChild>
                        <button
                            className={`mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none disabled:opacity-50 ${isLoading ? 'cursor-not-allowed' : ''
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </Form.Submit>

                    {status === 'success' && (
                        <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm rounded">
                            Thanks for signing up! Please check your email to confirm.
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded">
                            Sorry, there was an error. Please try again later.
                        </div>
                    )}
                </Form.Root>
        </Container>
    );
};

export default SignupForm;