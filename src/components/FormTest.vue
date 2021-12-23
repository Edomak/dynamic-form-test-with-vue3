<template>
  <div class="container">
    <h1>Dynamic Form Test With Vue 3</h1>
    <DynamicForm 
      :form="form"
      @submitted="formSubmitted"
      @error="processErrors"
    />
    <button 
      class="btn_submit" 
      submit="true" 
      :form="form.id">
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { 
  TextField,
  EmailField,
  PasswordField,
  CheckboxField,
  Validator, 
  required,
  email,
  pattern,
  UrlField,
  url,
  NumberField,
  min,
  SelectField,
  TextAreaField,
  minLength,
  RadioField
} from '@asigloo/vue-dynamic-forms';

export default defineComponent({
  name: 'FormTest',
  setup() {
    const form = reactive({
      id: 'example_form',
      fields: {
        TextInput: TextField({
          label: "Username",
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        email: EmailField({
          label: "Email",
          validations: [
            Validator({ validator: required, text: 'This field is required' }),
            Validator({ validator: email, text: 'Format of email is incorrect' }),
          ],
        }),
        password: PasswordField({
          label: "Password",
          validations: [
            Validator({
              validator: pattern(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[#$^+=!*()@%&]).{8,10}$',
              ),
              text: 'Password must contain at least 1 Uppercase, 1 Lowercase, 1 number, 1 special character and min 8 characters max 10',
            }),
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        website: UrlField({
          label: 'Website',
          validations: [
            Validator({
              validator: url,
              text: 'Format of url is incorrect',
            }),
          ],
        }),
        age: NumberField({
          label: 'Age',
          validations: [
            Validator({
              validator: min(18),
              text: 'You must be older than 18',
            }),
            Validator({ validator: required, text: 'This field is required' }),
          ],
        }),
        character: SelectField({
            label: 'Characters',
            options: [
              {
                value: '',
                label: '',
              },
              {
                value: 'beatrix kiddo',
                label: 'Beatrix Kiddo',
              },
              {
                value: 'david mills',
                label: 'David Mills',
              },
              {
                value: 'martin brody',
                label: 'Martin Brody',
              },
              {
                value: 'tyler durden',
                label: 'Tyler Durden',
              },
            ],
          }),
          interests: TextAreaField({
            label: 'Bio',
            col: 5,
            rows: 10,
            validations: [
              Validator({
                validator: minLength(10),
                text: 'Text must be greater than 10 characters long',
              }),
            ],
          }),
            console: RadioField({
            label: 'Select one option',
            options: [
              {
                key: 'nintendo-switch',
                value: 'Nintendo Switch',
              },
              {
                key: 'ps4',
                value: 'Console PS4',
              },

              {
                key: 'ps5',
                value: 'Console PS5',
              },
              {
                key: 'Xbox',
                value: 'XBox Serie X',
              },
              {
                key: 'default',
                value: 'Default',
              },
            ],
            value: 'default',
          }),
        remember: CheckboxField({
          label: "Remember me",
        }),
        condition: CheckboxField({
          label: "I agree terms and conditions",
          condition: "remember",
          validations: [
            Validator({ validator: required, text: 'You must accept terms and conditions to continue' })
          ]
        }),
      },
      // options: {
      //   resetAfterSubmit: true,
      // }, => Default
    })
    const formSubmitted = () => {
      alert("Form Submitted Successfully!");
    }

    return {
      form,
      formSubmitted
    }
  }
});
</script>

<style scoped lang="scss">

  h1 {
    text-align: center;
  }

  .container {
    width: 50%;
    margin: 0 auto;
    padding: 50px 0;
  }

  .btn_submit {
    padding: 10px 30px;
    background-color: #2c3e50;
    color: white;
    border-radius: 5px;
    border: none;
  }

</style>
