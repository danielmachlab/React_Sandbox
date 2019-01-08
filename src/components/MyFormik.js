import React from 'react'

import { Formik } from 'formik'

class MyFormik extends React.Component {
  render() {
    return (
      <div>
        <h1>I hope you like my form! :) </h1>
          <Formik
            initialValues={{ name: '', email: '' }}
            validate={values => {
              let errors = {};
              if (!values.name) {
                errors.name = 'Please add your name'
              } else if (values.name === "Daniel") {
                errors.name = 'Name taken'
              }
              return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <button type="submit" disabled={isSubmitting}>
                Send that fricker
              </button>
            </form>
          )}
          </Formik>
      </div>
        )
      }
    }
    
export default MyFormik