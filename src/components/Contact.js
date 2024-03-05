import { Field, Form, Formik } from "formik";

const Contact = ()=>{
    return(
    <div className="pt-28 mx-auto max-w-lg mb-12 border border-gray-300 p-6 shadow-lg rounded-md">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <Formik initialValues={{ name: '', email: '' }}  onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        <Form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 p-2 w-full border-none rounded-md bg-gray-100"
                    placeholder="Enter Name..."
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 p-2 w-full border-none rounded-md bg-gray-100"
                    placeholder="Enter Email..."
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="mt-1 p-2 w-full border-none rounded-md resize-none bg-gray-100"
                    placeholder="Message..."
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
        </Form>
    </Formik>
</div>

    )
}

export default Contact;