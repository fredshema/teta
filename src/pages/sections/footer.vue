<template>
  <section class="bg-dark text-light py-5">
    <b-container class="">
      <b-row align-h="between">
        <b-col cols="12" md="6" lg="6">
          <b-form @submit.prevent="send" class="pr-0 pr-md-3 pr-lg-4">
            <b-form-group>
              <b-input v-model="name" trim required placeholder="Your full name"
                class="bg-dark border-light text-light input" />
            </b-form-group>
            <b-form-group>
              <b-input type="email" class="bg-dark border-light text-light input" trim required v-model="email"
                placeholder="Your email" />
            </b-form-group>
            <b-form-group>
              <b-textarea trim v-model="message" required rows="5" placeholder="Message here"
                class="bg-dark border-light text-light input"></b-textarea>
            </b-form-group>
            <b-form-group>
              <b-button block variant="light" type="submit">
                <span v-if="state.loading">
                  <b-spinner small />
                </span>
                <span v-else>SEND</span>
              </b-button>
            </b-form-group>
          </b-form>
        </b-col>
        <b-col cols="12" md="4" lg="4">
          <b-row align-v="center" class="mb-4 justify-content-center justify-content-md-end mt-4 mt-md-0">
            <div class="logo-box rounded text-primary">TETA CHEL</div>
          </b-row>
          <b-row class="mb-4 flex-column align-items-center align-items-md-end">
            <h6>
              Contact:
              <a :href="'tel:' + personalInfo.phone.number">
                {{ personalInfo.phone.label }}
              </a>
            </h6>
            <h6>
              Email:
              <a :href="'mailto:' + personalInfo.email">
                {{ personalInfo.email }}
              </a>
            </h6>
          </b-row>
          <b-row align-h="end" class="justify-content-center justify-content-md-end">
            <b-col cols="1">
              <a :href="personalInfo.social.facebook" target="_blank" class="text-light">
                <b-icon-facebook />
              </a>
            </b-col>
            <b-col cols="1">
              <a :href="personalInfo.social.instagram" target="_blank" class="text-light">
                <b-icon-instagram />
              </a>
            </b-col>
            <b-col cols="1">
              <a :href="personalInfo.social.twitter" target="_blank" class="text-light">
                <b-icon-twitter />
              </a>
            </b-col>
            <b-col cols="1">
              <a :href="personalInfo.social.youtube" target="_blank" class="text-light">
                <b-icon-youtube />
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      state: { loading: false },
      name: null,
      email: null,
      message: null,
    };
  },
  computed: {
    personalInfo() {
      return require("../../../info").default.personal;
    }
  },
  methods: {
    async send() {
      try {
        this.state.loading = true;
        const data = await this.axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          {
            user_id: "user_JO6leZ9m5OppROqiYcZHT",
            service_id: "service_tga6eg8",
            template_id: "template_9bhgofi",
            template_params: {
              name: this.name,
              email: this.email,
              message: this.message,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        this.state.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input,
textarea {
  &::placeholder {
    color: #a7adb9fc !important;
  }
}

.list-item {
  list-style: none;
  padding: 5px 4px;
  font-size: 17px;

  a {
    color: var(--light);

    &:hover {
      text-decoration: none;
      opacity: 0.7;
    }
  }
}

.logo-box {
  background-color: black;
  height: 100px;
  width: 115px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>