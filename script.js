Vue.createApp({
    data() {
      return {
        personName: "",
        selectedClass: null,
        classes: [
          {
            value: "",
            text: "Please choose a class"
          },
          {
            value: "2021-nov",
            text: "2021 - November"
          },
          {
            value: "2021-dez",
            text: "2021 - December"
          },
          {
            value: "2022-jan",
            text: "2022 - January"
          }
        ]
      };
    },
    computed: {
      displayName() {
        return this.personName.length > 0 ? this.personName : "John Doe";
      },
      displayClass() {
        return this.selectedClass.value === "" ? "-" : this.selectedClass.text;
      }
    },
    created() {
      this.selectedClass = this.classes[0];
    }
  }).mount("#app");
  