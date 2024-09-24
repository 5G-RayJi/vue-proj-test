<template>
  <div>
    <h1>VeeValidate</h1>
    <div id="form1">
      <h2 class="green">Form1</h2>
      <VForm @submit="onSubmit">
        <div id="email">
          <span>Email:</span><br />
          <VField name="email" type="email" :rules="validateEmail" placeholder="xxx@gmail.com" />
          <ErrorMessage name="email" />
        </div>
        <div id="pwd">
          <span>Password:</span><br />
          <VField name="pwd" type="password" :rules="validatePassword" placeholder="" />
          <ErrorMessage name="pwd" />
        </div>
        <br />
        <button>Submit</button>
      </VForm>
    </div>
    <div id="form2">
      <h2 class="green">SchemaForm</h2>
      <VForm @submit="onSubmit2" :validation-schema="simpleSchema">
        <div id="email2">
          <span>Email:</span><br />
          <VField name="email2" type="email" placeholder="xxx@gmail.com" />
          <ErrorMessage name="email2" />
        </div>
        <div id="pwd2">
          <span>Password:</span><br />
          <VField name="pwd2" type="password" placeholder="" />
          <ErrorMessage name="pwd2" />
        </div>
        <br />
        <button>Submit2</button>
      </VForm>
    </div>
  </div>
</template>

<script setup>
//vee-validate extracted the form values and passed it to onSubmit handler
const onSubmit = (values) => {
  console.log(JSON.stringify(values))
}

const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}

const validatePassword = (value) => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^\d{6,8}$/i
  if (!regex.test(value)) {
    return 'This field must be 6-8 number'
  }
  // All is good
  return true
}

//----------------------------------------------------------------------
const simpleSchema = {
  email2(value) {
    // validate email value...
    return true
  },
  pwd2(value) {
    const regex = /^\d{6,8}$/i
    if (!regex.test(value)) {
      return 'This field must be 6-8 number'
    }
    // All is good
    return true
  }
}
const onSubmit2 = (values) => {
  console.log(`onSubmit2:${JSON.stringify(values)}`)
}
</script>
<style scoped>
.div_form {
  background-color: hsla(hue, saturation, lightness, alpha);
}
</style>
