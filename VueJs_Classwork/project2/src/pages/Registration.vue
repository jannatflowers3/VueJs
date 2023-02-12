<template>
    <div class="container mt-5">
        <div class="row justify-content-center">

         <div class="col-sm-10 col-lg-10">
            <h2>Registration Form</h2>
            <form>
                <div class="form-group">
                  <label for="name">Name </label>
                  <input type="text" class="form-control" id="name" name="email"  placeholder="Enter Name">

                </div>
                <div class="form-group">
                    <label for="email">Email </label>
                    <input type="email" class="form-control" id="email" name="email"  placeholder="Enter Email">
                  </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
          
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>