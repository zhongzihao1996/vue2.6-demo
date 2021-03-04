export default {
  data() {
    return {
      msg: 'Vue',
    };
  },
  methods: {
    console(msg) {
      console.log(msg);
      console.log('hello world');
    },
  },
  render() {
    return (
      <div>
        <h2 onClick={() => this.console('hi')}>hello world</h2>
        <p>{this.msg}</p>
        <input vModel={this.msg} type="text" />
      </div >
    );
  },
};

