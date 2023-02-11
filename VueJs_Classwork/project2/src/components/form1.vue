
<template>
    <div class="container">
      <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
      <form v-on:submit="dataSubmit" action="">
        <div class="mb-3 mt-3">
          <label for="name" class="form-label">Name:</label>
          <input
            type="name"
            class="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            v-model.trim="formValues.name"
            v-model.lazy="formValues.name"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3 mt-3">
        <label for="age" class="form-label">Age:</label>
          <input
            type="age"
            class="form-control"
            id="age"
            placeholder="Enter age"
            name="age"
            v-model.number="formValues.age"
           
          />
        </div>
  
        <div class="mb-3 mt-3">
          <label for="district" class="form-label">District:</label>
          <select class="form-control" v-model="formValues.district" multiple>
              <option value="">Select One</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylhet">Sylhet</option>
          </select>
        </div>
  
        <div class="mb-3 mt-3">
          <label for="gender" class="form-label">Gender:</label>
              <input type="radio" name="gender" v-model="formValues.gender" value="male" />Male
              <input type="radio" name="gender" v-model="formValues.gender" value="female" />Female
        </div>
  
        <div class="mb-3 mt-3">
          <label for="education" class="form-label">Education:</label>
          <select class="form-control" v-model="formValues.education" multiple>
              <option value="">Select One</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Masters">Masters</option>
              <option value="Alim">Alim</option>
          </select>
        </div>
  
        <div class="mb-3 mt-3">
          <label for="courses" class="form-check-lebel">Courses:</label>
              <input type="checkbox" name="courses" v-model="formValues.courses" class="form-check-input" value="python" />Python
              <input type="checkbox" name="courses" v-model="formValues.courses"  class="form-check-input" value="java" />Java
              <input type="checkbox" name="courses" v-model="formValues.courses"  class="form-check-input" value="laravel" />Laravel
        </div>
  
        <div class="form-check mb-3">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formValues: {
          name: "",
          email: "",
          age: "",
          district: "",
          gender: "",
          education: [],
          courses: []
        },
      };
    },
    methods: {
      dataSubmit(event) {
        event.preventDefault();
        console.log(this.formValues)
        alert(JSON.stringify(this.formValues, null, 2));
        // this.formValues;
      },
    },
  };
  </script>
  
  <style>
  </style>