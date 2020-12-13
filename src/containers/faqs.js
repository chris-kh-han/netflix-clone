import React from 'react'
import { Accordion, OptForm } from '../components'
import faqData from '../fixtures/faqs.json'

export function FaqsContainer() {
    return ( 
        <Accordion>
            <Accordion.Title>Frequently Asked Question</Accordion.Title>
            <Accordion.Frame>
            {faqData.map(faq => (
                <Accordion.Item key={faq.id}>
                    <Accordion.Header>{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try It Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Accordion>

        
    )
}