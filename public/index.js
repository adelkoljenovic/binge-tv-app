/* global Vue, VueRouter, axios */

var LogoutPage = {
  template: "<h1>Logout</h1>",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      emailAddress: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email_address: this.emailAddress, password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.emailAddress = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

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
    { path: "/signup", component: SignupPage },
    { path: "/login", component: LoginPage },
    { path: "/logout", component: LogoutPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    console.log('jwt');
    console.log(jwt);
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});
