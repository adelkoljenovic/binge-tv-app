/* global Vue, VueRouter, axios */

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        gender: this.gender,
        date_of_birth: this.dateOfBirth,
        email_address: this.emailAddress,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      catalogues: [],
      newSearch: {name: ""}
    };
  },
  created: function() {
    console.log('in created in index.js file');
    axios.get('/api/catalogues').then(function(response) {
      console.log(response.data);
      console.log('in the callback for catalogues index');
      this.catalogues = response.data;
    }.bind(this));
  },
  methods: {
    newTvSearch: function() {
      console.log('sending search to api...');
      var theParams = {
        name: this.newSearch.name
      };
      axios.get('api/catalogues?name=' + theParams.name).then(function(response) {
        console.log('inside callback...');
        this.catalogues = response.data;
      }.bind(this));
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/signup", component: SignupPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
