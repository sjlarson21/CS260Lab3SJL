let app = new Vue({
    el: '#app',
    data: {
        number: '',
        current: {
            title: '',
            img: '',
            alt: ''
        },
    },
    created() {
        this.xkcd();
    },
    methods: {
        async xkcd() {
            try {
                const response = await axios.get('https://xkcd.now.sh/' + this.number)
                this.current = response.data;
            } catch(error) {
                console.log(error);
            },
      }
    }
  });