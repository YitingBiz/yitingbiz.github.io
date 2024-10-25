'use client'

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus('');
    setErrorMessage('');

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email')
    };

    try {
      console.log('Submitting data:', data); // Debug log

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(result.details || result.error || 'Subscription failed');
        console.error('Signup error:', result); // Debug log
      } else {
        setStatus('success');
        event.target.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[400px] bg-gray-900 flex items-center justify-center p-6">
      <Form.Root 
        className="w-[320px]" 
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
            className={`mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none disabled:opacity-50 ${
              isLoading ? 'cursor-not-allowed' : ''
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
            {errorMessage || 'Sorry, there was an error. Please try again later.'}
          </div>
        )}
      </Form.Root>
    </div>
  );
};

export default SignupForm;