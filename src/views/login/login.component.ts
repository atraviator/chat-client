import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Login"
})
export default class Login extends Vue {
  public buttonClicked() {
    this.$router.push("chat");
  }
}
