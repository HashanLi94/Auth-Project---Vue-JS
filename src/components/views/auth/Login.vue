<template>
  <div class="m--login">
    <div class="form-demo">
      <div class="p-d-flex p-jc-center">
        <div class="card p-shadow-14">
          <h2 class="p-text-center">Login</h2>

          <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
            <div class="p-field">
              <div class="p-float-label p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText
                  id="email"
                  v-model="v$.email.$model"
                  :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                  aria-describedby="email-error"
                />
                <label
                  for="email"
                  :class="{ 'p-error': v$.email.$invalid && submitted }"
                  >Email*</label
                >
              </div>
              <span v-if="v$.email.$error && submitted">
                <span
                  id="email-error"
                  v-for="(error, index) of v$.email.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
              <small
                v-else-if="
                  (v$.email.$invalid && submitted) ||
                    v$.email.$pending.$response
                "
                class="p-error"
                >{{
                  v$.email.required.$message.replace("Value", "Email")
                }}</small
              >
            </div>
            <div class="p-field">
              <div class="p-float-label">
                <Password
                  id="password"
                  v-model="v$.password.$model"
                  :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                  toggleMask
                >
                  <template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer="sp">
                    {{ sp.level }}
                    <Divider />
                    <p class="p-mt-2">Suggestions</p>
                    <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                    </ul>
                  </template>
                </Password>
                <label
                  for="password"
                  :class="{ 'p-error': v$.password.$invalid && submitted }"
                  >Password*</label
                >
              </div>
              <small
                v-if="
                  (v$.password.$invalid && submitted) ||
                    v$.password.$pending.$response
                "
                class="p-error"
                >{{
                  v$.password.required.$message.replace("Value", "Password")
                }}</small
              >
            </div>

            <Button
              type="submit"
              label="Submit"
              class="p-mt-2 p-ripple purple"
              v-ripple
            />
          </form>

          <div class="p-text-center p-mt-4">
            <h5>
              Don't Have An Account?
              <router-link :to="{ name: 'SignUp' }"> Register </router-link>
            </h5>
          </div>

          <div class="p-text-center p-mt-3">
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h4>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, rem.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AuthLayout from "../../layouts/AuthLayout.vue";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  countryService: null,
  validations() {
    return {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    };
  },
  //   created() {
  //     this.$emit("update:layout", AuthLayout);
  //   },
  mounted() {},
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }
    },

    resetForm() {
      this.email = "";
      this.password = "";
      this.submitted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-demo {
  .card {
    margin: 4rem 1rem 0 1rem;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;

    form {
      margin-top: 2rem;
    }

    .p-field {
      margin-bottom: 2rem;
    }
  }
}
</style>
