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

var CreateGroupPage = {
  template: "#create-group-page",
  data: function() {
    return {
      name: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        // what is the errors function doing for this create; errors code was taken from sign up pag? --- do I need?
      };
      axios
        .post("/api/groups", params)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var ViewGroupPage = {
  template: "#view-group-page",
  data: function() {
    return {
      groups: [],
      group_users: [],
      usersinfo: [],
      title: []
    };
  },
  created: function() {
    console.log("in the created function");
    axios.get('/api/groups').then(function(response) {
      console.log(response.data);
      this.groups = response.data;
    }.bind(this)); 
    axios.get('api/users').then(function(response) {
      console.log(response.data);
      this.usersinfo = response.data;
    }.bind(this)); 
  },

  methods: {
    join: function(groupId) {
      var params = {
        id: groupId
      };
      // console.log("in the join function");
      axios.post('/api/group_users', params).then(function(response) {
        console.log(response.data);
      }.bind(this));
    },
    selecttv: function(title) {
      var params = {
        title: this.show.title
      };
      axios.post('/api/events', params).then(function(response) {
        console.log(response.data);
      }.bind(this));
    }
  },
  computed: {}
};

var SetupSelectionPage = {
  template: "#setup-selection-page",
  data: function() {
    return {
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      item: "",
      date: "",
      time: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params1 = {
        street_address: this.streetAddress,
        city: this.city,
        state: this.state,
        zip_code: this.zipCode
        // what is the errors function doing for this create; errors code was taken from sign up pag? --- do I need?
      };
      var params2 = {
        item: this.item,
      };
      var params3 = {
        date: this.date,
        time: this.time
      };

      axios
        .post("/api/locations", params1)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );

      axios
        .post("/api/food_bev_selections", params2)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );

      axios
        .post("/api/dt_time_selections", params3)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );     
    }
  }
};

var ViewLocationPage = {
  template: "#view-location-page",
  data: function() {
    return {
      locations: []
    };
  },
  created: function() {
    console.log("in the created function of view location page");
    axios.get('/api/locations').then(function(response) {
      console.log(response.data);
      this.locations = response.data;
    }.bind(this)); 
  },

  // below was likely copy and pasted in the wrong section of this file, maybe delete later
  // methods: {
  //   join: function(groupId) {
  //     var params = {
  //       id: groupId
  //     };
  //     // console.log("in the join function");
  //     axios.post('/api/group_users', params).then(function(response) {
  //       console.log(response.data);
  //     }.bind(this));
  //   }
  // },
  computed: {}
};

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      catalogues: [],
      newSearch: {name: ""},
      title: []
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
    }, 
    select: function(title) {
      var params = {
        title: this.catalogues.results[0].name
      };
      // console.log("in the select function");
      axios.post('/api/tele_selections', params).then(function(response) {
        console.log(response.data);
      }.bind(this));
    }
  },

  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/groups/create", component: CreateGroupPage },
    { path: "/groups/view", component: ViewGroupPage },
    { path: "/selections/setup", component: SetupSelectionPage },
    { path: "/location/view", component: ViewLocationPage },
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
