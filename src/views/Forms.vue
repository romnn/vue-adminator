<template>
  <masonry-layout-c title="Forms">
    <!-- Basic Form -->
    <masonry-layout-tile-c section="Basic Form">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
          <input
            type="checkbox"
            id="inputCall1"
            name="inputCheckboxesCall"
            class="peer"
          />
          <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
            <span class="peer peer-greed">Call John for Dinner</span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </masonry-layout-tile-c>

    <!-- Complex Form Layout -->
    <masonry-layout-tile-c section="Complex Form Layout">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group">
          <div class="checkbox checkbox-circle checkbox-info peers ai-c">
            <input
              type="checkbox"
              id="inputCall2"
              name="inputCheckboxesCall"
              class="peer"
            />
            <label for="inputCall2" class=" peers peer-greed js-sb ai-c">
              <span class="peer peer-greed">Call John for Dinner</span>
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </masonry-layout-tile-c>

    <!-- Horizontal Form -->
    <masonry-layout-tile-c section="Horizontal Form">
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <div class="col-sm-2">Checkbox</div>
            <div class="col-sm-10">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  Option one is great
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  Option two can be something else and selecting it will
                  deselect option one
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                    disabled
                  />
                  Option three is disabled
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" /> Check me out
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
    </masonry-layout-tile-c>

    <!-- Disabled Forms -->
    <masonry-layout-tile-c section="Disabled Forms">
      <form>
        <fieldset disabled>
          <div class="form-group">
            <label for="disabledTextInput">Disabled input</label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="Disabled input"
            />
          </div>
          <div class="form-group">
            <label for="disabledSelect">Disabled select menu</label>
            <select id="disabledSelect" class="form-control">
              <option>Disabled select</option>
            </select>
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" /> Can't check
              this
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </masonry-layout-tile-c>

    <!-- Validation -->
    <masonry-layout-tile-c section="Validation">
      <form class="container" id="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01">First name</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              placeholder="First name"
              value="Mark"
              required
            />
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02">Last name</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Last name"
              value="Otto"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom03">City</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              placeholder="City"
              required
            />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom04">State</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom04"
              placeholder="State"
              required
            />
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom05">Zip</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              placeholder="Zip"
              required
            />
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </masonry-layout-tile-c>
  </masonry-layout-c>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MasonryLayoutC from "../components/MasonryLayout.vue";
import MasonryLayoutTileC from "../components/MasonryLayoutTile.vue";

@Component({
  name: "Forms",
  components: {
    MasonryLayoutC,
    MasonryLayoutTileC
  }
})
export default class Forms extends Vue {}
</script>
