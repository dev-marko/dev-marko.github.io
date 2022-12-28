import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    InputGroup,
    InputLeftElement,
    Textarea,
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';

import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail, MdSubject } from 'react-icons/md';

const ContactForm = () => {

    function validateName(value) {
        let error;
        if (!value) {
            error = 'Name is required';
        }
        return error;
    }

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validateSubject(value) {
        let error;
        if (!value) {
            error = 'Subject is required';
        }
        return error;
    }

    function validateMessage(value) {
        let error;
        if (!value) {
            error = 'Message body is required';
        }
        return error;
    }

    const {
        isOpen: success,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })

    return (
        <>
            {
                success &&
                <Alert display={'flex'} flexDirection={'row'} align={'center'} justifyContent={'space-between'} status='success'>
                    <AlertIcon />
                    <Box>
                        <AlertTitle>🚀 Sent! 🚀</AlertTitle>
                        <AlertDescription>
                            Hey, thanks for sending a message! I'll get back to you as soon as I can.
                        </AlertDescription>
                    </Box>
                    <CloseButton
                        alignSelf='center'
                        position='relative'
                        onClick={onClose} />
                </Alert>
            }
            <Formik
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, values, process.env.REACT_APP_EMAILJS_USER_ID)
                        .then((result) => {
                            setSubmitting(false);
                            resetForm();
                            onOpen();
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                }}
            >
                {(props) => (
                    <Form>
                        <Field name='name' validate={validateName}>
                            {({ field, form }) => (
                                <FormControl mb={4} isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel color={'brand.neutral'}>Name</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement children={<BsPerson />} />
                                        <Input
                                            {...field}
                                            type="text"
                                            name="name"
                                            placeholder="Your Name" />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='email' validate={validateEmail}>
                            {({ field, form }) => (
                                <FormControl mb={4} isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel color={'brand.neutral'}>Email</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement children={<MdOutlineEmail />} />
                                        <Input
                                            {...field}
                                            type="email"
                                            name="email"
                                            placeholder="Your Email" />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='subject' validate={validateSubject}>
                            {({ field, form }) => (
                                <FormControl mb={4} isInvalid={form.errors.subject && form.touched.subject}>
                                    <FormLabel color={'brand.neutral'}>Subject</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement children={<MdSubject />} />
                                        <Input
                                            {...field}
                                            type="text"
                                            name="subject"
                                            placeholder="Email subject" />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='message' validate={validateMessage} as='textarea'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.message && form.touched.message}>
                                    <FormLabel color={'brand.neutral'}>Message</FormLabel>

                                    <Textarea
                                        {...field}
                                        name="message"
                                        placeholder="Your Message"
                                        rows={6}
                                        resize="none" />
                                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            variant={'primary'}
                            mt={4}
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Send Message
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}/*  */

export default ContactForm;